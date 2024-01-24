import React, { useRef } from "react";
import "./EngineOverlay.scss";
import { EngineInfo } from "../EngineInfo/EngineInfo";
import { useContext } from "react";
import { StateContext } from
  "../CarConfiguratorContext/CarConfigurationContext";
import cross from "../../media/icons/cross.svg";
import { useState } from "react";
import cn from "classnames";
import useMediaQuery from "../../hooks/useMediaQuery";

export const EngineOverlay = ({ engineTypes, setIsOverlayOpen }) => {
  const carConfig = useContext(StateContext);

  const fuelTypes = new Set(
    engineTypes.map((engineType) => engineType.fuelType)
  );

  const uniqueFuelTypesArray = [...fuelTypes];

  const [filter, setFilter] = useState("all");
  const [isSortListOpened, setIsSortListOpened] = useState(false);

  const inputRef = useRef(null);

  const handleBlur = () => {
    setTimeout(() => {
      setIsSortListOpened(false);
    }, 150);
  }

  const handleInputClick = () => {
    // Якщо інпут вже в фокусі, втратити фокус
    if (isSortListOpened) {
      inputRef.current.blur();
    } else {
      inputRef.current.focus();
      setIsSortListOpened(true);
    }
  };

  const isLarge = useMediaQuery("(min-width: 1024px)");

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

          {isLarge ? (
            <>
              <button
                className={cn("engine-overlay__category", {
                  "engine-overlay__category--active": filter === "all",
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
            </>
          ) : (
            <div className="engine-overlay__input-wrapper">
              <input
                ref={inputRef}
                type="text"
                className="engine-overlay__input"
                onBlur={() => handleBlur()}
                onClick={() => handleInputClick()}
                placeholder="Filter"
                value={`${filter.charAt(0).toUpperCase() + filter.slice(1)} (${visibleEngineTypes.length})`}
                readOnly
              />

              <svg
                className="engine-overlay__input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4714 5.52864C12.7317 5.78899 12.7317 6.2111 12.4714
                6.47145L8.47136 10.4714C8.21101 10.7318 7.7889 10.7318
                7.52855 10.4714L3.52855 6.47144C3.2682 6.2111 3.2682
                5.78899 3.52855 5.52864C3.7889 5.26829 4.21101 5.26829
                4.47136 5.52864L7.99996 9.05723L11.5286 5.52864C11.7889
                5.26829 12.211 5.26829 12.4714 5.52864Z"
                  fill="#B4BDC4"
                />
              </svg>

              {isSortListOpened && (
                <ul className="engine-overlay__dropdown">
                  <li className="engine-overlay__dropdown-item">
                      <button
                        className={cn("engine-overlay__dropdown-button", {
                          "engine-overlay__dropdown-button--active":
                           "all" === filter,
                        })}
                        onClick={() => handleFilterClick("all")}
                      >
                        {`All (${engineTypes.length})`}
                      </button>
                    </li>

                  {uniqueFuelTypesArray.map((type) => (
                    <li className="engine-overlay__dropdown-item" key={type}>
                      <button
                        className={cn("engine-overlay__dropdown-button", {
                          "engine-overlay__dropdown-button--active":
                            type.toLowerCase() === filter,
                        })}
                        onClick={() => handleFilterClick(type)}
                      >
                        {`${type} (${countEngines(type)})`}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
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
