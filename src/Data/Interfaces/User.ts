export interface IAppUser{
    token: string;
    user: IUser;
}


export interface IUser {
    email: string;
    username: string;
}

export interface ILoginUserPayload {
    username: string;
    password: string;
}

export interface IRegisterUserPayload {
    email: string;
    password: string;
    username: string;
    
}