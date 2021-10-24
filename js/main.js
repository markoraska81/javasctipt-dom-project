var players = [
  {
    img: 'Kevin-Punter.png',
    name: 'Kevin',
    surname: 'Punter',
    number: 00,
    position: 'Guard',
    height: 1.93,
    nationality: 'USA',
  },
  {
    img: 'Lorenzo-Brown.png',
    name: 'Lorenzo',
    surname: 'Brown',
    number: 4,
    position: 'Guard',
    height: 1.96,
    nationality: 'USA',
  },
  {
    img: 'Stratos-Perperoglou.png',
    name: 'Stratos',
    surname: 'Perperoglou',
    number: 5,
    position: 'Forward',
    height: 2.03,
    nationality: 'Grecce',
  },
  {
    img: 'Dejan-Davidovac.png',
    name: 'Dejan',
    surname: 'Davidovac',
    number: 7,
    position: 'Forward',
    height: 2.02,
    nationality: 'Serbia',
  },
  {
    img: 'Branko-Lazic.png',
    name: 'Branko',
    surname: 'Lazic',
    number: 10,
    position: 'Guard',
    height: 1.95,
    nationality: 'Serbia',
  },
  {
    img: 'Billy-Beron.png',
    name: 'Billy',
    surname: 'Beron',
    number: 12,
    position: 'Guard',
    height: 1.88,
    nationality: 'USA',
  },
  {
    img: 'Ognjen-Dobric.png',
    name: 'Ognjen',
    surname: 'Dobric',
    number: 13,
    position: 'Guard',
    height: 2.0,
    nationality: 'Serbia',
  },
  {
    img: 'James-Gist.png',
    name: 'James',
    surname: 'Gist',
    number: 15,
    position: 'Forward',
    height: 2.04,
    nationality: 'USA',
  },
  {
    img: 'Kalin-Lucas.png',
    name: 'Kalin',
    surname: 'Lucas',
    number: 16,
    position: 'Guard',
    height: 1.85,
    nationality: 'USA',
  },
  {
    img: 'Jagodic-Kuridza.png',
    name: 'Marko',
    surname: 'Jagodic-Kur.',
    number: 21,
    position: 'Forward',
    height: 2.05,
    nationality: 'Serbia',
  },
  {
    img: 'Charles-Jenkins.png',
    name: 'Charles',
    surname: 'Jenkins',
    number: 22,
    position: 'Guard',
    height: 1.91,
    nationality: 'USA',
  },
  {
    img: 'Borisa-Simanic.png',
    name: 'Borisa',
    surname: 'Simanic',
    number: 28,
    position: 'Forward',
    height: 2.09,
    nationality: 'Serbia',
  },
  {
    img: 'Nikola-Jovanovic.png',
    name: 'Nikola',
    surname: 'Jovanovic',
    number: 32,
    position: 'Center',
    height: 2.11,
    nationality: 'Serbia',
  },
  {
    img: 'Michael-Ojo.png',
    name: 'Michael',
    surname: 'Ojo',
    number: 50,
    position: 'Centar',
    height: 2.16,
    nationality: 'Nigeria',
  },
  {
    img: 'Vladimir-Stimac.png',
    name: 'Vladimir',
    surname: 'Stimac',
    number: 91,
    position: 'Center',
    height: 2.1,
    nationality: 'Serbia',
  },
];

// RANDOM NUMBER
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// NEW PLAYERS
function newPlayers() {
  while (players.length) {
    var firstRoster = document.querySelector('.first-roster');
    var subRoster = document.querySelector('.sub-roster');
    var randomNumber = getRandom(players);
    var container = players.length > 10 ? firstRoster : subRoster;

    // APPEND PLAYER ON THE PAGE
    container.appendChild(createPlayer(players[randomNumber]));

    players.splice(randomNumber, 1);
  }
}

// MAKE SUBSTITUTION
function makeSubstitution() {
  var firstRoster = document.querySelectorAll('.first-roster .player-card');
  var subRoster = document.querySelectorAll('.sub-roster .player-card');

  var firstRosterNum = getRandom(firstRoster);
  var subRosterNum = getRandom(subRoster);

  var firstPlayer = firstRoster[firstRosterNum];
  var subPlayer = subRoster[subRosterNum];

  var subPrevious = subPlayer.previousSibling;
  var subNext = subPlayer.nextSibling;

  firstPlayer.after(subPlayer);

  subPlayer ? subPrevious.after(firstPlayer) : subNext.before(firstPlayer);
}

// CREATE PLAYER
function createPlayer(data) {
  var player = document.createElement('div');
  player.classList.add('player-card');

  var img = '<img src="img/' + data.img + '" />';
  var name =
    '<h3>' + data.number + '. ' + data.name + ' ' + data.surname + '</h3>';
  var pos = '<p><span>Position: </span> ' + data.position + '</p>';
  var hgt = '<p><span>Height: </span> ' + data.height + '</p>';
  var nat = '<p><span>Nationality: </span> ' + data.nationality + '</p>';

  player.innerHTML = img + name + pos + hgt + nat;

  return player;
}

newPlayers();
// setInterval(makeSubstitution, 5000);
