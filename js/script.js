var movies = [
  {
    id: 1,
    title: 'The Shape of Water',
    year: 2017 ,
    directors: ['Guillermo del Toro'],
    bio: 'Elisa is cleaning lady in a high security government lab in Baltimore, 1962. Her life changes when she finds a scaled creature that she befriends',
    length: 123,
    poster: 'img/shapeOfwater_poster.jpg'
  },
  {
    id: 2,
    title: 'The Shining',
    year: 1980,
    directors: ['Stanley Kubrick'],
    bio: 'Jack Torrance is a winter caretaker that goes to a Hotel in colorado with his family. His son, Danny is plagued by psychic premonitions.jack becomes disturb my his sons visons, discovers dark secrets in the hotel and becomes a homicidal maniac hell-bent on terrorizing his family ',
    length: 146,
    poster: 'img/theShining_poster.jpeg'
  },
  {
    id: 3,
    title: 'Girl, Interrupted',
    year: 1999,
    directors: ['James Mangold'],
    bio: 'Set in the 1960\'s, Girl Interruped is a true story of Susanna Kaysen, a young woman who finds herself at a renowned mental institution for troubled young women.',
    length: 127,
    poster: 'img/girl_interrupted.jpg'
  },
  {
    id: 4,
    title: 'Loving Vincent',
    year: 2017,
    directors: ['Dorota Kobiela, Hugh Welchman'],
    bio: 'An oil painted animation telling the story of Vincent Van Gogh\'s life leading up to his death.',
    length: 95,
    poster:'img/lovingVincent_poster.jpg'
  },
  {
    id: 5,
    title: 'V for Vendetta',
    year: 2005,
    directors: ['James McTeigue'],
    bio: 'Following world war, London is a police state occupied by a fascist government, and a vigilante known only as V uses terrorist tactics to fight the oppressors of the world in which he now lives. When V saves a young woman named Evey from the secret police, he discovers an ally in his fight against England\'s oppressors.',
    length: 133,
    poster: 'img/vForVendetta_poster.jpg'
  }
];
console.log(movies);
var moviesList = document.getElementById('moviesList');

for (var i = 0; i < movies.length; i++) {
  //console.log(movies[i]);
  var movie = movies[i];
  //console.log(movie["title"])
  //document.getElementById('moviesList').innerHTML += '<p>'+movie.title+'</p>'

  // moviesList.innerHTML += '<div class="col-12 col-sm-6 col-md-4">';
  //   moviesList.innerHTML += '<div class="card">';
  //
  //   moviesList.innerHTML += '</div>';
  // moviesList.innerHTML += '</div>';

  // var movieCard = '<div class="col-12 col-sm-6 col-md-4">';
  //   movieCard += '<div class="card">';
  //
  //     movieCard += '<div class="card-body">';
  //       movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
  //     movieCard += '</div>';
  //
  //   movieCard += '</div>';
  // movieCard += '</div>';
  // console.log(movieCard);
  // moviesList.innerHTML += movieCard;

  var columns = document.createElement('div');
  var columnsAttr = document.createAttribute("class");
  columnsAttr.value = 'col-12 col-sm-6 col-md-4';
  columns.setAttributeNode(columnsAttr);

  var card = document.createElement('div');
  var cardAttr = document.createAttribute('class');
  cardAttr.value = 'card';
  card.setAttributeNode(cardAttr);

  var cardBody= document.createElement('div');
  var cardBodyAttr = document.createAttribute('class');
  cardBodyAttr.value = 'card-body';
  cardBody.setAttributeNode(cardBodyAttr);

  var cardTitle = document.createElement('h5');
  var cardTitleAttr = document.createAttribute('class');
  cardTitleAttr.value = 'card-title';
  cardTitle.setAttributeNode(cardTitleAttr);
  var cardTitleText = document.createTextNode(movie.title);

  cardTitle.appendChild(cardTitleText);
  cardBody.appendChild(cardTitle);
  card.appendChild(cardBody);
  columns.appendChild(card);


  moviesList.appendChild(columns);






}
