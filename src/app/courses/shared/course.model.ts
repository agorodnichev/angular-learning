/**
 * Course type
 */
export interface Course {
    id: number;
    isTopRated?: boolean,
    name: string;
    date: Date;
    length: number;
    description: string;
    authors?: Array<{id: number, name: string, lastName: string}>
};
