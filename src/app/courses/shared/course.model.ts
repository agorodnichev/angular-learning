/**
 * Course type
 */
export interface Course {
    id: number;
    topRated: boolean,
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
};
