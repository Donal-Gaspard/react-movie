import React from "react";

interface Props {
  name: string;
  pseudo?: string;
  age: number;
	hasPet: boolean;
}

const Identification = (props: Props) => {

	const {pseudo, name, age, hasPet} = props;

	return (
    <div>
			bonjour M* {name}
      {
        pseudo
          ? <div> mon pseudo est {pseudo}</div>
          : <div> je n'ai pas de pseudo</div>
      }
			{
				age >= 18
					? <div> {age}: vous êtes majeur</div>
					: <div>{age}: Vous êtes mineur</div>
			}
			{
				hasPet && // si et seulement si il a un pet
				<div> Vous avez un animal</div>
			}
			<br/>

    </div>
  );
};

export default Identification;
