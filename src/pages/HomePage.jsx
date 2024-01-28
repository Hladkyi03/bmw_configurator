import React, { useEffect, useState } from "react";
import { HotOffers } from "../components/HotOffers/HotOffers";
import { News } from "../components/News/News";
import { PurchasePrograms } from
  "../components/PurchasePrograms/PurchasePrograms";
import { PreviousConfig } from "../components/PreviousConfig/PreviousConfig";

export const HomePage = () => {
  const [previousSessionConfig, setPreviousSessionConfig] = useState("");

  useEffect(() => {
    if(sessionStorage.getItem("isCurrentConfig")) {
      return
    }

    if (localStorage.getItem("previousConfigUrl")) {
      setPreviousSessionConfig(localStorage.getItem("previousConfigUrl"));
    }
  })

  return (
    <>
      <PurchasePrograms />

      <News />

      <HotOffers />

      {previousSessionConfig && (
        <PreviousConfig
          url={previousSessionConfig}
          setPreviousSessionConfig={setPreviousSessionConfig}
        />
      )}
    </>
  )
};
