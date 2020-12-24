import { createReducer, on } from '@ngrx/store';
import { setNewCoursesList, editCourse, addCourse } from './courses-list.actions';
import { Course } from '../../course.model';

export const initialState: Course[] = [];

const _setNewCoursesListReducer = createReducer(
    initialState,
    on(setNewCoursesList, (state, { Course }) => [...Course]),
    on(editCourse, (state, { Course}) => {
        const subset = state.filter(course => course.id !== Course.id )
        return [...subset, Course];
    }),
    on(addCourse, (state, { Course }) => [...state, Course])
);

export function setNewCoursesListReducer(state, action) {
    return _setNewCoursesListReducer(state, action);
}

