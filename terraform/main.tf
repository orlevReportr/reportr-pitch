terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.0"
}

provider "aws" {
  region = "ap-southeast-2"
}

# S3 bucket for hosting static website
resource "aws_s3_bucket" "pitch_reportr" {
  bucket = "pitch-reportr-ai-static-site"
}

# S3 bucket website configuration
resource "aws_s3_bucket_website_configuration" "pitch_reportr" {
  bucket = aws_s3_bucket.pitch_reportr.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# S3 bucket public access block (we'll allow public read for CloudFront)
resource "aws_s3_bucket_public_access_block" "pitch_reportr" {
  bucket = aws_s3_bucket.pitch_reportr.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# S3 bucket policy for CloudFront access
resource "aws_s3_bucket_policy" "pitch_reportr" {
  bucket = aws_s3_bucket.pitch_reportr.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.pitch_reportr.arn}/*"
      },
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.pitch_reportr]
}

# CloudFront Origin Access Control
resource "aws_cloudfront_origin_access_control" "pitch_reportr" {
  name                              = "pitch-reportr-oac"
  description                       = "OAC for pitch.reportr.ai"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# CloudFront distribution
resource "aws_cloudfront_distribution" "pitch_reportr" {
  origin {
    domain_name              = aws_s3_bucket.pitch_reportr.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.pitch_reportr.id
    origin_id                = "S3-pitch-reportr"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  # aliases = ["pitch.reportr.ai"]  # Commented out - will use CloudFront domain initially

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-pitch-reportr"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  # Custom error pages for SPA
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Name = "pitch-reportr-ai"
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# IAM policy for deployment (optional - if you need specific deployment permissions)
resource "aws_iam_policy" "pitch_reportr_deploy" {
  name        = "pitch-reportr-deploy-policy"
  description = "Policy for deploying pitch.reportr.ai"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:PutObjectAcl",
          "s3:GetObject",
          "s3:DeleteObject",
          "s3:ListBucket"
        ]
        Resource = [
          aws_s3_bucket.pitch_reportr.arn,
          "${aws_s3_bucket.pitch_reportr.arn}/*"
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation"
        ]
        Resource = aws_cloudfront_distribution.pitch_reportr.arn
      }
    ]
  })
}

# Outputs
output "s3_bucket_name" {
  value = aws_s3_bucket.pitch_reportr.id
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.pitch_reportr.id
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.pitch_reportr.domain_name
}

output "website_url" {
  value = "https://${aws_cloudfront_distribution.pitch_reportr.domain_name}"
}