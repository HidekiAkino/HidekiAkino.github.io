'use strict'
// Please don't delete the 'use strict' line above

const allItem = [
  {
    Number: "001",
    Name: "ビール",
    Price: 200,
    Image: "beer.png",
    Stock: 3000,
  },
  {
    Number: "002",
    Name: "ジュース",
    Price: 100,
    Image: "juice.png",
    Stock: 2000,
  },
  {
    Number: "003",
    Name: "お茶",
    Price: 100,
    Image: "tea.png",
    Stock: 10000,
  },
  {
    Number: "004",
    Name: "水",
    Price: 90,
    Image: "water.png",
    Stock: 20000,
  },
  {
    Number: "005",
    Name: "いも焼酎",
    Price: 3500,
    Image: "syouchu.png",
    Stock: 0,
  },
  {
    Number: "006",
    Name: "コーヒー",
    Price: 110,
    Image: "coffee.png",
    Stock: 9,
  },
];

const allUser = [
  {
    userNumber: "3214231",
    userName: "秋野 秀樹",
    passwaord:"aaaaa",
    mailAdddress: "hideki_akino@mail.toyota.co.jp",
  },
  {
    userNumber: "9999999",
    userName: "山田 太郎",
    passwaord:"bbbbb",
    mailAdddress: "taro_yamada@mail.toyota.co.jp",
  },
];
const allCliant = [
  {
    userNumber: "00001",
    userName: "秋野 秀樹",
    passwaord:"aaaaa",
    mailAdddress: "hideki_akino@mail.toyota.co.jp",
  },
  {
    userNumber: "00002",
    userName: "山田 太郎",
    passwaord:"bbbbb",
    mailAdddress: "taro_yamada@mail.toyota.co.jp",
  },
];

const getNamesExpected = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran ♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran ♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett"
];

const getResistantPokemonNamesExpected = [
  "Charmander",
  "Charmeleon",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Vulpix",
  "Ninetales"
];

const getWeaknessCountsExpected = {
  Fire: 16,
  Ice: 20,
  Flying: 16,
  Psychic: 21,
  Water: 10,
  Ground: 14,
  Rock: 21,
  Electric: 11,
  Grass: 6,
  Fighting: 2,
  Poison: 6,
  Steel: 4,
  Bug: 2
};
