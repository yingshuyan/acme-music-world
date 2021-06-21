import React from "react";

const Navibar = (props) => {
  return (
    <div className="navibar">
      <section>
        <a className="navi" href="/">
          Home
        </a>
      </section>
      <section>
        <a className="navi" href="#artists">
          Artists ({props.artists.length})
        </a>
      </section>
      <section>
        <a className="navi" href="#albums" onClick={props.onClick}>
          Albums ({props.albums.length})
        </a>
      </section>
    </div>
  );
};
export default Navibar;
