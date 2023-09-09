 async function loadRandomUsers(){
   let response = await fetch("https://reqres.in/api/users");
    let data = await response.json();
    console.log("data", data);
}

loadRandomUsers();


async function loadRandomCat(){
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
   let data = await response.json();
   console.log("data", data);
   const imageUrl = data[0].url;
   console.log("imageUrl", imageUrl);
   let element = document.querySelector(".catimage");
   element.src = imageUrl;
}

loadRandomCat();