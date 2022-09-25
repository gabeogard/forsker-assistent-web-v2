import { useState } from "react";
import { range } from "../utils/misc";
import { calculateCost } from '../utils/calculateCost';

const PriceCalculator = () => {
  const [amountPeople, setAmountPeople] = useState(2);
  const [selectedMinutes, setSelectedMinutes] = useState(0);

  return (
    <div className="price-calculator">
      <div className="card w-96 bg-primary text-primary-content px-4">
        <div className="card-body">
          <h2 className="card-title">Priskalkulator</h2>
          <p>Hvor mange deltagere skal transkriberes</p>
          <select
            value={amountPeople}
            onChange={(event) => setAmountPeople(Number(event.target.value))}
            className="select select-bordered w-full max-w-xs text-primary"
          >
            <option disabled>Antall</option>
            {range(9, 2).map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
          <p>Hvor lang er lydfilen? (Ant. minutter)</p>
          <input
            value={selectedMinutes ?? 0}
            onChange={(event) => setSelectedMinutes(Number(event.target.value))}
            type="number"
            placeholder="Antall minutter"
            className="input input-bordered w-full max-w-xs text-primary"
          />
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="text-secondary">
                <strong>Norsk</strong>
              </span>
              <input
                type="radio"
                name="radio"
                className="radio checked:bg-green-500"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="text-secondary">
                <strong>Engelsk</strong>
              </span>
              <input
                type="radio"
                name="radio"
                className="radio checked:bg-green-500"
              />
            </label>
          </div>
          <div className="card-actions justify-end">
            <p className="final-price text-secondary">
              <strong>Pris inkl mva. (25%):</strong> {amountPeople ? calculateCost(amountPeople, selectedMinutes).toLocaleString('nb-no') : 0},-
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
