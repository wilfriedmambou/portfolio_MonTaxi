import React from 'react';
import { Row, Col } from 'reactstrap';
import engrenage from '../asset/images/engrenage.svg';
import flac from '../asset/images/flac.svg';
import playstor from '../asset/images/playstore.png';


import colors from '../asset/colors/colors.json';

let styleM = {
  p: {
    fontSize: '18px',
    fontFamily: 'Aleo',
    color: '#242a32',
    color2: '#f5a202',
    marginTop: '35px',
  },
  h1: {
    fontSize: '41.3sp',
    fontFamily: 'Aleo',
    color: '#f5a202',
    marginTop:'50px'
    // fontBold:'26sp'
  },
  h4: {
    fontSize: '21.3sp',
    fontFamily: 'Aleo',
    color: '#ffc628',
    marginTop: '35px',
  },
  container: {
    marginTop: '50px',
    marginRight: '100px',
    marginLeft: '100px',
    //   width:'100vw',
    overflow: 'hidden',
  },
  colBloc: {
    marginTop: '70px',
  },
};
export default function Section1() {
  return (
    <div style={styleM.container}>
    
      <Row  style={{alignItems:'center'}}>
     
          <a>
            <img
            style={{width:'13vw',height:'55px', marginLeft:'20px'}}
              src="https://www.pec.coop/wp-content/uploads/2017/09/AppStore-Badge-250.png"
              alt=""
            />
          </a>
      
          <a href="#">
            <img
             style={{width:'13vw',height:'65px'}}
            src={playstor}
              alt=""
            />
          </a>
      
      </Row>

      <h1 style={styleM.h1}>Comment ca marche ?</h1>
      <Row
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: '73.7dp',
        }}
      >
        <Col md={4} style={styleM.colBloc}>
          <img src={engrenage} />
        </Col>
      </Row>
      <Row>
        <Col md={4} style={styleM.colBloc}>
          <h4 style={styleM.h4}>1.Téléchargez l'application</h4>
          <p style={styleM.p}>
            Rendez vous sur le store correspondant à votre téléphone (Playstore
            ou Appstore) et téléchargez l'application Montaxi.
          </p>
        </Col>
        <Col md={4} style={styleM.colBloc}>
          <h4 style={styleM.h4}>2. Créez un compte</h4>
          <p style={styleM.p}>
            Inscrivez vous et connectez vous pour utiliser votre application.
            C'est facile !
          </p>
        </Col>
        <Col md={4} style={styleM.colBloc}>
          <h4 style={styleM.h4}>3. Abonnez vous</h4>
          <p style={styleM.p}>
            Choisissez votre formule d'abonnement et payez par Orange Money ou
            MTN Mobile Money.
          </p>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
        <Col
          md={4}
          style={{
            marginTop: '70px',
            backgroundImage: 'url(' + flac + ')',
            paddingTop: '50px',
          }}
        >
          <h2 style={styleM.h4}>4. Profitez !</h2>
          <p style={styleM.p}>
            Profitez de l'offre de taxis la plus fiable au prix <br />
            d'un taxi normal !
            <b />
            <br />
            <br />
            <br />
          </p>
        </Col>
      </Row>
    </div>
  );
}
