import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
// import ImageList from '../../components/gallery/ImageList';
import {bindActionCreators} from 'redux';
import {fetchImages} from  '../../actions/galleryActions';


class  GalleryPage extends Component {

  componentWillMount() {
    this.props.fetchImages();
  }

  renderList() {
    if (this.props.images) {
      return this.props.images.map(img => {
        return (
          <li key={img.id}>
            <img src={img.webformatURL} alt="" width="250px"/>
          </li>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

GalleryPage.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    images: state.images
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchImages}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryPage);
