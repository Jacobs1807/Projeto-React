import postgres from "postgres";
import dotenv from "dotenv"
dotenv.config();

export const sql = postgre(process.env.DATABASE_URL, {
    ssl: 'require'
});


//DATABASE_URL=DATABASE_URL='postgresql://neondb_owner:npg_RsvQ6hgcS3WX@ep-nameless-base-acmdgmlr-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
//JWT_SECRET=suaChaveUltraSecrete