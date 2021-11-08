export const SIGN_IN = 'SIGNIN';
export const SIGN_OUT = 'SIGNUP';

//Auth reducer types
export type AuthActionType = {
  readonly type: typeof SIGN_IN | typeof SIGN_OUT;
  payload?: any;
};

export interface AuthStateType {
  user: Object;
  error: string;
  loading: boolean;
}
