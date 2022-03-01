export interface UserDetails {
    user: string;
    map(
        arg0: (userRecord: string, index: number) => JSX.Element,
    ): import('react').ReactNode;
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    plan: string;
    status: string;
    access: string;
    reviewed: number;
    monthly_click: number;
}
