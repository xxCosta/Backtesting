import { readdir } from "node:fs/promises"
const files = await readdir(import.meta.dir)
console.log(files)


// let myHeaders = new Headers();
// myHeaders.append("Authorization", "Client-ID {{clientId}}");
//
// let formdata = new FormData();
// formdata.append("image", fileInput.files[0], "GHJQTpX.jpeg");
// formdata.append("type", "file");
// formdata.append("title", "Simple upload");
// formdata.append("description", "This is a simple image upload in Imgur");
//
// let requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: formdata,
//   redirect: 'follow'
// };
//
// fetch("https://api.imgur.com/3/image", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
