import React from "react";

const Albums = (props) => {
  return (
    props.hashTag === "albums" && (
      <div>
        {props.albums.map((album) => (
          <div key={album.id}>
            <div>{album.name}</div>
            <div className="artistName">{album.artist.name}</div>
          </div>
        ))}
      </div>
    )
  );
};

export default Albums;
