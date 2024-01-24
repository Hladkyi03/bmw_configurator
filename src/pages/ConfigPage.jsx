import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  DispatchContext,
  StateContext,
} from "../components/CarConfiguratorContext/CarConfigurationContext";
import { EngineConfigurator } from
"../components/EngineConfigurator/EngineConfigurator";
import { EngineOverlay } from "../components/EngineOverlay/EngineOverlay";
import { ExteriorConfigurator } from
"../components/ExteriorConfigurator/ExteriorConfigurator";
import { TotalPrice } from "../components/TotalPrice/TotalPrice";
import { carsDetails } from "../data/carsDetails";
import { WheelsConfigurator } from
"../components/WheelsConfigurator/WheelsConfigurator";
import { CarPreview } from "../components/CarPreview/CarPreview";
import { CarNotFound } from "../components/CarNotFound/CarNotFound";

export const ConfigPage = () => {
  const { id } = useParams();

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const selectedCar = carsDetails.find((car) => car.id === +id);

  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  useEffect(() => {
    if (!selectedCar) {
      return;
    }

    const action = {
      type: "addCarConfig",
      payload: {
        engine: selectedCar.engineTypes[0],
        transmission: selectedCar.engineTypes[0].transmission[0],
        color: selectedCar.availableColors[0].colors[0],
        wheels: selectedCar.wheels[0],
      },
    };

    dispatch(action);
  }, [id]);

  const [imagePath, setImagePath] = useState("");

  const getCarImage = () => {
    if (!state.color || !state.wheels) {
      return "";
    }

    return `images/cars/car-${id}-color-${state.color.id.toLowerCase()}-wheels-${state.wheels.id.toLowerCase()}.png`;
  };

  useEffect(() => {
    const path = getCarImage();
    setImagePath(path);
  }, [id, state.color, state.wheels]);

  return (
    <>
      {!selectedCar ? (<CarNotFound />) : (
      <>
        <div className="config-page__container">
          <CarPreview imageSrc={imagePath} />

          <div className="config-page__wrapper">
            {state.engine && (
              <EngineConfigurator
                engineTypes={selectedCar.engineTypes}
                setIsOverlayOpen={setIsOverlayOpen}
              />
            )}

            {state.color && (
              <ExteriorConfigurator
                availableColors={selectedCar.availableColors}
              />
            )}

            {state.engine && isOverlayOpen && (
              <EngineOverlay
                engineTypes={selectedCar.engineTypes}
                setIsOverlayOpen={setIsOverlayOpen}
              />
            )}

            {state.wheels && <WheelsConfigurator wheels={selectedCar.wheels} />}
          </div>
        </div>

        {state.engine && <TotalPrice />}
      </>
      )}
    </>
  );
};
