import { Role } from "./role";
export class User {
    id: string;
    userName: string;
    password: string;
    fullName: string;
    role: Role;
    token?: string;
}