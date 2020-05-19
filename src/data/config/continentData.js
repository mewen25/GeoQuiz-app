import EuropeCountries from "../mapData/Continents/Europe/EuropeCountries";
import EuropeData from "../gameData/QuizData/europeData";
import AsiaCountries from "../mapData/Continents/Asia/AsiaCountries";
import AsiaData from "../gameData/QuizData/asiaData";
import SouthAmericaCountries from "../mapData/Continents/South-America/SouthAmericaCountries";
import SAData from "../gameData/QuizData/southAmericaData";
import AfricaCountries from "../mapData/Continents/Africa/AfricaCountries";
import AfricaData from "../gameData/QuizData/africaData";

//import EuropeMap from "../../data/mapData/Continents/Europe/Europe";
import EuropeCapitalsMap from "../../data/mapData/Continents/Europe/Capitals/Europe-Capitals";

import AsiaCapitalsMap from "../../data/mapData/Continents/Asia/Capitals/AsiaCapitalsMap";
import NAMap from "../../data/mapData/Continents/North-America/NorthAmerica";
import NACapitalsMap from "../../data/mapData/Continents/North-America/Capitals/NACapitals";
import SACapitalsMap from "../../data/mapData/Continents/South-America/Capitals/SACapitalsMap";

import AfricaCapitalsMap from "../../data/mapData/Continents/Africa/Capitals/AfricaCapitalsMap";
import OceaniaMap from "../../data/mapData/Continents/Oceania/Oceania";
import OceaniaCapitalsMap from "../../data/mapData/Continents/Oceania/Capitals/OceaniaCapitalsMap";
import StatesMap from "../../data/mapData/Other/States/US-States";
import StateCapitalsMap from "../../data/mapData/Other/States/state-capitals/US-State-Capitals";

//import EuropeData from "../../data/mapData/Continents/Europe/EuropeData";
import EuropeCapitalsData from "../../data/mapData/Continents/Europe/Capitals/Europe-Capitals-Data";
import AsiaCapitalsData from "../../data/mapData/Continents/Asia/Capitals/AsiaCapitalsData";
import NorthAmericaData from "../../data/mapData/Continents/North-America/NorthAmericaData";
import NACapitalsData from "../../data/mapData/Continents/North-America/Capitals/NACapitalsData";
import SACapitalsData from "../../data/mapData/Continents/South-America/Capitals/SACapitalsData";
import AfricaCapitalsData from "../../data/mapData/Continents/Africa/Capitals/AfricaCapitalsData";
import OceaniaData from "../../data/mapData/Continents/Oceania/OceaniaData";
import OceaniaCapitalsData from "../../data/mapData/Continents/Oceania/Capitals/OceaniaCapitalsData";
import StatesData from "../../data/mapData/Other/States/US-StatesData";
import StateCapitalsData from "../../data/mapData/Other/States/state-capitals/US-State-CapitalsData";

const two = 120;
const five = 300;

export default {
  europe: {
    id: 1,
    continent: "Europe",
    continentId: "europe",
    mode: {
      countries: {
        title: "Countries",
        time: two,
        findAmount: 49,
        map: EuropeCountries,
        data: EuropeData,
      },
      capitals: {
        title: "Capitals",
        time: five,
        findAmount: 49,
        map: EuropeCapitalsMap,
        data: EuropeCapitalsData,
      },
    },
  },
  "north-america": {
    id: 2,
    continent: "North America",
    continentId: "north-america",
    mode: {
      countries: {
        title: "Countries",
        time: two,
        findAmount: 23,
        map: NAMap,
        data: NorthAmericaData,
      },
      capitals: {
        title: "Capitals",
        time: five,
        findAmount: 23,
        map: NACapitalsMap,
        data: NACapitalsData,
      },
      states: {
        title: "US States",
        time: five,
        findAmount: 50,
        map: StatesMap,
        data: StatesData,
      },
      "state-capitals": {
        title: "US State Capitals",
        time: five,
        findAmount: 50,
        map: StateCapitalsMap,
        data: StateCapitalsData,
      },
    },
  },
  africa: {
    id: 3,
    continent: "Africa",
    continentId: "africa",
    mode: {
      countries: {
        title: "Countries",
        time: two,
        findAmount: 55,
        map: AfricaCountries,
        data: AfricaData,
      },
      capitals: {
        title: "Capitals",
        time: five,
        findAmount: 55,
        map: AfricaCapitalsMap,
        data: AfricaCapitalsData,
      },
    },
  },
  asia: {
    id: 4,
    continent: "Asia",
    continentId: "asia",
    mode: {
      countries: {
        title: "Countries",
        time: two,
        findAmount: 48,
        map: AsiaCountries,
        data: AsiaData,
      },
      capitals: {
        title: "Capitals",
        time: five,
        findAmount: 48,
        map: AsiaCapitalsMap,
        data: AsiaCapitalsData,
      },
    },
  },
  "south-america": {
    id: 5,
    continent: "South America",
    continentId: "south-america",
    mode: {
      countries: {
        title: "Countries",
        time: two,
        findAmount: 13,
        map: SouthAmericaCountries,
        data: SAData,
      },
      capitals: {
        title: "Capitals",
        time: five,
        findAmount: 13,
        map: SACapitalsMap,
        data: SACapitalsData,
      },
    },
  },
  oceania: {
    id: 6,
    continent: "Oceania",
    continentId: "oceania",
    mode: {
      countries: {
        title: "Countries",
        time: two,
        findAmount: 14,
        map: OceaniaMap,
        data: OceaniaData,
      },
      capitals: {
        title: "Capitals",
        time: five,
        findAmount: 14,
        map: OceaniaCapitalsMap,
        data: OceaniaCapitalsData,
      },
    },
  },
};
