import { Pool } from 'pg';

const pool = new Pool({
    user: 'clintonfoster',
    host: 'localhost',
    database: 'hardwaterbar',
    password: 'password',
    port: 5432,
});

export default pool;