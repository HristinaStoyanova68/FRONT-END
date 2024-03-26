import { Post } from "./post";
import { User } from "./user";

export interface Theme {
    subscribers: string[] | null;
    posts: Post[];
    _id: string;
    themeName: string;
    userId: User;
    created_at: string;
    updatedAt: string;
    __v: number;
}