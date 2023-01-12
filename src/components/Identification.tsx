import React from 'react';

const Identification = (props) => {
  // faire passer une props age et dire si l'utilisateur est majeur ou mineur
  return (
    <div>
      bonjour M* {props.name}
      {" "}
      {
        props.pseudo ? <span> mon pseudo est {props.pseudo}</span> : <span> je n'ai pas de pseudo</span>
      }
    </div>
  );
};

export default Identification;
