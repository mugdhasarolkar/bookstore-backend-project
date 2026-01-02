import dotenv from'dotenv'
dotenv.config();
export const PORT=process.env.PORT||5555;
export const mongoDB_URL=process.env.MONGODB_URL;



