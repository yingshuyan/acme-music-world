import React from "react";

const Albums = (props) => {
  console.log(props.tracks);
  return (
    props.hashTag === "albums" &&
    (props.tracks[0] ? (
      <div>
        {props.tracks.map((track) => (
          <div key={track.id}>
            <div>{track.song.name}</div>
          </div>
        ))}
      </div>
    ) : (
      <div>
        {props.albums.map((album) => (
          <a
            key={album.id}
            onClick={() => {
              props.getTracks(album.id);
            }}
          >
            {album.name}
            <div className="artistName">{album.artist.name}</div>
          </a>
        ))}
      </div>
    ))
  );
};

export default Albums;
