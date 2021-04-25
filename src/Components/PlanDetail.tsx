import React from 'react';
import './PlanDetail.css';
import { InsuranceDetail } from '../Interfaces/index';

type PlanDetailsProps = {
  data: InsuranceDetail;
};

const PlanDetails = ({ data }: PlanDetailsProps): JSX.Element => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      >
        <p className="label">{data.price}</p>
      </div>
      <div className="card-title">
        <div className="title">{data.name}</div>
        <div className="text">{data.description}</div>
      </div>
    </div>
  );
};

export default PlanDetails;
