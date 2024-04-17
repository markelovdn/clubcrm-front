import { InjectionKey, Ref } from "vue";

export type AuthModalProviderData = {
  showForgotPasswordModal: () => boolean;
  showRegistrationModal: () => boolean;
  showLoginModal: () => boolean;
  isLoginModalShowing: Ref<boolean>;
  isRegistrationModalShowing: Ref<boolean>;
  isForgotPasswordModalShowing: Ref<boolean>;
};
export const AuthModalInjectionKey: InjectionKey<AuthModalProviderData> = Symbol("authModal");
