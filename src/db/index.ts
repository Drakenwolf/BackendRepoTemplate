import { Pool } from 'pg'
import DbGLobal from './DbGlobal'

class Database {
	pool: Pool

	constructor() {
		this.pool = DbGLobal.getInstance().pool;

	}


}

const db = new Database()

export default db