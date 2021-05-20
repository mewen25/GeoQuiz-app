import {
  AfricaCountriesMap,
  AfricaCountriesData,
  regions as africaRegions,
} from "../mapData/Africa";
import {
  AsiaCountriesMap,
  AsiaCountriesData,
  regions as asiaRegions,
} from "../mapData/Asia";
import {
  EuropeCountriesMap,
  EuropeCountriesData,
  regions as europeRegions,
} from "../mapData/Europe";
import {
  NACountriesMap,
  NACountriesData,
  // regions as NARegions,
  StatesMap,
  StatesData,
} from "../mapData/North-America";
import {
  OceaniaCountriesMap,
  OceaniaCountriesData,
  // regions as oceaniaRegions,
} from "../mapData/Oceania";
import {
  SACountriesMap,
  SACountriesData,
  // regions as SARegions,
} from "../mapData/South-America";

const two = 120;
const five = 300;

export default {
  europe: {
    id: 1,
    continent: "Europe",
    continentId: "europe",
    regions: europeRegions,
    mode: {
      countries: {
        title: "Countries",
        quizType: "countries",
        time: two,
        findAmount: 49,
        map: EuropeCountriesMap,
        data: EuropeCountriesData,
      },
      "countries-multiple-choice": {
        title: "Countries (Multiple Choice)",
        quizType: "countries",
        time: two,
        findAmount: 49,
        map: EuropeCountriesMap,
        data: EuropeCountriesData,
        layout: "multipleChoice",
      },
      // "countries-hinted": {
      //   title: "Countries (Hinted)",
      //   quizType: "countries",
      //   time: two,
      //   findAmount: 49,
      //   map: EuropeCountries,
      //   data: EuropeData,
      //   layout: "hinted",
      // },
      // capitals: {
      //   title: "Capitals",
      //   time: five,
      //   findAmount: 49,
      //   map: EuropeCapitalsMap,
      //   data: EuropeCapitalsData,
      // },
    },
  },
  "north-america": {
    id: 2,
    continent: "North America",
    continentId: "north-america",
    // regions: NARegions,
    mode: {
      countries: {
        title: "Countries",
        quizType: "countries",
        time: two,
        findAmount: 23,
        map: NACountriesMap,
        data: NACountriesData,
      },
      "countries-multiple-choice": {
        title: "Countries (Multiple Choice)",
        quizType: "countries",
        time: two,
        findAmount: 23,
        map: NACountriesMap,
        data: NACountriesData,
        layout: "multipleChoice",
      },
      // capitals: {
      //   title: "Capitals",
      //   time: five,
      //   findAmount: 23,
      //   map: NACapitalsMap,
      //   data: NACapitalsData,
      // },
      states: {
        title: "US States",
        quizType: "states",
        time: five,
        findAmount: 50,
        map: StatesMap,
        data: StatesData,
      },
      "states-multiple-choice": {
        title: "US States (Multiple Choice)",
        quizType: "states",
        time: five,
        findAmount: 50,
        map: StatesMap,
        data: StatesData,
        layout: "multipleChoice",
      },
      // "state-capitals": {
      //   title: "US State Capitals",
      //   time: five,
      //   findAmount: 50,
      //   map: StateCapitalsMap,
      //   data: StateCapitalsData,
      // },
    },
  },
  africa: {
    id: 3,
    continent: "Africa",
    continentId: "africa",
    regions: africaRegions,
    mode: {
      countries: {
        title: "Countries",
        quizType: "countries",
        time: two,
        findAmount: 55,
        map: AfricaCountriesMap,
        data: AfricaCountriesData,
      },
      "countries-multiple-choice": {
        title: "Countries (Multiple Choice)",
        quizType: "countries",
        time: two,
        findAmount: 55,
        map: AfricaCountriesMap,
        data: AfricaCountriesData,
        layout: "multipleChoice",
      },
      // capitals: {
      //   title: "Capitals",
      //   time: five,
      //   findAmount: 55,
      //   map: AfricaCapitalsMap,
      //   data: AfricaCapitalsData,
      // },
    },
  },
  asia: {
    id: 4,
    continent: "Asia",
    continentId: "asia",
    regions: asiaRegions,
    mode: {
      countries: {
        title: "Countries",
        quizType: "countries",
        time: two,
        findAmount: 48,
        map: AsiaCountriesMap,
        data: AsiaCountriesData,
      },
      "countries-multiple-choice": {
        title: "Countries (Multiple Choice)",
        quizType: "countries",
        time: two,
        findAmount: 48,
        map: AsiaCountriesMap,
        data: AsiaCountriesData,
        layout: "multipleChoice",
      },
      // capitals: {
      //   title: "Capitals",
      //   time: five,
      //   findAmount: 48,
      //   map: AsiaCapitalsMap,
      //   data: AsiaCapitalsData,
      // },
    },
  },
  "south-america": {
    id: 5,
    continent: "South America",
    continentId: "south-america",
    // regions: SARegions,
    mode: {
      countries: {
        title: "Countries",
        quizType: "countries",
        time: two,
        findAmount: 13,
        map: SACountriesMap,
        data: SACountriesData,
      },
      // capitals: {
      //   title: "Capitals",
      //   time: five,
      //   findAmount: 13,
      //   map: SACapitalsMap,
      //   data: SACapitalsData,
      // },
    },
  },
  oceania: {
    id: 6,
    continent: "Oceania",
    continentId: "oceania",
    // regions: oceaniaRegions,
    mode: {
      countries: {
        title: "Countries",
        quizType: "countries",
        time: two,
        findAmount: 14,
        map: OceaniaCountriesMap,
        data: OceaniaCountriesData,
      },
      // capitals: {
      //   title: "Capitals",
      //   time: five,
      //   findAmount: 14,
      //   map: OceaniaCapitalsMap,
      //   data: OceaniaCapitalsData,
      // },
    },
  },
};
