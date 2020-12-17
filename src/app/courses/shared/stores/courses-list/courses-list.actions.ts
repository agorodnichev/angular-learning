import { createAction, props } from '@ngrx/store';

export const setNewCoursesList = createAction(
    'set_new_courses_list',
    props<{ Course }>()
    );

export const editCourse = createAction(
    'update course',
    props<{ Course }>()
);

export const addCourse = createAction(
    'add course',
    props<{ Course }>()
);