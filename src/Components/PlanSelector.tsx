import React, { useState } from 'react';
import { Insurance } from '../Interfaces';
import './PlanSelector.css';

type PlanSelectorProps = {
  data: Insurance[];
  onClick: (selectedValue: number) => void;
};

const PlanSelector = ({ data, onClick }: PlanSelectorProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className="selector">
      <select
        name="insurances"
        id="insurances"
        placeholder="Seleccione"
        value={selectedOption || 0}
        className={`select ${selectedOption === 0 ? '' : 'active'}`}
        onChange={(e) => setSelectedOption(+e.target.value)}
      >
        <option value="0" disabled>
          Seguro
        </option>
        {data.map((element, index) => (
          <option value={element.id} key={index}>
            {element.name}
          </option>
        ))}
      </select>
      <button
        className="boton"
        onClick={() => {
          onClick(selectedOption);
        }}
      >
        Botón
      </button>
    </div>
  );
};

export default PlanSelector;
