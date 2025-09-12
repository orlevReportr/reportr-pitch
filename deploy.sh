#!/bin/bash

# Deploy script for pitch.reportr.ai
set -e

echo "🚀 Deploying pitch.reportr.ai..."

# Check if we're in the right directory
if [ ! -f "next.config.js" ] && [ ! -f "next.config.mjs" ]; then
    echo "❌ Error: Please run this script from the Next.js project root directory"
    exit 1
fi

# Build the Next.js application
echo "📦 Building Next.js application..."
npm run build

# Initialize and apply Terraform
echo "🏗️ Setting up AWS infrastructure..."
cd terraform
terraform init
terraform plan
terraform apply -auto-approve

# Get the S3 bucket name from Terraform output
BUCKET_NAME=$(terraform output -raw s3_bucket_name)
CLOUDFRONT_ID=$(terraform output -raw cloudfront_distribution_id)

echo "📤 Uploading files to S3..."
cd ..

# Sync the out directory to S3
aws s3 sync out/ s3://$BUCKET_NAME --delete --region ap-southeast-2

# Create CloudFront invalidation
echo "🔄 Creating CloudFront invalidation..."
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*" --region ap-southeast-2

echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. CloudFront URL: https://$(terraform -chdir=terraform output -raw cloudfront_domain_name)"
echo "2. Configure pitch.reportr.ai CNAME in Linsec to point to: $(terraform -chdir=terraform output -raw cloudfront_domain_name)"
echo "3. Your site will be live at https://pitch.reportr.ai once DNS propagates"
echo ""
echo "⚠️  Note: Since you don't have SSL certificate configured in this setup,"
echo "   you may want to add an SSL certificate through AWS Certificate Manager"
echo "   and update the CloudFront distribution if you encounter SSL issues."