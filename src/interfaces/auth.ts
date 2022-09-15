export interface User {
    name: string,
    lastName: string,
    email: string,
    password: string,
}

export interface RegisterReturn {
    message: string
}

export interface Login {
    email: string,
    password: string,
}

export interface Auth {
    isAuth: boolean
}