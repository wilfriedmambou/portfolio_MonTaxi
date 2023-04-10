import React from 'react';
import mail from '../asset/images/mail.svg';
import pointLocalisation from '../asset/images/pointLocalisation.svg';
import phone from '../asset/images/phone.svg';

import {
  Form,
  Row,
  Col,
  Input,
  Label,
  FormGroup,
  Button,
  CustomInput,
} from 'reactstrap';

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
    margin: '73.7dp',
    // fontBold:'26sp'
  },
  h4: {
    fontSize: '17px',
    fontFamily: 'Aleo',
    // color: '#ffc628',
    // marginTop: '35px',
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
    textAlign: 'justify',
  },
  marginTopCol: {
    marginTop: '50px',
  },
};
export default function Section4() {
  return (
    <div style={styleM.container}>
      <h1 style={styleM.h1}>Nous contacter</h1>

      <Form style={{ textAlign: 'justify', marginTop: '70px' }}>
        <Row>
          <Col md={5}>
            <h2 style={{ fontFamily: 'Aleo', fontSize: '30px' }}>
              Besoin de plus d'informations <br />
              écrivez nous.
            </h2>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <FormGroup>
              <Label for="examplePassword" style={styleM.h4}>
                Nom Complet
              </Label>
              <Input
                type="text"
                name="nom"
                id="nom_complet"
                placeholder="Nom complet"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <h4 style={styleM.h4}>
              <img src={pointLocalisation} />
              Yaoundé, Bastos <br />
              Ambassade d'Espagne
            </h4>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <FormGroup>
              <Label for="exampleCheckbox" style={styleM.h4}>
                Adresse e-mail
              </Label>
              <Input type="text" name="email" id="email" placeholder="Email" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <h4 style={styleM.h4}>
              <img src={phone} /> +237 698 67 82 07 | +237 674 70 70 34
              <br />
              <br />
              <br />
              <img src={mail} />
              {'   '} info@montaxii.com
            </h4>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <FormGroup>
              <Label for="exampleCheckbox" style={styleM.h4}>
                Message
              </Label>
              <Input
                style={{ height: '200px' }}
                type="textarea"
                // height='150px'
                name="Message"
                id="Message"
                placeholder="Message"
              />
            </FormGroup>
          </Col>
        
        </Row>
        <Row>
            <Col md={7}></Col>
            <Col md={5}>
              <Button
                style={{
                  color: '#f5a202',
                //   borderRadius: '33%',
                  fontSize: '17px',
                  fontFamily: 'Aleo',
                  textAlign: 'center',
                  justifyContent: 'center',
                  marginBottom:'20px',
                  border:'1px solid #f5a202',
                  backgroundColor:'transparent'
    
                }}
              >
                {' '}
                Envoyer
              </Button>
            </Col>
          </Row>
      </Form>
    </div>
  );
}
