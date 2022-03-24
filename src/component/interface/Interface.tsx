import {ReactNode} from 'react';

export interface userAction {
    title: ReactNode;
    id: number;
    name: string;
    email: string;
    number: string;
    password: string;
    confirm_password: string;
    image: null;
}
export interface practicalAction {
    id: number;
    title: string;
    decription: string;
    image: string;
    demo: string;
}
