import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {pokemon} ) {
  const [isFront, setIsFront] = useState(true)

  function handleClick(pokemon) {
    setIsFront(!isFront)
  }
  return (
    <Card>
      <div>
        <div className="image"  key={pokemon.id}
          onClick={() => handleClick(pokemon)} >
          <img src={isFront ? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!"/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
