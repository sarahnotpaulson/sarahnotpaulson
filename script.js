var factList = ["The United States constitutes 5% of the world population and contributes to 22% of the world’s carbon emission.", "In recent times, half of all amphibians are at risk of extinction due to climate change. ", "Climate change enhances the spread of pests that causes life-threatening diseases like dengue, malaria, Lyme disease etc.", "The risk caused by melting of permafrost and other ice that has been frozen for centuries is that while the ice melts, diseases not seen by humans for millions of years will come back with no way for us to fight it.", "Land use change and deforestation contribute to 15% of carbon emission every year.", "Above 600000 deaths occur worldwide every year due to climate change. 95% of these deaths take place in developing countries.", "Polar sea ice coverage continued its downward trend in 2019. Both the Arctic and Antarctic oceans recorded their second-smallest average annual sea-ice coverage during the 1979–2019 period of record."]

var myBtn = document.getElementById("myBtn");
var fact = document.getElementById("fact");
var count = 0;

myBtn.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count==factList.length){
    count =0;
  }
}



