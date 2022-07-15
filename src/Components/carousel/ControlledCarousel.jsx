import { Carousel } from 'react-bootstrap'
import { React, useState } from 'react'
import './mid.css'
import embreve from '../../img/embreve.jpg'
import Arvore from './projetos/arvore-links/Arvore'
import Calculadora from './projetos/calculator/Calculator'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>            
      <Carousel id="home" activeIndex={index} onSelect={handleSelect} fade  >
        <Carousel.Item interval={5000}>
          <Arvore />
          <Carousel.Caption className='description-background'>
            <h3>Árvore de Links</h3>
            <p>Árvore de Links feita com HTML e CSS. <br/> 
            <a 
            href="https://pedrogles.github.io/LinkTree"
            className='redirect'
            target="_blank">Clique aqui.</a></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Calculadora/>
          <Carousel.Caption className='description-background'>
            <h3>Calculadora</h3>
            <p>Calculadora feita com <br/> HTML, CSS e JavaScript. <br/>
            <a 
            href="https://pedrogles.github.io/calculadora-javascript"
            className='redirect'
            target="_blank">Clique aqui.</a></p>
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
