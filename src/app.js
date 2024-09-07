/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#default").addEventListener("click", function() {
    generateSummary("default");
  });
};
const generateSummary = () => {
  let pokemonName = [
    "Pikachu",
    "Rayquaza",
    "Magikarp",
    "Glaceon",
    "Palafin",
    "Tepig",
    "Shinx",
    "Lopunny",
    "Gardevoir",
    "Kingambit",
    "Staraptor",
    "Lucario",
    "Dragapult",
    "Garchomp",
    "Eevee",
    "Golisopod",
    "Orthworm",
    "Petilil",
    "Croagunk",
    "Pidove",
    "Chimchar",
    "Popplio",
    "Tapu Bulu",
    "Magby",
    "Spinda",
    "Arceus",
    "Kricketune",
    "Espurr",
    "Volcarona",
    "Landorus",
    "Swablu",
    "Gothita",
    "Gengar",
    "Alakazam",
    "Cinderace",
    "Gliscor",
    "Wooper",
    "Charizard",
    "Blaziken",
    "Pancham"
  ];
  let catchLocation = [
    "Route 1",
    "Victory Road",
    "Driftveil City",
    "the Pokemon Center",
    "Mount Lanakila",
    "Route 202",
    "the Pokemon Mansion",
    "Lake Verity",
    "Sandgem Town",
    "Undella Town",
    "Route 2",
    "Route 3",
    "Route 4",
    "Route 5",
    "Ten Carat Hill",
    "Po Town",
    "Poni Grove",
    "Alfornada",
    "Area Zero",
    "Casseroya Lake",
    "Crystal Pool",
    "Nature Preserve",
    "Dreaded Den",
    "Infernal Pass",
    "Hammerlocke Hills",
    "Kitakami Wilds",
    "Parfum Palace",
    "Shalour City",
    "Lush Jungle",
    "Ultra Space Wilds",
    "Pal Park",
    "Acuity Lakefront",
    "Safari Zone",
    "Aether Paradise"
  ];
  let nature = [
    "Hardy",
    "Lonely",
    "Adamant",
    "Naughty",
    "Brave",
    "Bold",
    "Docile",
    "Impish",
    "Lax",
    "Relaxed",
    "Modest",
    "Mild",
    "Bashful",
    "Rash",
    "Quiet",
    "Calm",
    "Careful",
    "Gentle",
    "Quirky",
    "Sassy",
    "Timid",
    "Hasty",
    "Naive",
    "Serious",
    "Jolly"
  ];
  let characteristic = [
    "Loves to eat",
    "Proud of its power",
    "Sturdy body",
    "Likes to run",
    "Highly curious",
    "Strong willed",
    "Likes to relax",
    "Impetuous and silly",
    "Thoroughly cunning",
    "Mischievous",
    "Takes plenty of siestas",
    "Likes to thrash about",
    "Capable of taking hits",
    "Alert to sounds",
    "Somewhat vain",
    "Nods off a lot",
    "Scatters things often",
    "A little quick tempered",
    "Highly persistent",
    "Strongly defiant",
    "Likes to fight",
    "Good endurance",
    "Somewhat of a clown",
    "Often lost in thought",
    "Hates to lose",
    "Quick tempered",
    "Good perseverance",
    "Quick to flee",
    "Very finicky",
    "Somewhat stubborn"
  ];

  let pokemonNameIndex = Math.floor(Math.random() * pokemonName.length);
  let catchLocationIndex = Math.floor(Math.random() * catchLocation.length);
  let natureIndex = Math.floor(Math.random() * nature.length);
  let characteristicIndex = Math.floor(Math.random() * characteristic.length);

  let fullSummary =
    pokemonName[pokemonNameIndex] +
    " was caught at " +
    catchLocation[catchLocationIndex] +
    ". " +
    nature[natureIndex] +
    " nature. " +
    characteristic[characteristicIndex] +
    ".";
  document.querySelector(".pokemonSummary").innerHTML = fullSummary;
};
