import React from 'react';
import { Row, Col } from 'reactstrap';
import carte from '../asset/images/carte.svg';
import temps from '../asset/images/temps.svg';
import poket from '../asset/images/poket.svg';

import colors from '../asset/colors/colors.json';
import CustumDiv from './CustumDiv';

let styleM = {
  p: {
    fontSize: '16sp',
    fontFamily: 'Aleo',
    color: '#242a32',
    color2: '#f5a202',
    marginTop: '5px',
  },
  h1: {
    fontSize: '41.3sp',
    fontFamily: 'Aleo',
    color: '#f5a202',
    margin: '73.7dp',
    fontBold: '26sp',
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
    // marginTop: '70px',
    // justifyContent:'baseline'
  },
  alignContentOnRow:{
    // alignItems:'baseline',
    marginTop: '70px',
  },
  alignContentOnRow2:{
    alignItems:'center',
    marginTop: '70px',
  }
};
export default function Section2() {
  return (
    <div style={styleM.container}>
      <h1 style={styleM.h1}>Conduire sur MonTaxi</h1>
      <Row
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: '73.7dp',
        }}
      >
        <Col md={4} style={styleM.colBloc}>
          <p style={styleM.p}>
            Devenir un chauffeur Montaxi c'est plein de d'avantages !!!
           <br/>
            <a style={{ color: styleM.p.color2 }}>S'inscrire</a>
          </p>
        </Col>
      </Row>
      <Row  style={styleM.alignContentOnRow2}>
        <Col md={4} style={styleM.colBloc}>
          <CustumDiv
            custumMargin="20px"
            titre="Obtenez"
            yeloTitre="la destination par avance"
            contenu="Connaitre la position et la destination de tes clients devient un jeu denfant"
          />
        </Col>
        <Col md={4}></Col>
        <Col md={4} style={styleM.colBloc}>
          <img src={carte} />
        </Col>
      </Row>
      <Row  style={styleM.alignContentOnRow2}>
        <Col md={4} style={styleM.colBloc}>
          <img src={temps} />
        </Col>
        <Col md={4}></Col>
        <Col md={4} style={styleM.colBloc}>
          <CustumDiv
            custumMargin="20px"
            titre="Travaillez"
            yeloTitre="quand vous et ou vous voulez"
            contenu="Connectez vous à n'importe quelle heure et effectuez des missions pour gagner de l'argent tous les jours."
          />
        </Col>
      </Row>
      <Row  style={styleM.alignContentOnRow2}>
        <Col md={4} style={styleM.colBloc}>
          <CustumDiv
            custumMargin="20px"
            titre="Nous ne prélevons"
            yeloTitre=" aucune commision"
            contenu="Pas besoin d’attendre le virement hebdomadaire ! Vous savez d’avance ce que vous gagnez et vous gardez le tout."
          />
        </Col>
        <Col md={4}></Col>
        <Col md={4} style={styleM.colBloc}>
          <img src={poket} />
        </Col>
      </Row>
    </div>
  );
}
