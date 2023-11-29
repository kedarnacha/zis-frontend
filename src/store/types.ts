export type User = {
  user_id: number;
  username: string;
  user_nama: string;
  user_phone: string;
  user_type: number;
  user_status: string;
  mustahiq_id: number | null;
  mustahiq?: Mustahiq | null;
  institusi:
    | {
        institusi_id: number;
        institusi_nama: string;
        institusi_no_hp: string;
      }[]
    | [];
};

export type Mustahiq = {
  address: string;
  ktp_url: string;
  kk_url: string;
  emergency_contact_name: string;
  emergency_contact_number: string;
  bank_name: string;
  bank_number: string;
  bank_account_name: string;
  imkas_number: string | null;
};

export type Provinces = {
  prov_id: number;
  prov_name: string;
  locationid: number;
  status: number;
  province_by_dpt: number;
};

export type Kota = {
  city_id: number;
  city_name: string;
  prov_id: number;
};

export type Kec = {
  dis_id: number;
  dis_name: string;
  city_id: number;
  ket:string;
};