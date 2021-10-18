import React, { ReactElement } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from '../images/logo.png';
interface Props {}

function Slider({}: Props): ReactElement {
  return (
    <div className="slider">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={logo} />
        </div>
        <div>sdsdsdsd</div>
        <div>sddsdsds</div>
      </Carousel>
    </div>
  );
}

export default Slider;
