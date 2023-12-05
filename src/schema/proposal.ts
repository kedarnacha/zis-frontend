export type Proposal = {
  id:number,
  program_id: number;
  proposal_kategori: number;
  nama: string;
  status_bayar:number;
  proposal_approval:{
    id: number;
    status: number;
    user: {
      user_nama: string;
    };
  }[];
  create_date:string;
};

export type ProposalSchema = Proposal;
