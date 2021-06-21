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
      tracks: [],
    };
    this.getHashTag = this.getHashTag.bind(this);
    this.getTrackOfAlbum = this.getTrackOfAlbum.bind(this);
    this.resetSelectedAlbum = this.resetSelectedAlbum.bind(this);
  }
  getHashTag() {
    this.setState({ hashTag: window.location.hash.slice(1) });
  }
  resetSelectedAlbum() {
    this.setState({ tracks: [] });
  }
  async getTrackOfAlbum(id) {
    const response = await Axios.get(`/api/albums/${id}/tracks`);
    const tracks = response.data;
    this.setState({ tracks });
    console.log(this.state.tracks);
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
      <div className="navibar">
        <Navibar
          artists={this.state.artists}
          albums={this.state.albums}
          hashTag={this.state.hashTag}
          onClick={this.resetSelectedAlbum}
        />
        <Home hashTag={this.state.hashTag} />
        <Artists artists={this.state.artists} hashTag={this.state.hashTag} />
        <Albums
          albums={this.state.albums}
          hashTag={this.state.hashTag}
          tracks={this.state.tracks}
          getTracks={this.getTrackOfAlbum}
        />
      </div>
    );
  }
}

export default Main;
