import { User } from './auth'

export interface Board {
    $id: string,
    id: string,
    title: string,
    workSpaceId: string,
    createdAt: Date,
    members: User[]
}

export interface Boards {
    $id: string,
    $values: Board[]
}