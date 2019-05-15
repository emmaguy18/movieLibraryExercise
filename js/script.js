var movies = [
  {
    id: 1,
    title: 'The Shape of Water',
    year: 2017 ,
    directors: ['Guillermo del Toro'],
    bio: 'Elisa is cleaning lady in a high security government lab in Baltimore, 1962. Her life changes when she finds a scaled creature that she befriends',
    length: 123,
    poster: 'shapeOfwater_poster.jpg',
    genre: ['drama', 'thriller']
  },
  {
    id: 2,
    title: 'The Shining',
    year: 1980,
    directors: ['Stanley Kubrick'],
    bio: 'Jack Torrance is a winter caretaker that goes to a Hotel in colorado with his family. His son, Danny is plagued by psychic premonitions.jack becomes disturb my his sons visons, discovers dark secrets in the hotel and becomes a homicidal maniac hell-bent on terrorizing his family ',
    length: 146,
    poster: 'theShining.jpg',
    genre: ['mystery', 'psych horror']
  },
  {
    id: 3,
    title: 'Girl, Interrupted',
    year: 1999,
    directors: ['James Mangold'],
    bio: 'Set in the 1960\'s, Girl Interruped is a true story of Susanna Kaysen, a young woman who finds herself at a renowned mental institution for troubled young women.',
    length: 127,
    poster: 'girlInterrupted_poster.jpg',
    genre: ['drama']
  },
  {
    id: 4,
    title: 'Loving Vincent',
    year: 2017,
    directors: ['Dorota Kobiela', 'Hugh Welchman'],
    bio: 'An oil painted animation telling the story of Vincent Van Gogh\'s life leading up to his death.',
    length: 95,
    poster:'lovingVincent_poster.jpg',
    genre: ['drama','mystery']
  },
  {
    id: 5,
    title: 'V for Vendetta',
    year: 2005,
    directors: ['James McTeigue'],
    bio: 'Following world war, London is a police state occupied by a fascist government, and a vigilante known only as V uses terrorist tactics to fight the oppressors of the world in which he now lives. When V saves a young woman named Evey from the secret police, he discovers an ally in his fight against England\'s oppressors.',
    length: 133,
    poster: 'vForVendetta_poster.jpg',
    genre: ['drama','thriller']
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


var genreClass= '';
//console.log(movie.genre[0]);
if(movie.genre[0] === 'drama'){
 genreClass = 'border-danger';
} else if (movie.genre[0] === 'mystery'){
  genreClass = 'border-secondary';
}


  var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
      movieCard += '<div class="movieThumb card '+genreClass+' " onclick="showMoreMovie('+movie.id+');">';
      //movieCard += '<div class="movieThumb movieThumb2 card '+genreClass+' "data-id="'+movie.id+' ">';
        movieCard += '<img src="img/'+movie.poster+'" class="card-img-top" alt="">';
      movieCard += '<div class="card-body">';
        movieCard += '<h5 class="card-title">'+movie.title+'</h5>';

    movieCard += '</div>';
  movieCard += '</div>';
movieCard += '</div>';

  //console.log(movieCard);
  moviesList.innerHTML += movieCard;



  // var columns = document.createElement('div');
  // var columnsAttr = document.createAttribute("class");
  // columnsAttr.value = 'col-12 col-sm-6 col-md-4';
  // columns.setAttributeNode(columnsAttr);
  //
  // var card = document.createElement('div');
  // var cardAttr = document.createAttribute('class');
  // cardAttr.value = 'card';
  // card.setAttributeNode(cardAttr);
  //
  // var cardBody= document.createElement('div');
  // var cardBodyAttr = document.createAttribute('class');
  // cardBodyAttr.value = 'card-body';
  // cardBody.setAttributeNode(cardBodyAttr);
  //
  // var cardTitle = document.createElement('h5');
  // var cardTitleAttr = document.createAttribute('class');
  // cardTitleAttr.value = 'card-title';
  // cardTitle.setAttributeNode(cardTitleAttr);
  // var cardTitleText = document.createTextNode(movie.title);
  //
  // cardTitle.appendChild(cardTitleText);
  // cardBody.appendChild(cardTitle);
  // card.appendChild(cardBody);
  // columns.appendChild(card);
  //
  // moviesList.appendChild(columns);


}


function showMoreMovie(movieNumber){
  var singleMovie;
  //console.log('you have clicked on the movie');
  console.log(movieNumber);
  for (var i = 0; i < movies.length; i++) {

    if(movies[i].id === movieNumber){
      console.log(movies[i]);
      singleMovie = movies[i];
      break;
    }

  }
  console.log(singleMovie);
  document.getElementById('posterImage').src= 'img/'+singleMovie.poster;
  document.getElementById('movieTitle').innerText = singleMovie.title;



   document.getElementById('moviePopUp').style.display = "flex";
   document.body.style.overflow = 'hidden';
}


var movieThumbnails = document.getElementsByClassName('movieThumb2');
for (var i = 0; i < movieThumbnails.length; i++) {
  // console.log(movieThumbnails[i]);
  // console.log(movieThumbnails[i].dataset.id);
  //movieThumbnails[i].onclick = showMoreMovie;
  //var id= parseInt(movieThumbnails[i].dataset.id);
  //console.log(id);

  movieThumbnails[i].onclick = function(){
    var id= parseInt(this.dataset.id);
    showMoreMovie(id);
  };
}

document.getElementById('close').onclick = function(){
     document.getElementById('moviePopUp').style.display = 'none';
        document.body.style.overflow = 'scroll';
};
