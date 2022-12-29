import path from 'path'
// import { migrate } from 'postgres-migrations'
import { Pool } from 'pg'
import DbGLobal from './DbGlobal'


//TODO: refactor this since no need for a entire class
//to run a migration

class Database {
	pool: Pool

	constructor() {
		this.pool = DbGLobal.getInstance().pool;

	}

	runMigrations = async (): Promise<void> => {
		let client;

		try {
			client = await this.pool.connect();
			// await migrate({ client }, path.resolve(__dirname, 'migrations/sql'))
		} catch (err) {
			console.error('migration had an error', err)
		} finally {
			client.release()
		}
	}
}

const db = new Database()

export default db