
import {Client}  from 'pg';
const client=new Client({
    user:'postgres',
    database:'postgres',
    host:'localhost',
    password:'Nourin123',
    port:5433
})

const db_name='Image_compression';
async function createDatabase(){
    try {
        await client.connect();
        await client.query(`CREATE DATABASE ${db_name}`);
        console.log(`Database ${db_name} Connected`);
        

        
    } catch (error) {
        console.error('Error Creating database',error);  
    }finally{
        await client.end();
    }

}


createDatabase();
