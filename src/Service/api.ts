import axios from 'axios';
import { BASEURL } from '../Features/Data';
import { InsuranceDetailResponse } from '../Interfaces';

export const getInsuranceDetail = (id: number) =>
  axios.get<InsuranceDetailResponse>(`${BASEURL}${id}`);
