export interface AuthState {
  token: string | null;
  auth: {
    user: User | null;
    token: string | null;
  };
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface RootState {
  auth: AuthState;
}
