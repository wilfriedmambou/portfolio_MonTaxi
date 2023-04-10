import React, { useState } from 'react';
import { Row, Col, CarouselItem } from 'reactstrap';
import taxi from '../asset/images/taxi.svg';

import photoHeader2 from '../asset/images/photoHeader2.svg';
import photoHeader3 from '../asset/images/photoHeader3.svg';
import photoHeader4 from '../asset/images/photoHeader4.svg';

import { Carousel } from 'react-bootstrap';

import CustumDiv from './CustumDiv';
export default function Header() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ marginBottom: '150px' }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Row
            md={12}
            style={{
              overflow: 'hidden',
              width: '100%',
              alignItems: 'baseline',
              marginTop: '100px',
            }}
          >
            <Col md={4}>
              <CustumDiv
                custumMargin="78.53px"
                titre="Votre Taxi"
                yeloTitre="Vient A Vous"
                contenu="Avec MonTaxi profitez d'une solution rapide,  simple  sure et disponible sur telephone pour vos deplacements en ville "
              />
            </Col>
            <Col md={2}></Col>

            <Col md={6}>
              <div style={{}}>
                <img src={taxi} />
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row
            md={12}
            style={{
              overflow: 'hidden',
              width: '100%',
              alignItems: 'baseline',
              marginTop: '100px',
            }}
          >
            <Col md={4}>
              <CustumDiv
                custumMargin="72.53px"
                titre="Votre taxi est"
                yeloTitre="disponible 24/7"
                contenu="Commande un taxi à tout moment, de jour comme de nuit."
              />
            </Col>
            <Col md={2}></Col>

            <Col md={6}>
              <div style={{}}>
                <img src={photoHeader2} />
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row
            md={12}
            style={{
              overflow: 'hidden',
              width: '100%',
              alignItems: 'baseline',
              marginTop: '100px',
            }}
          >
            <Col md={4}>
              <CustumDiv
                custumMargin="72.53px"
                titre="Paiement"
                yeloTitre="simple et rapide"
                contenu="Paie en Cash ou en un clic via MonTaxi Pay"
              />
            </Col>
            <Col md={2}></Col>

            <Col md={6}>
              <div style={{}}>
                <img src={photoHeader3} />
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row
            md={12}
            style={{
              overflow: 'hidden',
              width: '100%',
              alignItems: 'baseline',
              marginTop: '100px',
            }}
          >
            <Col md={4}>
              <CustumDiv
                custumMargin="72.53px"
                titre="Votre taxi est"
                yeloTitre="disponible sur commande"
                contenu="N’attends plus en route sous le soleil et la 
pluie, ton taxi vient te chercher où 
tu es."
              />
            </Col>
            <Col md={2}></Col>

            <Col md={6}>
              <div style={{}}>
                <img src={photoHeader4} />
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
