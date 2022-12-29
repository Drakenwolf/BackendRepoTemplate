import { Pool } from 'pg'


const poolConfig = {
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    max: Number(process.env.DB_POOL_SIZE),
    idleTimeoutMillis: Number(process.env.DB_POOL_CLIENT_IDLE_TIMEOUT),
    connectionTimeoutMillis: Number(
        process.env.DB_POOL_CLIENT_CONNECTION_TIMEOUT
    ),
}


class DbGLobal {
    private static _instance: DbGLobal;
    private static _pool: Pool;

    private constructor() {}

    static getInstance() {
        if (!this._instance) {
            this._pool = new Pool(poolConfig);
            this._instance = new DbGLobal();
        }

  
        return this._instance;
    }


    get pool(): Pool {
        return DbGLobal._pool;
    }
}

export default DbGLobal;