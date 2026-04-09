export interface NewUser {
    name : string ,
    email : string,
    password : string
}

export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    created_at : Date,
    updated_at : Date,
    deleted_at : Date
}