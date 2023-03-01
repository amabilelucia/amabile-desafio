import React from "react";
import Plot from "react-plotly.js";

export default class Graphic extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            values: [19, 26, 55],
            labels: ["Residential", "Non-Residential", "Utility"],
            type: "pie",
          },
        ]}
        layout={{ width: 900, height: 700, title: "A Fancy Plot" }}
      />
    );
  }
}
