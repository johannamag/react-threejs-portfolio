import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600
      }}
      style={{width: "100%", height: "100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2c065d"
        stroke="pink"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[11.5820, 48.1351]}
        dx={0}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 1.5,
          strokeLinecap: "round"
        }}
      >
        <text x="-4" textAnchor="end" alignmentBaseline="middle" fill="#Fff">
          {"Munich"}
        </text>
      </Annotation>
      <Annotation
        subject={[2.1734, 41.3851]}
        dx={0}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 1.5,
          strokeLinecap: "round"
        }}
      >
        <text x="-4" textAnchor="end" alignmentBaseline="middle" fill="#Fff">
          {"Barcelona"}
        </text>
      </Annotation>
      <Annotation
        subject={[12.4964, 41.9028]}
        dx={0}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 1.5,
          strokeLinecap: "round"
        }}
      >
        <text x="-4" textAnchor="end" alignmentBaseline="middle" fill="#Fff">
          {"Rome"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
