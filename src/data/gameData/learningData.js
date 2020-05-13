import LearnNorthernEurope from "../mapData/Continents/Europe/Learn/LearnNorthernEurope";
import LearnWesternEurope from "../mapData/Continents/Europe/Learn/LearnWesternEurope";
import LearnEasternEurope from "../mapData/Continents/Europe/Learn/LearnEasternEurope";

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
              altName: {
                country: [],
                capital: ["reykjavik"]
              },
              population: "364,000",
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
              population: "4,904,000",
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
              altName: {
                country: ["uk"],
                capital: []
              },
              population: "65,650,000",
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
              population: "5,368,000",
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
              population: "5,603,000",
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
              population: "5,518,000",
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
              population: "10,230,000",
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
              population: "1,328,000",
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
              population: "1,920,000",
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
              population: "2,794,000",
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
      "western-europe": {
        title: "Western Europe",
        countries: [
          {
            France: {
              name: "France",
              capital: "Paris",
              population: "66,990,000",
              land: "643,801 km²",
              language: "French",
              animal: "Gallic Rooster",
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
              population: "11,460,000",
              land: "30,689 km²",
              language: "Dutch, German, French",
              animal: "Lion",
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
              altName: {
                country: ["holland"],
                capital: []
              },
              population: "17,280,000",
              land: "41,543 km²",
              language: "Dutch",
              animal: "Asiatic Lion",
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
              population: "83,020,000",
              land: "357,386 km²",
              language: "Germany",
              animal: "black eagle",
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
              population: "613,894",
              land: "2,586 km²",
              language: "Luxembourgish, German, French",
              animal: "lion",
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
              population: "8,570,000",
              land: "41,285 km²",
              language: "German, Romansh, French, Italian",
              animal: "St. Bernhard dog",
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
              population: "38,557",
              land: "160 km²",
              language: "German",
              animal: "kestrel",
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
              population: "8,859,000",
              land: "83,879 km²",
              language: "German",
              animal: "Eagle",
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
              altName: {
                country: [],
                capital: ["monte-carlo"]
              },
              population: "38,682",
              land: "2.02 km²",
              language: "French",
              animal: "hedgehog",
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
        map: LearnWesternEurope,
      },
      "eastern-europe": {
        title: "Eastern Europe",
        countries: [
          {
            Ukraine: {
              name: "Ukraine",
              capital: "Kyiv",
              altName: {
                country: [],
                capital: ["kiev"]
              },
              styles: {
                learn: ["#18583B"],
                quiz: ["#F4FFA2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Ukraine.png`),
            },
            Bulgaria: {
              name: "Bulgaria",
              capital: "Sofia",
              styles: {
                learn: ["#18583B"],
                quiz: ["#A4FFA3"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Bulgaria.png`),
            },
            Moldova: {
              name: "Moldova",
              capital: "Chisinau",
              styles: {
                learn: ["#8DAA5C"],
                quiz: ["#A6EFFF"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Moldova.png`),
            },
            Romania: {
              name: "Romania",
              capital: "Bucharest",
              styles: {
                learn: ["#C6D83C"],
                quiz: ["#FFA2A2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Romania.png`),
            },
            Hungary: {
              name: "Hungary",
              capital: "Budapest",
              styles: {
                learn: ["#5B876C"],
                quiz: ["#A6EFFF"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Hungary.png`),
            },
            Russia: {
              name: "Russia",
              capital: "Moscow",
              styles: {
                learn: ["#C6D83C"],
                quiz: ["#FFA2A2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Russia.png`),
            },
            Belarus: {
              name: "Belarus",
              capital: "Minsk",
              styles: {
                learn: ["#5B876C"],
                quiz: ["#A4FFA3"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Belarus.png`),
            },
            Poland: {
              name: "Poland",
              capital: "Warsaw",
              styles: {
                learn: ["#8DAA5C"],
                quiz: ["#A6EFFF"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Poland.png`),
            },
            Czechia: {
              name: "Czechia",
              capital: "Prague",
              altName: {
                country: ["czech republic", "czech republic"],
                capital: []
              },
              styles: {
                learn: ["#18583E"],
                quiz: ["#F4FFA2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Czechia.png`),
            },
            Slovakia: {
              name: "Slovakia",
              capital: "Bratislava",
              styles: {
                learn: ["#C6D83C"],
                quiz: ["#FFA2A2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Slovakia.png`),
            },
            Georgia: {
              name: "Georgia",
              capital: "Tbilisi",
              styles: {
                learn: ["#8DAA5C"],
                quiz: ["#A6EFFF"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Georgia.png`),
            },
            Azerbaijan: {
              name: "Azerbaijan",
              capital: "Baku",
              styles: {
                learn: ["#18583E"],
                quiz: ["#F4FFA2"],
              },
              class: {
                learn: ["country"],
                quiz: ["country-Q"],
              },
              flag: require(`../../assets/images/flags/continents/europe/Countries/Azerbaijan.png`),
            },
          },
        ],
        map: LearnEasternEurope,
      },
    },
  },
];
