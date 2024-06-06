export type TUser = {
  id: number;
  email: string;
  fullName: string;
  firstName: string;
  secondName: string;
  middleName: string;
  dateBirthday: string;
  phone: string;
  roles: Array<TUserRole>;
};

export type TUserRole = {
  id: number;
  code: "root" | "admin" | "manager" | "coach" | "athlete" | "referee" | "parentad";
  title: string;
};

export type TUserPayload = {
  id: number;
  email: string;
  firstName: string;
  secondName: string;
  middleName: string;
  dateBirthday: string;
  phone: string;
  rolesId: Array<number>;
};
