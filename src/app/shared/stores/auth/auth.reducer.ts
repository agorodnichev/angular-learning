import { createReducer, on } from '@ngrx/store';
import { setAuthToFalse, setAuthToTrue } from './auth.actions';

export const initialState = false;

const _isAuthReducer = createReducer(
    initialState,
    on(setAuthToFalse, (state) => false),
    on(setAuthToTrue, (state) => true));


export function isAuthReducer(state, action) {
    return _isAuthReducer(state, action);
}

