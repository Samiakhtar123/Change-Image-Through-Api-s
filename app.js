
    const imgElement = document.getElementById("myImage");
    const btn = document.getElementById("changeBtn");

fetch("https://boringapi.com/api/v1/photos/?page=1&limit=100")
  .then(res => res.json())
  .then(data => {
      photos = data.photos.map(p => p.url); 
      if (photos.length > 0) {
          imgElement.src = photos[0];
      }
  });

btn.addEventListener("click", () => {
    if (photos.length > 0) {
        // Pick a random image
        const randomUrl = photos[Math.floor(Math.random() * photos.length)];
        imgElement.src = randomUrl;
    }
});