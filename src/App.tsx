import React, { useState } from 'react';
import './App.css';
import PlanSelector from './Components/PlanSelector';
import { INSURANCES } from './Features/Data';
import { getInsuranceDetail } from './Service/api';
import { InsuranceDetail } from './Interfaces/index';
import PlanDetails from './Components/PlanDetail';
import Loading from './Components/Loading';

function App() {
  const [detail, setDetail] = useState<InsuranceDetail>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const click = async (selectedValue: number) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await getInsuranceDetail(selectedValue);
      setDetail(data.insurance);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div className="App">
      <PlanSelector data={INSURANCES} onClick={click} />

      {loading ? <Loading /> : detail && <PlanDetails data={detail} />}

      {error && <h2 className="error">Ha ocurrido un error</h2>}
    </div>
  );
}

export default App;
