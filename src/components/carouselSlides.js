import React, { Component } from "react";

import Bead_Localization_Tube from "../../public/images/Parallume_PSTI/Bead_Localization_Tube.png";
import Bead_Localization_Slide from "../../public/images/Parallume_PSTI/Bead_Localization_Slide.png";
import Benchtop_MARS from "../../public/images/Parallume_PSTI/Benchtop_MARS.png";
import Mobile_MARS from "../../public/images/Parallume_PSTI/Mobile_MARS.png";

export default class CarouselSlides extends Component {
  render() {
    return(
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img type="button" className="d-block mx-auto carousel-image" data-toggle="modal" data-target="#exampleModalCenter" src={Bead_Localization_Tube} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img type="button" className="d-block mx-auto carousel-image" data-toggle="modal" data-target="#exampleModalCenter" src={Bead_Localization_Slide} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img type="button" className="d-block mx-auto carousel-image" data-toggle="modal" data-target="#exampleModalCenter" src={Benchtop_MARS} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img type="button" className="d-block mx-auto carousel-image" data-toggle="modal" data-target="#exampleModalCenter" src={Mobile_MARS} alt="Forth slide"/>
            </div>
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
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <img className="modal-image" src={Bead_Localization_Tube} alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block">
                      <p className="font-white font-sp text-left">Bead Localization Tube</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="modal-image" src={Bead_Localization_Slide} alt="Second slide"/>
                    <div className="carousel-caption d-none d-md-block">
                      <p className="font-black font-sp text-left">Bead Localization Slide</p>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <img className="modal-image" src={Benchtop_MARS} alt="Third slide"/>
                    <div className="carousel-caption d-none d-md-block">
                      <p className="font-black font-sp text-left">Benchtop MARS</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="modal-image" src={Mobile_MARS} alt="Forth slide"/>
                    <div className="carousel-caption d-none d-md-block">
                      <p className="font-black font-sp text-left">Mobile MARS</p>
                    </div>
                  </div>
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
