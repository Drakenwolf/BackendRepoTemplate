import type { Pool } from 'pg'
import { PGRepository } from '../../Repo'

export interface Test {
    id: string
    owner: string
    networkId: number
    collectionName: string
}

export class TestRepository extends PGRepository<Test> {
    constructor(pool: Pool) {
        super({
            pool,
            table: 'test',
            mapping: {
                id: 'id',
                owner: 'address',
                networkId: 'network_id',
                collectionName: "collection_name"
            },
            primaryKey: "id"
        })
    }
}

