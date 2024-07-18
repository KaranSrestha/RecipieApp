const pg = require("pg");

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "RecipieApp",
    password: "Karan@2002",
    port: 5432
});

async function connectDB(){
    try{
        await db.connect();
        console.log("Database Connected Successfully");
    }catch(e){
        console.log(e);
    }
}

connectDB();

module.exports = db;