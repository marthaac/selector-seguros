import axios from 'axios';
import { BASEURL } from '../Features/Data';
import { InsuranceDetailResponse } from '../Interfaces';

/**
 * Function that call external service
 */
export const getInsuranceDetail = (id: number) =>
  axios.get<InsuranceDetailResponse>(`${BASEURL}${id}`);
