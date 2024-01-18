import React from "react";
import { bmwCars } from "../../data/bmwCars";
import { CarCard } from "../CarCard/CarCard";
import "./Catalog.scss";

export const Catalog = () => {
  return (
    <div className="catalog">
      <div className="container">
        {bmwCars.map((serie) => (
          <div className="catalog__serie" key={serie.serie}>
            <p className="catalog__serie-title">{serie.serie}</p>

            <div className="catalog__models-wrapper">
              <CarCard model={serie.previewModel} key={serie.previewModel.id} />

              {serie.models.map((model) => (
                <CarCard model={model} key={model.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
