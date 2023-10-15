export type User = {
  user_id: number;
  username: string;
  user_nama: string;
  user_phone: string;
  user_type: number;
  user_status: string;
  mustahiq_id: number | null;
  mustahiq?: Mustahiq | null;
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
