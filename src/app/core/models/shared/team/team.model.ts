export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio?: string;
    photo?: string;
    linkedin?: string;
    twitter?: string;
    order: number;
    active: boolean;
};