import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {
  const [nameForm, setNameForm] = useState("")
  const [hp, setHp] = useState("")
  const [frontImage, setFrontImage] = useState("")
  const [backImage, setBackImage] = useState("")
  
  const formData = {
    "name": nameForm,
    "hp": hp,
    "sprites": {
      "front": frontImage,
      "back": backImage,
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
        headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then(data => addNewPokemon(data));
  }



  



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit} >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={nameForm} onChange={(e) => setNameForm(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(e) => setHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImage}
            onChange={(e) => setFrontImage(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImage}
            onChange={(e) => setBackImage(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
