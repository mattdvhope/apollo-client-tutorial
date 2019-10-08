import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

import Layout from "../components/layout"

const APOLLO_QUERY = gql`
  {
    games {
      vg_id
      vg_name
    }
  }
`

const IndexPage = () => {
  const { loading, error, data } = useQuery(APOLLO_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error:</p>

  return (
    <Layout>
      <ul>
        {data.games.map(game => (
          <li key={game.vg_id}>{game.vg_name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
