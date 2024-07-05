import type { TForgotPasswordArgs, TLoginArgs, TRegistrationPayload, TResetPasswordArgs } from "@/api/Auth/types";
import { BaseApi } from "@/api/BaseApi";
export class AuthApiService extends BaseApi {
  registration(data: TRegistrationPayload) {
    return this.post("/users", data);
  }
  login({ phone, password }: TLoginArgs) {
    return this.post("/login", { phone, password });
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
    return this.post("/reset-password", {
      password: password,
      resetToken: resetToken,
    });
  }
}
