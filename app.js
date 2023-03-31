const container = document.getElementById("container");
const noData = "no info"; // *** on information ***
const filter = document.getElementById("filter");

// -- get API --
const getCountries = async () => {
  const url = "https://restcountries.com/v3.1/all";
  const res = await fetch(url);
  const items = await res.json();
  items.forEach((element) => {
    createCard(element, noData); //** on information */
  });
};

//  -- end get API --

//  --  create a Card for storeing country data. --
const createCard = (data, noData) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("country");
  const contentHTML = `
     <div class ="img-container">
      <img src="${data.flags.png}"/>
     </div>
     <div class = "info">
      <h3 class = "name">${data.name.common}</h3>
      <small>เมืองหลวง : <span>${data.capital}</span></small>
      <small>ภูมิภาค : <span>${data.region}</span></small> <br>
      <small>จำนวนประชากร : <span>${formatNumber(data.population)}</span></small> 
     </div>
  `;

  cardEl.innerHTML = contentHTML;
  container.appendChild(cardEl);

  if (data.capital) {
    cardEl.innerHTML = contentHTML;
  } else {
    cardEl.innerHTML = `
    <div class ="img-container">
    <img src="${data.flags.png}"/>
   </div>
   <div class = "info">
    <h3 class = "name">${data.name.common}</h3>
    <small>เมืองหลวง : <span>${noData}</span></small>
    <small>ภูมิภาค : <span>${data.region}</span></small> 
   </div>
      `;
  }
  // -- end create a Card for storeing country data.  --

  //-- add  Features fillter  -- 
  filter.addEventListener("input", (e) => {
    const listItme = [];
    const search = e.target.value.toLowerCase();
    listItme.push(cardEl);
    listItme.forEach((item) => {
      if (item.innerText.toLowerCase().includes(search)) {
        cardEl.classList.remove("card");
      } else {
        cardEl.classList.add("card");
      }
    });
  });
  // -- add function formatNumber -- 
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

};

getCountries();

// -- end  ---
