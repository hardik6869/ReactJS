export interface UsersAction {
    user: string;
    map(
        arg0: (userRecord: string, index: number) => JSX.Element,
    ): import('react').ReactNode;
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}
export interface usersList<T> {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: T[];
}
