import React from "react";
import { useParams } from "react-router-dom";
import { EngineConfigurator } from
  "../components/EngineConfigurator/EngineConfigurator";
import { ExteriorConfigurator } from
  "../components/ExteriorConfigurator/ExteriorConfigurator";
import { carsDetails } from "../data/carsDetails";

export const ConfigPage = () => {
  const { id } = useParams();

  const selectedCar = carsDetails.find((car) => car.id === +id);

  console.log(selectedCar.name);

  return (
    <>
      <EngineConfigurator
        carName={selectedCar.name}
        engineTypes={selectedCar.engineTypes}
      />

      <ExteriorConfigurator availableColors={selectedCar.availableColors} />
    </>
  );
};
