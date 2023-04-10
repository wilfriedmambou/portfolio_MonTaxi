import React from 'react';

export default function CustumDiv({ titre, yeloTitre, contenu ,custumMargin}) {
  return (
    <div style={{marginLeft:custumMargin,textAlign:'justify',alignSelf:'center'}}>
      {titre && (<h1 style={{color:'#242a32',fontSize:'30px',fontFamily:'Aleo'}}>{titre}</h1> ) }
    { yeloTitre && (<h1 style={{color:'#ffc628',fontSize:'25px',fontFamily:'Aleo'}}>{yeloTitre}</h1> ) }  
      <p style={{color:'#242a32',fontFamily:'Aleo',fontSize:'18px'}}>{contenu}</p>
    </div>
  );
}
