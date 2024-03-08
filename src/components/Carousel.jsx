import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";





class Carousel extends Component {
    constructor() {
      super();
      this.state = {
        current_count: 0,
      };
    }
  
    increase = () => {
      if (this.state.current_count === images.length - 1) {
        this.setState({
          current_count: 0,
        });
      } else {
        this.setState({
          current_count: this.state.current_count + 1,
        });
      }
    };
  
    decrease = () => {
      if (this.state.current_count === 0) {
        this.setState({
          current_count: images.length - 1,
        });
      } else {
        this.setState({
          current_count: this.state.current_count - 1,
        });
      }
    };
  
    render() {
      return (
        <>
          <div className="carousel-container flex">
            <div className="leftArrow arrowDiv flex" onClick={this.decrease}>
              <ArrowBackIosIcon />
            </div>
  
            <h2 className="title">{images[this.state.current_count].title}</h2>
            <img src={images[this.state.current_count].img} alt="image" />
            <h4 className="caption">{images[this.state.current_count].subtitle}</h4>
  
            <div className="rightArrow arrowDiv flex" onClick={this.increase}>
              <ArrowForwardIosIcon />
            </div>
          </div>
        </>
      );
    }
  }
  
  export default Carousel;
  