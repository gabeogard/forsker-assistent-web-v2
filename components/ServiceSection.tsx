import PriceCalculator from "./PriceCalculator";

export const ServiceSection = () => {
  return (
    <div className="flex w-full flex-wrap flex-col place-items-center">
      <div className="hero-content flex-col">
        <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-bold">Transkribering</h1>
        <p className="py-6 sm:text-l md:text-xl lg:text-xl">Har du et intervju som er spilt inn på video eller lydopptaker, og ønsker å få det i skriftlig format? Vi hjelper deg med transkripsjon av intervju, og kan levere tekstfilen i løpet av kort tid! Vi transkriberer forskningsintervjuer for både studenter og forskere. Dette kan være personlige intervjuer eller gruppeintervjuer. Forskerassistenten transkriberer på en grundig og strukturert måte.</p>
        <h1 className="lg:text-3xl md:text-3xl sm:text-xl text-bold">Hver kunde og hvert oppdrag har sine ulikheter, og prisene kan derfor variere noe. Det gjelder f.eks dersom:</h1>
        <ul>
            <li className="lg:text-xl md:text-xl sm:text-l">Dere vil ha jobben gjort på kort varsel</li>
            <li className="lg:text-xl md:text-xl sm:text-l">Dersom det er dårlig lydkvalitet</li>
            <li className="lg:text-xl md:text-xl sm:text-l">Dersom lydfilen er på engelsk</li>
            <li className="lg:text-xl md:text-xl sm:text-l">Dersom dere har noen spesielle behov når det gjelder tjenesten</li>
        </ul>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
        <PriceCalculator/>
      </div>
    </div>
  );
};
