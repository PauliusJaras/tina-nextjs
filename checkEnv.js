const fs = require("fs");
const path = require("path");

const requiredEnvVars = [
  "GITHUB_PERSONAL_ACCESS_TOKEN",
  "GITHUB_OWNER",
  "GITHUB_REPO",
  "GITHUB_BRANCH",
  "NEXTAUTH_URL",
  "NEXTAUTH_SECRET",
  "KV_REST_API_READ_ONLY_TOKEN",
  "KV_URL",
  "KV_REST_API_URL",
  "KV_REST_API_TOKEN",
  "MONGODB_URI",
  "TINA_PUBLIC_IS_LOCAL",
  "NEXT_PUBLIC_GOOGLE_MAPS_API_TOKEN",
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY",
  "AWS_REGION",
  "ADMIN_SEND_EMAIL",
  "ADMIN_RECEIVE_EMAIL",
  "GA_MEASUREMENT_ID",
  "VERCEL_URL",
  "ADMIN_VERIFY_TOKEN",
];

const envPath = path.resolve(__dirname, ".env");

if (!fs.existsSync(envPath)) {
  console.error(".env file is missing.");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, "utf-8");
const envVars = envContent.split("\n").reduce((acc, line) => {
  const [key, value] = line.split("=");
  if (key) {
    acc[key.trim()] = value ? value.trim() : "";
  }
  return acc;
}, {});

const missingOrEmptyVars = requiredEnvVars.filter(
  (varName) => !envVars[varName],
);

if (missingOrEmptyVars.length > 0) {
  console.error(
    `Missing or empty required environment variables: ${missingOrEmptyVars.join(", ")}`,
  );
  process.exit(1);
}

console.log("All required environment variables are set and non-empty.");
process.exit(0);
