export type Jurnal = {
  id: number;
  amount_credit: number;
  proposal: {
    id: number;
    user_id: number;
    program_id:number;
  };
  datetime: string;
};
