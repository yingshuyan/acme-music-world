import React from "react";

const Navibar = (props) => {
  return (
    <div>
      <section>
        <a href="/">Home</a>
      </section>
      <section>
        <a href="#artists">Artists ({props.artists.length})</a>
      </section>
      <section>
        <a href="#albums" onClick={props.onClick}>
          Albums ({props.albums.length})
        </a>
      </section>
    </div>
  );
};
export default Navibar;
