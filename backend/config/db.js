const pg = require("pg");

const db = new pg.Client({
    user: "postgres", 
    host: "localhost", 
    database: "RecipieApp", 
    password: "Karan@2002", 
    port: 5432
});

const query1 = `
    CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        email TEXT
    );
`;

const query2 = `
    CREATE TABLE IF NOT EXISTS posts (
        post_id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
        post_img TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        likes_count INTEGER Default 0
    );
`;

async function connectDB() {
    try {
        await db.connect();
        console.log("Database Connected Successfully");
        await db.query(query1);
        await db.query(query2);
    } catch (e) {
        console.log(e);
    }
}

connectDB();

module.exports = db;
