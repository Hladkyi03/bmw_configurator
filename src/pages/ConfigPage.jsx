import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
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
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const selectedCar = carsDetails.find((car) => car.id === +id);

  useEffect(() => {
    if (!selectedCar) {
      return;
    }

    if(!sessionStorage.getItem('isCurrentConfig')) {
      sessionStorage.setItem('isCurrentConfig', true);
    }

    const fullUrl = `${location.pathname}${location.search}`;

    localStorage.setItem("previousConfigUrl", fullUrl);
  }, [location]);

  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const findEngine = (searchedEngineTitle) => {
    if (!searchedEngineTitle || !selectedCar) {
      return;
    }

    const findedEngine = selectedCar.engineTypes.find(
      (engine) => engine.title === searchedEngineTitle
    );

    return findedEngine;
  };

  const findTransmission = (searchedTransMissionTitle) => {
    if (!searchedTransMissionTitle || !selectedCar) {
      return;
    }

    const findedTransmission = selectedEngine.transmission.find(
      (transmission) => transmission.title === searchedTransMissionTitle
    );

    return findedTransmission;
  };

  const findColor = (searchedColorId) => {
    if (!searchedColorId || !selectedCar) {
      return;
    }

    const findedCategory = selectedCar.availableColors.find((category) =>
      category.colors.find((color) => color.id === searchedColorId)
    );

    const findedColor = findedCategory.colors.find(
      (color) => color.id === searchedColorId
    );

    return findedColor;
  };

  const findWheels = (searchedWheelsId) => {
    if (!searchedWheelsId || !selectedCar) {
      return;
    }

    const findedWheels = selectedCar.wheels.find(
      (wheel) => wheel.id === searchedWheelsId
    );

    return findedWheels;
  };

  const selectedEngine = findEngine(searchParams.get("engine"))
    ? findEngine(searchParams.get("engine"))
    : (selectedCar ? selectedCar.engineTypes[0] : null);

  const selectedTransmission =findTransmission(searchParams.get("transmission"))
    ? findTransmission(searchParams.get("transmission"))
    : (selectedCar ? selectedCar.engineTypes[0].transmission[0] : null);

  const selectedColor = findColor(searchParams.get("color"))
    ? findColor(searchParams.get("color"))
    : (selectedCar ? selectedCar.availableColors[0].colors[0] : null);

  const selectedWheels = findWheels(searchParams.get("wheels"))
    ? findWheels(searchParams.get("wheels"))
    : (selectedCar ? selectedCar.wheels[0] : null);

  console.log(state);

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
        engine: selectedEngine,
        transmission: selectedTransmission,
        color: selectedColor,
        wheels: selectedWheels,
      },
    };

    dispatch(action);
  }, [id, selectedEngine, selectedTransmission, selectedColor, selectedWheels]);

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
      {!selectedCar ? (
        <CarNotFound />
      ) : (
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

              {state.wheels && (
                <WheelsConfigurator wheels={selectedCar.wheels} />
              )}
            </div>
          </div>

          {state.engine && <TotalPrice />}
        </>
      )}
    </>
  );
};
