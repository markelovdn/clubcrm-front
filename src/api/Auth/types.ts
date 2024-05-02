export type TRegistrationPayload = {
  name: string;
  phone: string;
  email: string;
  specializationId?: number | null;
  professionId?: number | null;
  password: string;
  passwordConfirm?: string;
  roleCode: string;
  regionId?: number | null;
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
