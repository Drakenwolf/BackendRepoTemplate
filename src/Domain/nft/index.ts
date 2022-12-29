import type { Pool } from 'pg'
import { PGRepository } from '../../Repo'

export interface Nft {
    id: string
    owner: string
    networkId: number
    collectionName: string
}

export class NftRepository extends PGRepository<Nft> {
    constructor(pool: Pool) {
        super({
            pool,
            table: 'nft',
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

