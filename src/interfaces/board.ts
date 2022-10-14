import { User } from './auth'

export interface Board {
    $id: string,
    id: string,
    title: string,
    workSpaceId: string,
    createdAt: Date,
    createdUserId: string,
    members: String[],
    kanbans: KanbanSection[]
}

export interface Boards {
    $id: string,
    $values: Board[]
}
export interface KanbanSection {
    $id: string,
    id: string,
    title: string,
    boardId: string,
    createdAt: Date,
    createdUser: string,
}

export interface KanbanSections {
    $id: string,
    $values: KanbanSection[]
}