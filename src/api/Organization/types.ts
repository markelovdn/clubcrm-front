import { TAddress } from "@/api/Address/types";

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
