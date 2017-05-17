import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { albumId } = this.props.routeParams;
    // const albumId = this.props.routeParams.albumId;
    const { selectAlbum } = this.props;

    selectAlbum(albumId);
  }
  render() {
    return (
      <div className="album">
        <div>
          <h3>{ this.props.album.name  }</h3>
          <img src={ this.props.album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={this.props.album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
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
