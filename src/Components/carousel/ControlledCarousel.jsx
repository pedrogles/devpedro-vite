import { Carousel } from 'react-bootstrap'
import { React, useState } from 'react'
import './mid.css'
import embreve from '../../img/embreve.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>            
      <Carousel id="home" activeIndex={index} onSelect={handleSelect} fade  >
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={embreve}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Projeto 1</h3>
            <p>Descrição do projeto.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={embreve}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Projeto 2</h3>
            <p>Descrição do projeto.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={embreve}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Projeto 3</h3>
            <p>Descrição do projeto.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ControlledCarousel