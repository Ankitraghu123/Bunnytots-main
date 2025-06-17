import "dotenv/config";

const _config = {
  PORT: process.env.PORT || 5000,
  JWT_SEC: process.env.JWT_SEC,
  MONGO_URL: process.env.MONGO_URL,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_TO: process.env.EMAIL_TO,
  NODE_ENV: process.env.NODE_ENV,
};

const config = Object.freeze(_config);

export default config;
