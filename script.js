let APIKey;


function searchPhotos() {
    
  let keyword = searchInput.value; 

  const endpoint = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=100&client_id=${APIKey}`;

  let photoList = [];

  fetch(endpoint)
    .then(resp => resp.json())
    .then(data => photoList.push(...data.results))
    .then(function() {
      let randomImage = Math.floor(Math.random() * photoList.length);
      searchSection.style.backgroundImage = `url(${photoList[randomImage].urls.regular})`;
    })

}


function getRandomPhoto() {

  const endpointRandom = `https://api.unsplash.com/photos/random?client_id=${APIKey}`;

  fetch(endpointRandom)
    .then(resp => resp.json())
    .then(function(random) {
      randomSection.style.backgroundImage = `url(${random.urls.regular})`;
    });
}



const searchInput = document.querySelector('.searching');
const searchSection = document.querySelector('.section-one');
const randomButton = document.querySelector('.randoming');
const randomSection = document.querySelector('.section-two');
  
searchInput.addEventListener('change', searchPhotos);
randomButton.addEventListener('click', getRandomPhoto);

