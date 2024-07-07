const Base_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

const dropdowns = document.querySelector(".dropdown select");

for (let select of dropdowns) {
  for (let codes in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = codes;
    newoption.value = codes;
    select.append(newoption)
  }
}
