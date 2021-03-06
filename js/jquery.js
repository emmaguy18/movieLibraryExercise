// $(document).ready(function(){
//   console.log("jquery has loaded");
// })

// var pageTabs= document.getElementsByClassName('page-tab');
// for (var i = 0; i < pageTabs.length; i++) {
//   pageTabs[i].onclick = function(){
//     //console.log("you have clicked on a tab");
//     for (var j = 0; j < pageTabs.length; j++) {
//       if(pageTabs[j].classList.contains('active')){
//         pageTabs[j].classList.remove('active');
//         break;
//         }
//     }
//     if (!this.classList.contains('active')) {
//         this.classList.add('active');
//     }
//   };
// }

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

//jquery//
var pageTabs = $('.page-tab');
  pageTabs.click(function(){
  pageTabs.removeClass('active');
  $(this).addClass('active');
  //console.log($(this).text());
  changeTabs($(this).text());
});

function changeTabs(tabName){
// if (currentTab === tabName) {
// } else{
//   currentTab = tabName;
//   $('#pageContainer').html('');
//   }
if(currentTab !==){
  currentTab = tabName;
  $('#pageContainer').html('<h2>'+tabName+'</h2>');

  if(tabName === 'Movies'){
    $('#pageContainer').html('<div id="movieList" class="row"></div>');
    $('#pageContainer').append('<div class="row"><div class="col"><nav><ul id="paginationMovies"class="pagination justify-content-end"></ul></nav></div></div>')
    }
  }
}




function showDirectors(){


}
