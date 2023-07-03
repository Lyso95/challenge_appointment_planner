import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({data}) => {
  return (
    <>
    {data?.map((el, i) => <Tile key={i} value={el} />)}
    </>
  );
};
