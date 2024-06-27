import { TAddress } from "@/api/Location/types";

export type TOrganization = {
  id: number;
  fullTitle: string;
  shortTitle: string;
  regCode: string;
  domen: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
  adsress: Array<TAddress>;
};
