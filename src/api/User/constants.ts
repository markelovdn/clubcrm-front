export const UserRoleMap = {
  CLIENT: "клиент",
  MANAGER: "менеджер",
  ADMIN: "администратор",
};

export const Roles = {
  CLIENT: "client",
  MANAGER: "manager",
  ADMIN: "admin",
} as const;

export type UserRoleType = (typeof Roles)[keyof typeof Roles];
