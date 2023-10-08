import dotenv from "dotenv";
dotenv.config();

const config = {
	PORT: process.env.PORT || 4000,
	DB_URL: process.env.MONGODB_URI,
	APP_SECRET: process.env.APP_SECRET,
	JWT_SECRET: process.env.JWT_SECRET,
};

export default config;
