export interface WorkSpace {
    $id: string,
    id: string,
    title: string,
    createdUserId: string
}

export interface WorkSpaces {
    $id: string;
    $values: WorkSpace[]
}