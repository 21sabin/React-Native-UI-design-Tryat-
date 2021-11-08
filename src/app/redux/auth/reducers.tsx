import {SIGN_OUT, SIGN_IN, AuthActionType, AuthStateType} from './types';

const initialState: AuthStateType = {
  loading: false,
  user: {},
  error: '',
};

export const authReducer = (
  state = initialState,
  action: AuthActionType,
): AuthStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
