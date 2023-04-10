import React from 'react';
import plus from '../asset/images/plus.svg'
import {
  Form,
  Row,
  Col,
  Input,
  Label,
  FormGroup,
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
    textAlign: 'justify',
  },
  marginTopCol: {
    marginTop: '50px',
  },
  label: {
    fontSize: '17px',
    fontFamily: 'Aleo',
    // color: '#ffc628',
    // marginTop: '35px',
  },
};
export default function Section3() {
  return (
    <div style={styleM.container}>
      <h1 style={styleM.h1}>S'inscrire en tant que Chauffeur</h1>

      <Form style={{ textAlign: 'justify', marginTop: '70px' }}>
        <Row>
          <Col md={5}>
            <FormGroup>
              <Label for="exampleEmail" style={styleM.label}>Nom</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <FormGroup>
              <Label for="examplePassword" style={styleM.label}>Prénom</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5} style={styleM.marginTopCol}>
            <Label for="examplePassword" style={styleM.label}>Véhicule utilisé</Label>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
          </Col>
          <Col md={2}></Col>
          <Col md={5} style={styleM.marginTopCol}>
            <FormGroup>
              <Label for="exampleCheckbox" style={styleM.label}>
                Êtes vous propriétaire du véhicule ?
              </Label>

              <Col style={{ display: 'flex', flexDirection: 'row',fontSize:'17px',fontFamily:'Aleo' }}>
                <CustomInput
                  type="radio"
                  id="exampleCustomRadio"
                  name="customRadio"
                  label="oui"
                />
                <CustomInput
                  type="radio"
                  id="exampleCustomRadio2"
                  name="customRadio"
                  label="nom"
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
       
      </Form>
      <Row style={{ justifyContent: 'center', alignContent: 'center',}}>
         <Col md={4} style={{marginTop:'70px' }}>
          <img src={plus}/>
          <p >
         <span style={styleM.p} > Ajoutez des fichiers </span><br/>
        <span style={{color:'#80242a32'}}>Photos du véhicule et Photocopie CNI</span>
          </p>
        </Col>
        </Row>
    </div>
  );
}
