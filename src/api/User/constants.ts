export const UserRoleMap = {
  ROOT: "рут",
  ADMIN: "администратор",
  MANAGER: "менеджер",
  COACH: "тренер",
  ATHLETE: "спортсмен",
  REFEREE: "рефери",
  PARENTAD: "родитель",
};

export const Roles = {
  ROOT: "root",
  ADMIN: "admin",
  MANAGER: "manager",
  COACH: "coach",
  ATHLETE: "athlete",
  REFEREE: "referee",
  PARENTAD: "parentad",
} as const;

export type UserRoleType = (typeof Roles)[keyof typeof Roles];
