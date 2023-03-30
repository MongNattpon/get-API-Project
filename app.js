const container = document.getElementById("container")
const noData = "no info"; // *** on information ***

// -- get API --
const getCountries = async () => {
  const url = "https://restcountries.com/v3.1/all"
  const res = await fetch(url)
  const items = await res.json()
  items.forEach(element => {
    createCard(element, noData)  //** on information */


  });

}
//  -- end get API --

 //   create a Card for storeing country data. 
const createCard = (data, noData) => {
  const cardEl = document.createElement("div")
  cardEl.classList.add("country")
  const contentHTML = `
     <div class ="img-container">
      <img src="${data.flags.png}"/>
     </div>
     <div class = "info">
      <h3 class = "name">${data.name.common}</h3>
      <small>เมืองหลวง : <span>${data.capital}</span></small>
      <small>ภูมิภาค : <span>${data.region}</span></small> 
     </div>
  `
  cardEl.innerHTML = contentHTML;
  container.appendChild(cardEl);

  if (data.capital) {
    cardEl.innerHTML = contentHTML;
  } else {
    cardEl.innerHTML =  `
      <div class ="img-container">
      <img src="${data.flags.png}"/>
     </div>
     <div class = "info">
      <h3 class = "name">${data.name.common}</h3>
      <small>เมืองหลวง : <span>${noData}</span></small>
      <small>ภูมิภาค : <span>${data.region}</span></small> 
     </div>

      `;
  };

}
getCountries()

// -- end  -- 




