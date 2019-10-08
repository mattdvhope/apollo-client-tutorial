const path = require(`path`);

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const gameTemplate = path.resolve('./src/templates/game.js');

  const result = await graphql(`
    query {
      AllGames {
        games {
          vg_id
          vg_name
          vg_cost
          vg_genre
        }
      }
    }
  `);

  result.data.AllGames.games.forEach(game => {
    createPage({
      component: gameTemplate,
      path: `/game/${game.vg_name}`,
      context: {
        vg_name: game.vg_name,
      },
    });
  });
};