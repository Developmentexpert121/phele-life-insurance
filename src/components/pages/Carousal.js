import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import img1 from '../.././assets/home1.jpg'
import img2 from '../.././assets/home2.jpg'
import img3 from '../.././assets/home3.jpg'

export default class App extends Component {
  slides = [
    {
      key: 1,
      content: (<img src={img2} alt="1" ></img>)
    },
    {
      key: 2,
      content: (<img src={img2} alt="2"/>)
    },
    {
      key: 3,
      content: (<img src={img3} alt="3"/>)
    },
    {
      key: 4,
      content: (<img src={img1} alt="4"/>)
    },
    {
      key: 5,
      content: (<img src={img2} alt="5"/>)
    },
    {
      key: 6,
      content: (<img src={img3} alt="6"/>)
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    autoplay: true,
    autoplaySpeed: 2000
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div style={{ width: "100%", height: "17rem", margin: "0 4.5rem" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
          autoPlay
          interval={this.state.autoplaySpeed}
          infiniteLoop={true}
          dynamicHeight={true}
          ref={(slider) => (this.slider = slider)}
          {...settings}
        ></Carousel>
      </div>
    );
  }
}
