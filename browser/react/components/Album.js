import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: props.album,
      currentSong: props.curentSong,
      isPlaying: props.isPlaying,
      toggleOne: props.toggleOne
    }
  }
  componentDidMount() {
    const { albumId } = this.props.routeParams;
    // const albumId = this.props.routeParams.albumId;
    const { selectAlbum } = this.props;

    selectAlbum(albumId);
  }
  render() {
    const album = this.state.selectedAlbum.name || this.state.album.name;
    return (
      <div className="album">
        <div>
          <h3>{ this.state.album.name  }</h3>
          <img src={ this.state.album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={this.state.album.songs}
          currentSong={this.state.currentSong}
          isPlaying={this.state.isPlaying}
          toggleOne={this.state.toggleOne} />
      </div>
    );
  }
}

//const Album = (props) => {
//
//  const album = props.album;
//  const currentSong = props.currentSong;
//  const isPlaying = props.isPlaying;
//  const toggleOne = props.toggleOne;
//
//  return (
//    <div className="album">
//      <div>
//        <h3>{ album.name }</h3>
//        <img src={ album.imageUrl } className="img-thumbnail" />
//      </div>
//      <Songs
//        songs={album.songs}
//        currentSong={currentSong}
//        isPlaying={isPlaying}
//        toggleOne={toggleOne} />
//    </div>
//  );
//}

export default Album;
