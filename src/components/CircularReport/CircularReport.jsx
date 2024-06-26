import "./CircularReport.scss";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import { useState } from "react";

import CircularReportAnimation from "./CircularReportAnimation/CircularReportAnimation";

export default function CircularReport({ delivery, toGo, dineIn }) {
  const [category, setCat] = useState("a");

  return (
    <div className="circular-report-column">
      <div className="circular-report-header ">
        Most Type of Order
        <div className="cr-header-right">
          <div style={{ position: "relative" }}>
            <DropdownFilter
              setCat={setCat}
              icon={"/public/mask.svg"}
              list={["Today", "Month", "Year"]}
              filterTopic={"Timeframe"}
            />
          </div>
        </div>
      </div>
      <div className="circular-report-container">
        <CircularReportAnimation
          delivery={delivery}
          toGo={toGo}
          dineIn={dineIn}
        />
        <div className="order-stats">
          <div className="order-stat">
            <div className="stat-indicator-pink"></div>
            <h3>
              Dine In
              <br /> {dineIn} customers
            </h3>
          </div>
          <div className="order-stat">
            <div className="stat-indicator-yellow"></div>
            <h3>
              To Go
              <br /> {toGo} customers
            </h3>
          </div>
          <div className="order-stat">
            <div className="stat-indicator-blue"></div>
            <h3>
              Delivery
              <br /> {delivery} customers
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
