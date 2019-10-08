import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($vg_name: String!) {
    AllGames {
      gameByName(vg_name: $vg_name) {
        vg_name
        vg_cost
        vg_genre
      }
    }
  }
`
// game template
function game({ data }) {
  console.log("DATA--> ", data);
  const game = data.AllGames.gameByName
  return (
    <Layout>
      <h1>Name of the game is: {game.vg_name}</h1>
      <h2>The cost of the game is: {game.vg_cost}</h2>
      <h2>The genre of the game is: {game.vg_genre}</h2>
    </Layout>
  )
}

export default game
