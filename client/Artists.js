import React from "react";

const Artists = (props) => {
  return (
    props.hashTag === "artists" && (
      <div>
        {props.artists.map((artist) => (
          <div key={artist.id}>{artist.name}</div>
        ))}
      </div>
    )
  );
};

export default Artists;
