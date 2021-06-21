import React from "react";

const Albums = (props) => {
  return (
    props.hashTag === "albums" &&
    (props.tracks[0]
      ? props.tracks.map((track) => (
          <div key={track.id}>
            <div>{track.song.name}</div>
          </div>
        ))
      : props.albums.map((album) => (
          <div key={album.id}>
            <a
              href="#albums"
              onClick={() => {
                props.getTracks(album.id);
              }}
            >
              {album.name}
            </a>
            <div className="artistName">{album.artist.name}</div>
          </div>
        )))
  );
};

export default Albums;
