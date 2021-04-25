import { INSURANCES } from '../Features/Data';
export interface Insurance {
  name: string;
  id: number;
}

export interface InsuranceDetail {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface InsuranceDetailResponse {
  insurance: InsuranceDetail;
}
