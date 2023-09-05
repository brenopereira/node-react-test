export type UserCredentials = {
  email: string;
  password: string;
};

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
};

export type SignUpParams = {
  name: string;
  email: string;
  password: string;
};
