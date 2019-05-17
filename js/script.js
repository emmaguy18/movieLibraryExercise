var movies = [
  {
    id: 1,
    title: 'The Shape of Water',
    year: 2017 ,
    directors: ['Guillermo del Toro'],
    bio: 'Elisa is cleaning lady in a high security government lab in Baltimore, 1962. Her life changes when she finds a scaled creature that she befriends',
    movieLength: 123,
    poster: 'shapeOfwater_poster.jpg',
    genre: ['drama', 'thriller']
  },
  {
    id: 2,
    title: 'The Shining',
    year: 1980,
    directors: ['Stanley Kubrick'],
    bio: 'Jack Torrance is a winter caretaker that goes to a Hotel in colorado with his family. His son, Danny is plagued by psychic premonitions.jack becomes disturb my his sons visons, discovers dark secrets in the hotel and becomes a homicidal maniac hell-bent on terrorizing his family ',
    movieLength: 146,
    poster: 'theShining.jpg',
    genre: ['mystery', 'psychological horror']
  },
  {
    id: 3,
    title: 'Girl, Interrupted',
    year: 1999,
    directors: ['James Mangold'],
    bio: 'Set in the 1960\'s, Girl Interruped is a true story of Susanna Kaysen, a young woman who finds herself at a renowned mental institution for troubled young women.',
    movieLength: 127,
    poster: 'girlInterrupted_poster.jpg',
    genre: ['drama']
  },
  {
    id: 4,
    title: 'Loving Vincent',
    year: 2017,
    directors: ['Dorota Kobiela', 'Hugh Welchman'],
    bio: 'An oil painted animation telling the story of Vincent Van Gogh\'s life leading up to his death.',
    movieLength: 95,
    poster:'lovingVincent_poster.jpg',
    genre: ['drama','mystery','animation']
  },
  {
    id: 5,
    title: 'V for Vendetta',
    year: 2005,
    directors: ['James McTeigue'],
    bio: 'Following world war, London is a police state occupied by a fascist government, and a vigilante known only as V uses terrorist tactics to fight the oppressors of the world in which he now lives. When V saves a young woman named Evey from the secret police, he discovers an ally in his fight against England\'s oppressors.',
    movieLength: 133,
    poster: 'vForVendetta_poster.jpg',
    genre: ['drama','thriller']
  },
  {
    id: 6,
    title: 'Your Name',
    year: 2016,
    directors: ['Makoto Shinkai'],
    bio: 'A teenage boy and girl embark on a quest to meet each other for the first time after they magically swap bodies.',
    movieLength: 112,
    poster: 'yourName_poster.jpg',
    genre: ['animation','fantasy','drama']
  },
  {
    id: 7,
    title: 'A Silent Voice',
    year: 2017,
    directors: ['Naoko Yamada'],
    bio: 'When a grade school student with impaired hearing is bullied mercilessly, she transfers to another school. Years later, one of her former tormentors sets out to make amends.',
    movieLength: 130,
    poster: 'aSilentVoice_poster.jpg',
    genre: ['animation','romance','drama']
  },
  {
    id: 8,
    title: 'The Tale of Princess Kaguya',
    year: 2013,
    directors: ['Isao Takahata', 'Hidekazu Sato'],
    bio: 'A tiny nymph found inside a bamboo stalk grows into a beautiful and desirable young woman, who orders her suitors to prove their love by completing a series of near-impossible tasks.',
    movieLength: 137,
    poster: 'princessKaguya_poster.jpg',
    genre: ['animation','drama','adventure','fantasy']
  },
  {
    id: 9,
    title: 'Maquia: When the Promised Flower Blooms',
    year: 2013,
    directors: ['Isao Takahata', 'Hidekazu Sato'],
    bio: 'A tiny nymph found inside a bamboo stalk grows into a beautiful and desirable young woman, who orders her suitors to prove their love by completing a series of near-impossible tasks.',
    movieLength: 137,
    poster: 'princessKaguya_poster.jpg',
    genre: ['animation','drama','adventure','fantasy']
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


var genreClass= getGenreColour(movie.genre[0]);
// if(movie.genre[0] === 'drama'){
//  genreClass = 'border-danger';
// } else if (movie.genre[0] === 'mystery'){
//   genreClass = 'border-secondary';
// }else if (movie.genre[0] === 'animation'){
//   genreClass = 'border-success';
// }


  var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
      movieCard += '<div class="movieThumb card h-100 border-'+genreClass+' " onclick="showMoreMovie('+movie.id+');">';
      //movieCard += '<div class="movieThumb movieThumb2 card h-100 '+genreClass+' "data-id="'+movie.id+' ">';
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
  document.getElementById('movieYear').innerText = singleMovie.year;

  document.getElementById('movieDirectors').innerHTML = '';
  for (var i = 0; i < singleMovie.directors.length; i++) {
  console.log(singleMovie.directors[i]);
  document.getElementById('movieDirectors').innerHTML += '<li class="list-inline-item">' + singleMovie.directors[i] + '<li>';
}

  document.getElementById('movieBio').innerText = singleMovie.bio;
  document.getElementById('movieLength').innerText = singleMovie.movieLength;

    document.getElementById('movieGenre').innerHTML = '';
  for (var i = 0; i < singleMovie.genre.length; i++) {
    var genreColour = getGenreColour(singleMovie.genre[i]);
    // if (singleMovie.genre[i === 'drama']) {
    //   genreColour = 'badge-primary';
    // } else if (singleMovie.genre[i] === 'thriller'){
    //   genreColour = 'badge-secondary';
    // } else if(singleMovie.genre[i] === 'animation'){
    //   genreColour = 'badge-success';
    // } else if (singleMovie.genre [i] === 'fantasy'){
    //   genreColour = 'badge-danger';
    // } else if (singleMovie.genre [i] === 'mystery'){
    //   genreColour = 'badge-warning';
    // } else{
    //   genreColour = 'dark';
    // }
  document.getElementById('movieGenre').innerHTML += '<span class="badge badge-'+genreColour+' mr-1">'+singleMovie.genre[i] + '</span>';
  }


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


function getGenreColour(genre){

  if(genre === 'drama'){
    return 'danger';
 } else if (genre === 'mystery'){
    return 'info';
  }else if (genre === 'animation'){
    return 'success';
  } else if(genre === 'fantasy'){
    return 'primary';
  } else if(genre === 'thriller'){
    return 'warning';
  }else{
    return 'dark';
  }

}
