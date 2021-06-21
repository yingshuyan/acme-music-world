import React from "react";

const Artists = (props) => {
  return props.artists.map((artist) => (
    <div key={artist.id}>{artist.name}</div>
  ));
};

export default Artists;
