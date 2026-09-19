#!/bin/bash

# This script initializes the database for the EWCG Church Management application.

# Load environment variables
source .env

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL is not set in the .env file."
  exit 1
fi

# Run Prisma migrations
echo "Running Prisma migrations..."
npx prisma migrate deploy

# Seed the database with initial data
echo "Seeding the database..."
npx prisma db seed

echo "Database initialization complete."