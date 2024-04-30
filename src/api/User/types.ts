export type TUser = {
  id: number;
  email: string;
  fullName: string;
  firstName: string;
  secondName: string;
  middleName: string;
  phone: string;
  roles: Array<TUserRole>;
  photo?: string;
  company?: string;
};

export type TUserRole = {
  id: number;
  code: "admin" | "manager" | "client";
  title: string;
};
