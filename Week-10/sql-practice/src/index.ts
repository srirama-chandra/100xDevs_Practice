import { Client } from "pg";

const client = new Client({connectionString:"url"});

async function createTable()
{
    await client.connect();
    await client.query(`CREATE TABLE account(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) ); `);
    console.log("Table Created Successfully");
}

createTable();