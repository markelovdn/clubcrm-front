interface TLocation {
  id: number;
  title: string;
  code: string;
}

export type TCountry = TLocation;

export type TDistrict = TLocation & {
  country: TCountry;
};

export type TRegion = TLocation & {
  district: TDistrict;
  country: TCountry;
};

export type TAddress = {
  id: number;
  country: TCountry;
  district: TDistrict;
  region: TRegion;
  locality: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  postIndex: string;
  createdAt: string;
  updatedAt: string;
};
