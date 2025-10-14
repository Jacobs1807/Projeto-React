import postgres from "postgres";
import dotenv from "dotenv"
dotenv.config();

export const sql = postgre(process.env.DATABASE_URL, {
    ssl: 'require'
});