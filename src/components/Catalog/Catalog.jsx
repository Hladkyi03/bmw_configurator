import React from "react";
import { useState } from "react";
import { bmwCars } from "../../data/bmwCars";
import { CarCard } from "../CarCard/CarCard";
import { ChoosenCar } from "../ChoosenCar/ChoosenCar";
import "./Catalog.scss";

export const Catalog = () => {
  const [choosenModel, setChoosenModel] = useState(null);

  return (
    <div className="catalog">
      {bmwCars.map((serie) => {
        const isChoosen = choosenModel
          ? serie.models.some((model) => model.id === choosenModel.id) ||
            serie.previewModel.id === choosenModel.id
          : 0;

        return (
          <div className="catalog__serie" key={serie.serie}>
            <div className="container container--max-width-1008">
              <p className="catalog__serie-title">{serie.serie}</p>

              <div className="catalog__models-wrapper">
                <CarCard
                  model={serie.previewModel}
                  key={serie.previewModel.id}
                  setChoosenModel={setChoosenModel}
                />

                {serie.models.map((model) => (
                  <CarCard
                    model={model}
                    key={model.id}
                    setChoosenModel={setChoosenModel}
                  />
                ))}
              </div>
            </div>

            {choosenModel && isChoosen && (
              <ChoosenCar
                model={choosenModel}
                setChoosenModel={setChoosenModel}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
