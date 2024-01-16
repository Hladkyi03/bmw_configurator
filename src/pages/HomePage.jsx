import React from "react";
import { HotOffers } from "../components/HotOffers/HotOffers";
import { News } from "../components/News/News";
import { PurchasePrograms } from
  "../components/PurchasePrograms/PurchasePrograms";

export const HomePage = () => (
  <>
    <PurchasePrograms />

    <News />

    <HotOffers />
  </>
);
