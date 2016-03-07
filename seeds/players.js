
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('players').del(),

    knex('players').insert({
      name: 'Lionel Messi',
      position: 'Attacking Midfielder',
      team: 'FC Barcelona',
      image_url: 'http://img.fifa.com/images/fwc/2014/players/prt-3/229397.png',
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
    }),
    knex('players').insert({
      name: 'Louisa Necib',
      position: 'Midfielder',
      team: 'France',
      image_url: 'http://fifawallpapers.com/wp-content/uploads/2014/05/Louisa-Necib-2.jpeg',
      fifa_rating: 90
    }),
    knex('players').insert({
      name: 'Nadine Kessler',
      position: 'Midfielder',
      team: 'Germany',
      image_url: 'http://ichef.bbci.co.uk/news/976/mcs/media/images/82908000/jpg/_82908076_kesslergetty.jpg',
      fifa_rating: 89
    }),
    knex('players').insert({
      name: 'Christine Sinclair',
      position: 'Forward',
      team: 'Canada',
      image_url: 'http://www3.pictures.zimbio.com/gi/Christine+Sinclair+Canada+Women+Official+Olympic+QiStxjduyxtl.jpg',
      fifa_rating: 88
    }),
    knex('players').insert({
      name: 'Marta Vieira da Silva',
      position: 'Forward',
      team: 'Brasil',
      image_url: 'http://www.hjo.se/ImageVaultFiles/id_2928/cf_1897/Marta.JPG',
      fifa_rating: 88
    }),
    knex('players').insert({
      name: 'Hope Solo',
      position: 'Goalkeeper',
      team: 'USA',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/621.png',
      fifa_rating: 87
    }),
    knex('players').insert({
      name: 'Lotta Schelin',
      position: 'Forward',
      team: 'Sweden',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/215433.png',
      fifa_rating: 87
    }),
    knex('players').insert({
      name: 'Becky Sauerbrunn',
      position: 'Defender',
      team: 'USA',
      image_url: 'http://cbsnews2.cbsistatic.com/hub/i/r/2015/06/09/9ab7de42-c00c-4025-b22c-af75eaa5fd35/resize/620x465/9f5a8b947eb1101e786298ff446ce486/0007beckysauerbrunn.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Nadine Angerer',
      position: 'Goalkeeper',
      team: 'Germany',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/92.png',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Dzsenifer Marozsan',
      position: 'Midfielder',
      team: 'Germany',
      image_url: 'http://www.top2best.com/wp-content/uploads/2015/07/Dzsenifer-Marozsan-german-woman-footballer.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Celia Šasic',
      position: 'Forward',
      team: 'Germany',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/218358.png',
      fifa_rating: 85
    }),
    knex('players').insert({
      name: 'Christie Rampone',
      position: 'Defender',
      team: 'USA',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/310.png',
      fifa_rating: 85
    }),
    knex('players').insert({
      name: 'Tobin Heath',
      position: 'Midfielder',
      team: 'USA',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/252102.png',
      fifa_rating: 85
    }),
    knex('players').insert({
      name: 'Alex Morgan',
      position: 'Forward',
      team: 'USA',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/302753.png',
      fifa_rating: 84
    }),
    knex('players').insert({
      name: 'Anja Mittag',
      position: 'Forward',
      team: 'Germany',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/190195.png',
      fifa_rating: 84
    }),
    knex('players').insert({
      name: 'Rosana dos Santos Augusto',
      position: 'Defender',
      team: 'Brasil',
      image_url: 'http://img.fifa.com/imgml/tournament/fwwc/players/germany2011/xl/178667.png',
      fifa_rating: 84
    }),
    knex('players').insert({
      name: 'Nilla Fischer',
      position: 'Defender',
      team: 'Sweden',
      image_url: 'http://img.fifa.com/images/fwwc/2015/players/prt-3/265233.png',
      fifa_rating: 84
    }),
    knex('players').insert({
      name: 'Caroline Seger',
      position: 'Midfielder',
      team: 'Sweden',
      image_url: 'http://svenskfotboll.se/ImageVault/Images/id_62673/conversionFormatType_WebSafe/scope_0/ImageVaultHandler.aspx',
      fifa_rating: 84
    }),
    knex('players').insert({
      name: 'Zlatan Ibrahimović',
      position: 'Forward',
      team: 'Paris Saint-Germain',
      image_url: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/59217.jpg',
      fifa_rating: 90
    }),
    knex('players').insert({
      name: 'Manuel Neuer',
      position: 'Goalkeeper',
      team: 'Bayern Munich',
      image_url: 'http://static2.wn.de/var/storage/images/wn/startseite/welt/wm-2014/die-deutsche-mannschaft/1586300-fussball-die-deutschen-spieler-bei-der-wm-manuel-neuer/50628688-1-ger-DE/Fussball-Die-deutschen-Spieler-bei-der-WM-Manuel-Neuer_image_630_420f.jpg',
      fifa_rating: 90
    }),
    knex('players').insert({
      name: 'Andrés Iniesta',
      position: 'Midfielder',
      team: 'FC Barcelona',
      image_url: 'http://img.uefa.com/imgml/TP/players/9/2015/324x324/58031.jpg',
      fifa_rating: 89
    }),
    knex('players').insert({
      name: 'Luis Suárez',
      position: 'Forward',
      team: 'FC Barcelona',
      image_url: 'http://www.uefa.org/imgml/TP/players/1/2015/324x324/106375.jpg',
      fifa_rating: 89
    }),
    knex('players').insert({
      name: 'Bastian Schweinsteiger',
      position: 'Midfielder',
      team: 'Bayern Munich',
      image_url: 'http://pthumb.lisimg.com/image/7029312/280full.jpg',
      fifa_rating: 88
    }),
    knex('players').insert({
      name: 'Franck Ribéry',
      position: 'Midfielder',
      team: 'Bayern Munich',
      image_url: 'http://img.uefa.com/imgml/TP/players/1/2013/324x324/95665.jpg',
      fifa_rating: 88
    }),
    knex('players').insert({
      name: 'Eden Hazard',
      position: 'Forward',
      team: 'Chelsea FC',
      image_url: 'http://www.chelseafc.com/content/cfc/en/homepage/teams/first-team/eden-hazard/summary/_jcr_content/tabparmain/box/box/textimage/image.img.jpg/1451180810438.jpg',
      fifa_rating: 88
    }),
    knex('players').insert({
      name: 'Robin van Persie',
      position: 'Forward',
      team: 'Manchester United',
      image_url: 'http://pthumb.lisimg.com/image/7017525/280full.jpg',
      fifa_rating: 88
    }),
    knex('players').insert({
      name: 'Radamel Falcao',
      position: 'Forward',
      team: 'Manchester United',
      image_url: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/250011928.jpg',
      fifa_rating: 88
    }),
    knex('players').insert({
      name: 'Philipp Lahm',
      position: 'Defender',
      team: 'Bayern Munich',
      image_url: 'http://pthumb.lisimg.com/image/7029339/280full.jpg',
      fifa_rating: 87
    }),
    knex('players').insert({
      name: 'Gareth Bale',
      position: 'Midfielder',
      team: 'Real Madrid',
      image_url: 'http://worldsoccertalk.com/wp-content/uploads/2013/09/gareth-bale2-600x885.jpg',
      fifa_rating: 87
    }),
    knex('players').insert({
      name: 'Sergio Ramos',
      position: 'Defender',
      team: 'Real Madrid',
      image_url: 'http://pthumb.lisimg.com/image/7029532/280full.jpg',
      fifa_rating: 87
    }),
    knex('players').insert({
      name: 'Thiago Silva',
      position: 'Defender',
      team: 'Paris Saint-Germain',
      image_url: 'http://s.psg.fr/psg/image/joueur/hd/14/2739.jpg',
      fifa_rating: 87
    }),
    knex('players').insert({
      name: 'David Silva',
      position: 'Midfielder',
      team: 'Manchester City',
      image_url: 'http://www.insidespanishfootball.com/wp-content/uploads/2014/06/SilvaWC.png',
      fifa_rating: 87
    }),
    knex('players').insert({
      name: 'Luka Modrić',
      position: 'Midfielder',
      team: 'Real Madrid',
      image_url: 'http://img.uefa.com/imgml/TP/players/9/2014/324x324/74699.jpg',
      fifa_rating: 87
    }),
    knex('players').insert({
      name: 'Robert Lewandowski',
      position: 'Forward',
      team: 'Bayern Munich',
      image_url: 'http://img.uefa.com/imgml/TP/players/1/2016/324x324/250002096.jpg',
      fifa_rating: 87
    }),
    knex('players').insert({
      name: 'Vincent Kompany',
      position: 'Defender',
      team: 'Manchester City',
      image_url: 'http://cdn1.sbnation.com/imported_assets/1622101/71507.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Xavi',
      position: 'Midfielder',
      team: 'FC Barcelona',
      image_url: 'http://arxiu.fcbarcelona.cat/web/thumbnails/199_150/Imatges/2008-2009/futbol/noticies/jugadors/xavi/XAVI_copia.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Yaya Touré',
      position: 'Midfielder',
      team: 'Manchester City',
      image_url: 'http://mediadb.kicker.de/2012/fussball/spieler/xl/37766_1343_201191217036485.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Wayne Rooney',
      position: 'Forward',
      team: 'Manchester United',
      image_url: 'http://www.manutd.com/sitecore/shell/~/media/1C394E7DC8304129A056B3A9CC6E90AB.ashx?w=240&h=311&rgn=573,346,1413,1433',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Sergio Agüero',
      position: 'Forward',
      team: 'Manchester City',
      image_url: 'http://pthumb.lisimg.com/image/7028364/280full.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Ángel Di María',
      position: 'Midfielder',
      team: 'Manchester United',
      image_url: 'http://pthumb.lisimg.com/image/7028345/280full.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Marco Reus',
      position: 'Forward',
      team: 'Borussia Dortmund',
      image_url: 'http://mediadb.kicker.de/2014/fussball/spieler/xl/46429_940_20131115151925121.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Thomas Mülle',
      position: 'Forward',
      team: 'Bayern Munich',
      image_url: 'http://pthumb.lisimg.com/image/7029332/280full.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Mesut Özil',
      position: 'Midfielder',
      team: 'Arsenal',
      image_url: 'http://img.uefa.com/imgml/TP/players/3/2016/324x324/103697.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Mats Hummels',
      position: 'Defender',
      team: 'Borussia Dortmund',
      image_url: 'http://pthumb.lisimg.com/image/7029308/280full.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Neymar',
      position: 'Forward',
      team: 'FC Barcelona',
      image_url: 'https://s-media-cache-ak0.pinimg.com/736x/89/ed/28/89ed281f8ae1ca8e2965817a2fd7cf5c.jpg',
      fifa_rating: 86
    }),
    knex('players').insert({
      name: 'Tim Howard',
      position: 'Goalkeeper',
      team: 'Everton FC',
      image_url: 'https://pbs.twimg.com/profile_images/484575431212154880/FyriFSOJ.jpeg',
      fifa_rating: 84
    })

  );
};
