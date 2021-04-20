import React from "react";
import Card from "./Component/Card";
import CardData from "./Resources/Card_Data";

export default function App() {
  return (
    <div>
      <h3 className="headingStyle">Top 3 Webseries</h3>
      {/* <Card imgSrc={CardData[0].imgSrc} cardTitle={CardData[0].cardTitle} />

      <Card imgSrc={CardData[1].imgSrc} cardTitle={CardData[1].cardTitle} />

      <Card imgSrc={CardData[2].imgSrc} cardTitle={CardData[2].cardTitle} /> */}
      {CardData.map((val) => {
        return <Card key={val.id} imgSrc={val.imgSrc} cardTitle={val.cardTitle} />;
      })}
    </div>
  );
}
