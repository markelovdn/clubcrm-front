import type { TUser } from "@/api/User/types";

export type TRegistrationPayload = {
  phone: string;
  email: string;
  subDomain: string;
};

export type TLoginArgs = {
  phone: string;
  password: string;
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
