import Services from "./Services.js";
const services = new Services();
services.getAdat(
  "https://pokeapi.co/api/v2/pokemon-form/12",
  pokemonMegjelenit,
);