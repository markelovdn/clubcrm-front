export type TRegistrationPayload = {
  phone: string;
  email: string;
  password: string;
  subDomain: string;
};

export type TLoginArgs = {
  phone: string;
  password: string;
};

export type TUser = {
  id: number;
  firstName: string;
  secondName: string;
  middleName: string;
  fullName: string;
  email: string;
  phone: string;
};

export type TUserRole = {
  id: number;
  code: "parented" | "consultant" | string;
  title: string;
};

export type TLoginResponse = {
  token: string;
  user: TUser;
};

export interface TRegistrationResponse extends TLoginResponse {
  message: string[];
}

export type TForgotPasswordArgs = {
  email: string;
};

export type TResetPasswordArgs = {
  password: string;
  resetToken?: string;
};
