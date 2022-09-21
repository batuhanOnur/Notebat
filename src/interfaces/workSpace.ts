export interface WorkSpace {
    $id: string,
    id: string,
    title: string,
    createdUserId: string,
    icon: string,
    iconColor: string
}

export interface WorkSpaces {
    $id: string;
    $values: WorkSpace[]
}