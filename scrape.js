// Your custom scraping script.
// Look at https://github.com/HackYourFutureBelgium/JavaScript2/tree/master/Projects/web-scraper
// for the version we showed in class.


document.addEventListener('keypress', imd);
// I am still understanding this part of eventlistener, I think I don't apply it correctly here, I am still doing my research and readings

function imd() {

  let rows = document.querySelectorAll('tr.odd, tr.even');
  console.clear();
  for (let i = 0; i < rows.length; i++) {
    const info = rows[i];
    let nameActors = info.querySelector("[itemprop=actor] a span").innerHTML;
    let characterNames = info.querySelector("td.character").textContent;
    console.log(`Actor: ${nameActors.trim()}, character: ${characterNames.trim()}`);
  }
}
console.log(imd());

















