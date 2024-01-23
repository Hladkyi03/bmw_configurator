import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  DispatchContext,
  StateContext,
} from "../components/CarConfiguratorContext/CarConfigurationContext";
import { EngineConfigurator }
from "../components/EngineConfigurator/EngineConfigurator";
import { EngineOverlay } from "../components/EngineOverlay/EngineOverlay";
import { ExteriorConfigurator }
from "../components/ExteriorConfigurator/ExteriorConfigurator";
import { TotalPrice } from "../components/TotalPrice/TotalPrice";
import { carsDetails } from "../data/carsDetails";

export const ConfigPage = () => {
  const { id } = useParams();

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const selectedCar = carsDetails.find((car) => car.id === +id);

  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const action = {
      type: "addCarConfig",
      payload: {
        engine: selectedCar.engineTypes[0],
        transmission: selectedCar.engineTypes[0].transmission[0],
        color: selectedCar.availableColors[0].colors[0],
      },
    };

    dispatch(action);
  }, [id]);

  return (
    <>
      {state.engine && (
        <EngineConfigurator
          engineTypes={selectedCar.engineTypes}
          setIsOverlayOpen={setIsOverlayOpen}
        />
      )}

      {state.color && (
        <ExteriorConfigurator availableColors={selectedCar.availableColors} />
      )}

      {state.engine && isOverlayOpen && (
        <EngineOverlay
          engineTypes={selectedCar.engineTypes}
          setIsOverlayOpen={setIsOverlayOpen}
        />
      )}

      {state.engine && (
        <TotalPrice />
      )}
    </>
  );
};
