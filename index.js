const factpara = document.querySelector("#facts");
const factbtn = document.querySelector("#btn");

let URL = "https://cat-fact.herokuapp.com/facts";

let getdata = async () => {
  console.log("Fetching data...");
  let response = await fetch(URL);
  console.log(response.status);
  let data = await response.json();
  factpara.innerText = data[0].text;
  factpara.innerText = data[1].text;
};

// function getdata() {
//   fetch(URL)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factpara.innerText = data[0].text;
//     });
// }

factbtn.addEventListener("click", getdata);
