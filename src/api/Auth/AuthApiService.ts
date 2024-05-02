import type {
  TForgotPasswordArgs,
  TLoginArgs,
  TLoginResponse,
  TRegistrationPayload,
  TRegistrationResponse,
  TResetPasswordArgs,
} from "@/api/Auth/types";
import axios from "@/common/axios";
export class AuthApiService {
  login({ phone, password }: TLoginArgs) {
    return axios.post<TLoginResponse>("/login?XDEBUG_SESSION=VSCODE", {
      phone,
      password,
    });
  }

  getAuthUser() {
    return axios.get("/user?XDEBUG_SESSION=VSCODE");
  }

  logout() {
    return axios.post("/logout?XDEBUG_SESSION=VSCODE");
  }

  registration(data: TRegistrationPayload) {
    const splitName: Array<string> = data.name.split(" ");

    return axios.post<TRegistrationResponse>("/register", {
      firstName: splitName[1],
      secondName: splitName[0],
      patronymic: splitName[2],
      phone: data.phone,
      email: data.email,
      specializationId: data.specializationId,
      professionId: data.professionId,
      password: data.password,
      roleCode: data.roleCode,
      regionId: data.regionId,
    });
  }

  forgotPassword({ email }: TForgotPasswordArgs) {
    return axios.post<TForgotPasswordArgs>("/forgotPassword", {
      email: email,
    });
  }

  resetPassword({ password, resetToken }: TResetPasswordArgs) {
    return axios.post<TResetPasswordArgs>("/resetPassword", {
      password: password,
      resetToken: resetToken,
    });
  }

  test() {
    return axios.get("/test");
  }
}
