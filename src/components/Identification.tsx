import React from 'react';

interface Props {
  name: string;
  pseudo?: string ;
}

const Identification = (props: Props) => {
  // faire passer une props age et dire si l'utilisateur est majeur ou mineur

  return (
    <div>
      bonjour M* {props.name}
      {/* vous être majeur, vous ête mineur */}
      {" "}
      {
        props.pseudo ? <span> mon pseudo est {props.pseudo}</span> : <span> je n'ai pas de pseudo</span>
      }
    </div>
  );
};

export default Identification;
