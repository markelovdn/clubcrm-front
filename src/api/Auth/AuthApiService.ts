import type { TForgotPasswordArgs, TLoginArgs, TRegistrationPayload, TResetPasswordArgs } from "@/api/Auth/types";
import { BaseApi } from "@/api/BaseApi";
export class AuthApiService extends BaseApi {
  registration(data: TRegistrationPayload) {
    return this.post("/registration", data);
  }
  login({ phone, password }: TLoginArgs) {
    return this.post("/login", { phone, password });
  }

  getAuthUser() {
    return this.get("/user");
  }

  logout() {
    return this.post("/logout");
  }

  forgotPassword({ email }: TForgotPasswordArgs) {
    return this.post("/forgotPassword", {
      email: email,
    });
  }

  resetPassword({ password, resetToken }: TResetPasswordArgs) {
    return this.post("/resetPassword", {
      password: password,
      resetToken: resetToken,
    });
  }
}
