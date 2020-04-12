import React from "react";
import LearnNorthernEurope from "../mapData/Continents/Europe/Learn/LearnNorthernEurope";
import LearnCentralEurope from "../mapData/Continents/Europe/Learn/LearnCentralEurope";

export default [
  {
    europe: {
      "northern-europe": {
        title: "Northern Europe",
        countries: [
          {
            Iceland: {
              name: "Iceland",
              capital: "Reykjavík",
              population: "334,300",
              land: "103,000 km²",
              language: "Icelandic",
              animal: "Gyrfalcon",
              flagStyles: ["#000a84", "#ff0023", "#fff"],
              styles: {
                learn: ["#20694B"],
                quiz: ["#F4FFA2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Iceland.png`),
            },
            Ireland: {
              name: "Ireland",
              capital: "Dublin",
              population: "6,378,000",
              land: "84,421 km²",
              language: "Irish, English",
              animal: "Irish hare",
              flagStyles: ["#11a92d", "#fb9153", "#fff"],
              styles: {
                learn: ["#8DAA5C"],
                quiz: ["#FFA2A2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Ireland.png`),
            },
            "United Kingdom": {
              name: "United Kingdom",
              capital: "London",
              population: "65,110,000",
              land: "242,495 km²",
              language: "English",
              animal: "Lion",
              flagStyles: ["#cf142b", "#00247d", "#fff"],
              styles: {
                learn: ["#20694B"],
                quiz: ["#A6EFFF"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/United Kingdom.png`),
            },
            Norway: {
              name: "Norway",
              capital: "Oslo",
              population: "5,223,256",
              land: "385,203 km²",
              language: "Norwegian",
              animal: "Moose",
              flagStyles: ["#ef2b2d", "#002868", "#fff"],
              styles: {
                learn: ["#8DAA5C"],
                quiz: ["#A6EFFF"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Norway.png`),
            },
            Denmark: {
              name: "Denmark",
              capital: "Copenhagen",
              population: "5,717,014",
              land: "42,933 km²",
              language: "Danish",
              animal: "Mute Swan",
              flagStyles: ["#c60c30", "#fff", "#fff"],
              styles: {
                learn: ["#C6D83B"],
                quiz: ["#F4FFA2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Denmark.png`),
            },
            Finland: {
              name: "Finland",
              capital: "Helsinki",
              population: "5,491,817",
              land: "338,440 km²",
              language: "Finnish, Swedish",
              animal: "brown bear",
              flagStyles: ["#003580", "#fff", "#fff"],
              styles: {
                learn: ["#C6D83B"],
                quiz: ["#F4FFA2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Finland.png`),
            },
            Sweden: {
              name: "Sweden",
              capital: "Stockholm",
              population: "9,894,888",
              land: "450,295 km²",
              language: "Swedish",
              animal: "Moose/Elk",
              flagStyles: ["#006aa7", "#fecc00", "#fff"],
              styles: {
                learn: ["#20694B"],
                quiz: ["#FFA2A2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Sweden.png`),
            },
            Estonia: {
              name: "Estonia",
              capital: "Tallinn",
              population: "1,315,944",
              land: "45,226 km²",
              language: "Estonian",
              animal: "grey wolf",
              flagStyles: ["#4891d9", "#000", "#fff"],
              styles: {
                learn: ["#20694B"],
                quiz: ["#FFA2A2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Estonia.png`),
            },
            Latvia: {
              name: "Latvia",
              capital: "Riga",
              population: "1,961,600",
              land: "64,589 km²",
              language: "Latvian",
              animal: "Two-spotted ladybird",
              flagStyles: ["#9e3039", "#fff", "#fff"],
              styles: {
                learn: ["#8DAA5C"],
                quiz: ["#A6EFFF"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Latvia.png`),
            },
            Lithuania: {
              name: "Lithuania",
              capital: "Vilnius",
              population: "2,872,294",
              land: "65,300 km²",
              language: "Lithuanian",
              animal: "white stork",
              flagStyles: ["#fdb913", "#c1272d", "#006a44"],
              styles: {
                learn: ["#C6D83B"],
                quiz: ["#F4FFA2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Lithuania.png`),
            },
          },
        ],
        map: LearnNorthernEurope,
      },
      "central-europe": {
        title: "Central Europe",
        countries: [
          {
            France: {
              name: "France",
              capital: "Paris",
              styles: {
                learn: ["#8DAA5C"],
                quiz: ["#F4FFA2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/France.png`),
            },
            Belgium: {
              name: "Belgium",
              capital: "Brussels",
              styles: {
                learn: ["#18583E"],
                quiz: ["#FFA2A2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Belgium.png`),
            },
            Netherlands: {
              name: "Netherlands",
              capital: "Amsterdam",
              styles: {
                learn: ["#8DAA5C"],
                quiz: ["#A6EFFF"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Netherlands.png`),
            },
            Germany: {
              name: "Germany",
              capital: "Berlin",
              styles: {
                learn: ["#C6D83C"],
                quiz: ["#FFA2A2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Germany.png`),
            },
            Luxembourg: {
              name: "Luxembourg",
              capital: "Luxembourg",
              styles: {
                learn: ["#5B876C"],
                quiz: ["#A6EFFF"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Luxembourg.png`),
            },
            Switzerland: {
              name: "Switzerland",
              capital: "Bern",
              styles: {
                learn: ["#18583E"],
                quiz: ["#FFA2A2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Switzerland.png`),
            },
            Liechtenstein: {
              name: "Liechtenstein",
              capital: "Vaduz",
              styles: {
                learn: ["#5B876C"],
                quiz: ["#F4FFA2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Liechtenstein.png`),
            },
            Austria: {
              name: "Austria",
              capital: "Vienna",
              styles: {
                learn: ["#8DAA5C"],
                quiz: ["#A6EFFF"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Austria.png`),
            },
            Monaco: {
              name: "Monaco",
              capital: "Monte Carlo",
              styles: {
                learn: ["#18583E"],
                quiz: ["#FFA2A2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Monaco.png`),
            },
          },
        ],
        map: LearnCentralEurope,
      },
    },
  },
];
