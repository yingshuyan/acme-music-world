import React from "react";

const Home = (props) => {
  return (
    !props.hashTag && (
      <div>
        <h2> Welcome to Acme Music World!</h2>
      </div>
    )
  );
};

export default Home;
