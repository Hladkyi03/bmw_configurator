import React from "react";
import "./EngineOverlay.scss";
import { EngineInfo } from "../EngineInfo/EngineInfo";
import { useContext } from "react";
import { StateContext } from
  "../CarConfiguratorContext/CarConfigurationContext";
import cross from "../../media/icons/cross.svg";
import { useState } from "react";
import cn from "classnames";

export const EngineOverlay = ({ engineTypes, setIsOverlayOpen }) => {
  const carConfig = useContext(StateContext);

  const fuelTypes = new Set(
    engineTypes.map((engineType) => engineType.fuelType)
  );

  const uniqueFuelTypesArray = [...fuelTypes];

  const [filter, setFilter] = useState("all");

  let visibleEngineTypes;

  switch (filter) {
    case "all":
      visibleEngineTypes = engineTypes;
      break;

    case "electric":
      visibleEngineTypes = engineTypes.filter(
        (engine) => engine.fuelType.toLowerCase() === "electric"
      );
      break;

    case "hybrid":
      visibleEngineTypes = engineTypes.filter(
        (engine) => engine.fuelType.toLowerCase() === "hybrid"
      );
      break;

    case "petrol":
      visibleEngineTypes = engineTypes.filter(
        (engine) => engine.fuelType.toLowerCase() === "petrol"
      );
      break;

    case "diesel":
      visibleEngineTypes = engineTypes.filter(
        (engine) => engine.fuelType.toLowerCase() === "diesel"
      );
      break;

    default:
      visibleEngineTypes = engineTypes;
  }

  const countEngines = (type) => {
    return engineTypes.filter((engineType) => engineType.fuelType === type)
      .length;
  };

  const handleCloseBtnClick = () => {
    document.body.style.overflow = "auto";
    setIsOverlayOpen(false);
  };

  const handleFilterClick = (filterName) => {
    setFilter(filterName.toLowerCase());
  };

  return (
    <div className="engine-overlay">
      <div className="engine-overlay__modal">
        <button
          className="engine-overlay__close-btn"
          onClick={handleCloseBtnClick}
        >
          <img src={cross} alt="cross" className="engine-overlay__cross-img" />
        </button>

        <div className="engine-overlay__aside">
          <h2 className="engine-overlay__aside-title">CHOICE OF ENGINE</h2>

          <button
            className={cn("engine-overlay__category", {
              "engine-overlay__category--active": filter === 'all',
            })}
            onClick={() => handleFilterClick("all")}
          >
            {`All (${engineTypes.length})`}
          </button>

          {uniqueFuelTypesArray.map((type) => (
            <button
              className={cn("engine-overlay__category", {
                "engine-overlay__category--active":
                  type.toLowerCase() === filter,
              })}
              key={type}
              onClick={() => handleFilterClick(type)}
            >
              {`${type} (${countEngines(type)})`}
            </button>
          ))}
        </div>

        <div className="engine-overlay__engines">
          {visibleEngineTypes.map((engine) => (
            <EngineInfo
              engine={engine}
              selectedEngine={carConfig.engine}
              selectedTransmission={carConfig.transmission}
              key={engine.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
