import { useState } from "react";

const PriceCalculator = () => {
    const [amountPeople, setAmountPeople] = useState(0);
    const [selectedMinutes, setSelectedMinutes] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const handlePeople = (event: any) => {
        console.log(amountPeople)
        console.log(event.target.value)
        setAmountPeople(event.target.value);
        console.log(amountPeople)
    }

    const handleMinutes = (event: any) => {
        setSelectedMinutes(event.target.value)
    }

    const handleCalc = () => {
        let mult = selectedMinutes / 10;
        let price = 300;
        const howMany = (): number => {
            if(amountPeople > 2){
                const margin = amountPeople - 2;
                const added = margin * 20;
                return added;
            }
            return 0;
        }
        const addedPrice: number = howMany() + price;
        const final = addedPrice * mult;
        setTotalPrice(final)
    }
  return (
    <div className="price-calculator">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Priskalkulator</h2>
          <p>Hvor mange deltagere skal transkriberes</p>
          <select defaultValue={amountPeople} onChange={handlePeople} className="select select-bordered w-full max-w-xs">
            <option disabled>
              Antall
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
          <p>Hvor lang er lydfilen?</p>
          <input
          value={selectedMinutes}
          onChange={handleMinutes}
            type="number"
            placeholder="Antall minutter"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text"><strong>Norsk</strong></span>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-green-500"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text"><strong>Engelsk</strong></span>
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-green-500"
              />
            </label>
          </div>
          <div className="card-actions justify-end">
            <p className="final-price"><strong>Pris inkl mva. (25%):</strong> {totalPrice} ,-</p>
            <button className="btn" onClick={handleCalc}>Beregn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
