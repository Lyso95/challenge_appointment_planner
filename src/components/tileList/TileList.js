import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({contacts}) => {
  return (
    <>
    {contacts?.map((el, i) => <Tile key={i} value={el} />)}
    </>
  );
};
