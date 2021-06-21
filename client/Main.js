import React from "react";
import Home from "./Home";
import Artists from "./Artists";
import Albums from "./Albums";
import Navibar from "./Navibar";
import Axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      albums: [],
      hashTag: null,
    };
    this.getHashTag = this.getHashTag.bind(this);
  }
  getHashTag() {
    this.setState({ hashTag: window.location.hash.slice(1) });
  }
  async componentDidMount() {
    const responseArtist = await Axios.get("/api/artists");
    const artists = responseArtist.data;
    this.setState({ artists });
    const responseAlbum = await Axios.get("/api/albums");
    const albums = responseAlbum.data;
    this.setState({ albums });
    window.addEventListener("hashchange", this.getHashTag);
  }

  render() {
    return (
      <div>
        <Navibar
          artists={this.state.artists}
          albums={this.state.albums}
          hashTag={this.state.hashTag}
        />
        <Home hashTag={this.state.hashTag} />
        <Artists artists={this.state.artists} hashTag={this.state.hashTag} />
        <Albums albums={this.state.albums} hashTag={this.state.hashTag} />
      </div>
    );
  }
}

export default Main;
