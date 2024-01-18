import React from "react";
import { Catalog } from "../components/Catalog/Catalog";
import { CatalogFilters } from "../components/CatalogFilters/CatalogFilters";

export const CatalogPage = () => (
  <>
    <CatalogFilters />

    <Catalog />
  </>
);
