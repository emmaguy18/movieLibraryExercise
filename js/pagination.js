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
    year: 2018,
    directors: ['Mari Okada'],
    bio: 'An immortal girl and a normal boy meet and become friends, sharing a bond that lasts throughout the years.',
    movieLength: 115,
    poster: 'maquia.jpg',
    genre: ['animation','adventure','drama','fantasy']
  },
  {
    id: 10,
    title: 'Crimson Peak',
    year: 2015,
    directors: ['Guillermo del Toro'],
    bio: 'After marrying the charming and seductive Sir Thomas Sharpe, young Edith finds herself swept away to his remote gothic mansion in the English hills. Also living there is Lady Lucille, Thomas\' alluring sister and protector of her family\'s dark secrets. Able to communicate with the dead, Edith tries to decipher the mystery behind the ghostly visions that haunt her new home. As she comes closer to the truth, Edith may learn that true monsters are made of flesh and blood.',
    movieLength: 119,
    poster: 'crimsonPeak_poster.jpg',
    genre: ['fantasy','horror','drama','thriller','mystery','romance']
  },
  {
    id: 11,
    title: 'Princess Mononoke',
    year: 1997,
    directors: ['Hayao Miyazaki'],
    bio: 'On a journey to find the cure for a Tatarigami\'s curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.',
    movieLength: 134,
    poster: 'princessMononoke_poster.jpg',
    genre: ['animation','adventure','fantasy']
  },
  {
    id: 12,
    title: 'Puella Magi Madoka Magica the Movie Part 1: Beginnings',
    year: 2012,
    directors: ['Akiyuki Shinbo','Yukihiro Miyamoto'],
    bio: 'A strange creature offers Madoka, a 14-year-old girl, and her best friend, Sayaka, a deal: They can have one wish granted if they become magical girls and fight witches that cause murders and suicides.',
    movieLength: 130,
    poster: 'madokaMagica_poster.png',
    genre: ['animation','psychological','drama','fantasy']
  }
];

var maxNumberOnScreen = 4;
var currentTab = 'Movies';
var pageContainer = document.getElementById('pageContainer');


//console.log(numberOfPages);


//group way//
// var x = 0;
// onload();
// function Onload(){
//   //console.log("function");
//   for (var i = 8 * x; i < 8 * (x + 1); i++) {
//     //console.log("this is a loop");
//     var movie = movies[i];
//   }
// }


// Richard's way//
function showMovieThumbmnails(start, end) {
  document.getElementById('moviesList').innerHTML = "";
  console.log("you clicked on page " + (end / 4));
  // console.log(start);
  // console.log(end);
  for (var i = start; i < end; i++) {
    var movie = movies[i];
    var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
        movieCard += '<div class="movieThumb card h-100" data-id="'+movie.id+'">';
          movieCard += '<img src="img/'+movie.poster+'" class="card-img-top" alt="">';
        movieCard += '<div class="card-body">';
          movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
          movieCard += '</div>';
    movieCard += '</div>';
  movieCard += '</div>';

  document.getElementById('moviesList').innerHTML += movieCard;
  }
  var movieThumbnails = document.getElementsByClassName('movieThumb');
  //console.log(movieThumbnails);
  for (var i = 0; i < movieThumbnails.length; i++) {
    movieThumbnails[i].onclick = function(){
      var id= parseInt(this.dataset.id);
      showMoreMovie(id);
    };
  }
}



function showMoreMovie(movieNumber){
  var singleMovie;
  for (var i = 0; i < movies.length; i++) {
    if(movies[i].id === movieNumber){
      singleMovie = movies[i];
      break;
    }
  }
  document.getElementById('posterImage').src= 'img/'+singleMovie.poster;
  document.getElementById('movieTitle').innerText = singleMovie.title;
  document.getElementById('movieYear').innerText = singleMovie.year;

  document.getElementById('movieDirectors').innerHTML = '';
  for (var i = 0; i < singleMovie.directors.length; i++) {
  document.getElementById('movieDirectors').innerHTML += '<li class="list-inline-item">' + singleMovie.directors[i] + '<li>';
  }

  document.getElementById('movieBio').innerText = singleMovie.bio;
  document.getElementById('movieLength').innerText = singleMovie.movieLength;

  document.getElementById('movieGenre').innerHTML = '';
  for (var i = 0; i < singleMovie.genre.length; i++) {
  }

   document.getElementById('moviePopUp').style.display = "flex";
   document.body.style.overflow = 'hidden';
 }


document.getElementById('close').onclick = function(){
     document.getElementById('moviePopUp').style.display = 'none';
        document.body.style.overflow = 'scroll';
};


var pageTabs= document.getElementsByClassName('page-tab');
for (var i = 0; i < pageTabs.length; i++) {
  pageTabs[i].onclick = function(){
    //console.log("you have clicked on a tab");
    for (var j = 0; j < pageTabs.length; j++) {
      if(pageTabs[j].classList.contains('active')){
        pageTabs[j].classList.remove('active');
        break;
        }
    }
    if (!this.classList.contains('active')) {
        this.classList.add('active');
    }
    changeTab(this.innerText);
    //JavaScript ways to use classes//
    //console.log(this.classList);
    //this.classList.add('newClass', 'secondNewClass');
    //console.log(this.classList.contains('active'));
    //console.log(this.classList.item(1));
    //this.classList.remove('active');
    //this.classList.toggle('active');
  };
}


function changeTab(tabName){
  if (currentTab === tabName){
    console.log('you are still on same page');
  } else{
    currentTab = tabName;
    console.log('change to the' + tabName + ' page');
    pageContainer.innerHTML= '';
    if (tabName === 'Directors'){
    showDirectors();
    } else if(tabName === 'Movies'){
    pageContainer.innerHTML = '<div id="moviesList" class="row"></div>';
    pageContainer.innerHTML += '<div class="row"><div class="col"><nav><ul id="paginationMovies" class="pagination justify-content-end"></ul></nav></div></div>';
    showMovies();
    }
  }
}

function showDirectors(){
  console.log("show directors");
  pageContainer.innerHTML = '<div class="row"><div class="col"><h2 class="display-4">Directors</h2></div></div>';
}

function showMovies(){
  var numberOfPages = Math.ceil(movies.length / maxNumberOnScreen);
  if (numberOfPages > 1) {
    var pagination = document.getElementById('paginationMovies');
    for (var a = 0; a < numberOfPages; a++) {
      pagination.innerHTML += '<li class="page-item"><a onclick="showMovieThumbmnails('+(maxNumberOnScreen * a)+', '+(maxNumberOnScreen * (a+1) )+')" class="page-link" href="#">'+(a+1)+'</a></li>';
    }
  }
  if (maxNumberOnScreen > movies.length) {
    showMovieThumbmnails(0, movies.length);
  }else {
    showMovieThumbmnails(0, maxNumberOnScreen);
  }
}
showMovies();
