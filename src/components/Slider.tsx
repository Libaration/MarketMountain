import React, { ReactElement } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';
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
        dynamicHeight={false}
      >
        <div>
          <img src={banner2} alt="banner" />
        </div>
        <div>
          <img src={banner1} alt="banner" />
        </div>
        <div>
          <img src={banner3} alt="banner" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
