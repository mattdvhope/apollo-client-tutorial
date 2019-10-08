import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const ADD_GAME = gql`
  mutation AddGame($vg_name: String!, $vg_cost: Int, $vg_genre: String) {
    addGame(vg_name: $vg_name, vg_cost: $vg_cost, vg_genre: $vg_genre) {
      vg_id
      vg_name
      vg_cost
      vg_genre
    }
  }
`

const AddGame = () => {

  const [addGame] = useMutation(ADD_GAME)

  const [inputs, setInputs] = useState({
    vg_name: "",
    vg_cost: "",
    vg_genre: "",
  })

  const changeHandler = event => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const submit = event => {
    event.preventDefault()

    addGame({
      variables: {
        vg_name: inputs.vg_name,
        vg_cost: parseInt(inputs.vg_cost),
        vg_genre: inputs.vg_genre,
      },
    })
    alert("A name was submitted: " + inputs.vg_name)
  }

  return (
    <React.Fragment>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="vg_name"
          value={inputs.vg_name}
          onChange={changeHandler}
        />

        <label>Cost:</label>
        <input
          type="text"
          name="vg_cost"
          value={inputs.vg_cost}
          onChange={changeHandler}
        />

        <label>Genre:</label>
        <input
          type="text"
          name="vg_genre"
          value={inputs.vg_genre}
          onChange={changeHandler}
        />

        <input type="submit" value="Submit" onClick={submit} />
      </form>
    </React.Fragment>
  )
}

export default AddGame
