import React from "react";

interface Props {
	name: string;
	pseudo?: string;
  age: number;
}

const Identification = (props: Props) => {
	// faire passer une props age et dire si l'utilisateur est majeur ou mineur

	return (
		<div>
			bonjour M* {props.name}
 {props.age (
				<span> vous êtes majeur</span>
			) :
      <span>Vous êtes mineur</span>

			{props.pseudo ? (
				<span> mon pseudo est {props.pseudo}</span>
			) : (
				<span> je n'ai pas de pseudo</span>
			)}
		</div>
	);
};

export default Identification;
