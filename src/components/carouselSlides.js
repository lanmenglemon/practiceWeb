import React, { Component } from "react";
import { connect } from "react-redux";
import { selectImage } from "../actions/index";
import { bindActionCreators } from "redux";

import Bead_Localization_Tube from "../../public/images/Parallume_PSTI/Bead_Localization_Tube.png";
import Bead_Localization_Slide from "../../public/images/Parallume_PSTI/Bead_Localization_Slide.png";
import Benchtop_MARS from "../../public/images/Parallume_PSTI/Benchtop_MARS.png";
import Mobile_MARS from "../../public/images/Parallume_PSTI/Mobile_MARS.png";

class CarouselSlides extends Component {
  renderCarouselList() {
    return this.props.images.map(image => {
      if (image.name == "Bead Localization Tube") {
        return (
          <div className="carousel-item active">
            <img
              type="button"
              className="d-block mx-auto carousel-image"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              src={image.path}
              onClick={() => this.props.selectImage(image)}/>
          </div>
        );
      }
      else {
        return (
          <div className="carousel-item">
            <img
              type="button"
              className="d-block mx-auto carousel-image"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              src={image.path}
              onClick={() => this.props.selectImage(image)}/>
          </div>
        );
      }
    });
  }

  renderModalList() {
    if (!this.props.activeImage || this.props.activeImage.name == "Bead Localization Tube") {
      return this.props.images.map(image => {
        var cn = `carousel-item`;
        if (image.name == "Bead Localization Tube") {
          cn = cn + ` active`;
        }
        return (
          <div className={cn}>
            <img className="modal-image" src={image.path}/>
            <div className="carousel-caption d-none d-md-block">
              <p className="font-black font-sp text-left">{image.name}</p>
            </div>
          </div>
        );
      });
    }
    else {
      return this.props.images.map(image => {
        var cn = `carousel-item`;
        if (image.name == this.props.activeImage.name) {
          cn = cn + ` active`;
        }
        return (
          <div className={cn}>
            <img className="modal-image" src={image.path}/>
            <div className="carousel-caption d-none d-md-block">
              <p className="font-black font-sp text-left">{image.name}</p>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return(
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            {this.renderCarouselList()}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>


        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div id="carouselExampleIndicator" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicator" data-slide-to="0"  className="active"></li>
                  <li data-target="#carouselExampleIndicator" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicator" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicator" data-slide-to="3"></li>
                  <li data-target="#carouselExampleIndicator" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                  {this.renderModalList()}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicator" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicator" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    activeImage: state.activeImage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectImage: selectImage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselSlides);
