
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('players').del(),

    knex('players').insert({
      name: 'Lionel Messi',
      position: 'Attacking Midfielder',
      team: 'FC Barcelona',
      image_url: 'https://fifa15.content.easports.com/fifa/fltOnlineAssets/B488919F-23B5-497F-9FC0-CACFB38863D0/2016/fut/items/images/players/html5/120x120/158023.png',
      fifa_rating: 93
    }),
    knex('players').insert({
      name: 'Cristiano Ronaldo',
      position: 'Attacking Midfielder',
      team: 'Real Madrid',
      image_url: 'http://futhead.cursecdn.com/static/img/14/players/20801.png',
      fifa_rating: 92
    }),
    knex('players').insert({
      name: 'Arjen Robben',
      position: 'Midfielder',
      team: 'Bayern Munich',
      image_url: 'http://1a3cd.http.mex01.cdn.softlayer.net/stadium-wikibol/images/player/29777bf2-5c2a-45b2-8dab-88328902cf45/1402337470.png',
      fifa_rating: 90
    }),
    knex('players').insert({
      name: 'Carli Lloyd',
      position: 'Midfielder',
      team: 'USA',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/264572.png',
      fifa_rating: 91
    }),
    knex('players').insert({
      name: 'Megan Rapinoe',
      position: 'Midfielder',
      team: 'USA',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/212337.png',
      fifa_rating: 90
    }),
    knex('players').insert({
      name: 'Abby Wambach',
      position: 'Forward',
      team: 'USA',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/186483.png',
      fifa_rating: 90
    })

  );
};
