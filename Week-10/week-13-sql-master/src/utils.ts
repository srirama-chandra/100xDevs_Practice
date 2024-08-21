import { Client } from 'pg';

export async function getClient() {
    const client = new Client("url");
    await client.connect();
    return client;
}