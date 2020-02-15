import EuropeMap from "../../data/mapData/Continents/Europe/Europe";
import EuropeCapitalsMap from "../../data/mapData/Continents/Europe/Capitals/Europe-Capitals";
import AsiaMap from "../../data/mapData/Continents/Asia/Asia";
import NAMap from "../../data/mapData/Continents/North-America/NorthAmerica";
import SAMap from "../../data/mapData/Continents/South-America/SouthAmerica";
import AfricaMap from "../../data/mapData/Continents/Africa/Africa";
import OceaniaMap from "../../data/mapData/Continents/Oceania/Oceania";
import StatesMap from "../../data/mapData/Other/States/US-States";

import EuropeData from "../../data/mapData/Continents/Europe/EuropeData";
import EuropeCapitalsData from "../../data/mapData/Continents/Europe/Capitals/Europe-Capitals-Data";
import AsiaData from "../../data/mapData/Continents/Asia/AsiaData";
import NorthAmericaData from "../../data/mapData/Continents/North-America/NorthAmericaData";
import SouthAmericaData from "../../data/mapData/Continents/South-America/SouthAmericaData";
import AfricaData from "../../data/mapData/Continents/Africa/AfricaData";
import OceaniaData from "../../data/mapData/Continents/Oceania/OceaniaData";
import StatesData from "../../data/mapData/Other/States/US-StatesData";

export default {
  europe: {
    id: 1,
    continent: "Europe",
    continentId: "europe",
    mode: {
      countries: {
        title: "Countries",
        time: "02:00",
        findAmount: 49,
        map: EuropeMap,
        data: EuropeData
      },
      capitals: {
        title: "Capitals",
        time: "05:00",
        findAmount: 49,
        map: EuropeCapitalsMap,
        data: EuropeCapitalsData
      }
    }
  },
  "north-america": {
    id: 2,
    continent: "North America",
    continentId: "north-america",
    mode: {
      countries: {
        title: "Countries",
        time: "02:00",
        findAmount: 23,
        map: NAMap,
        data: NorthAmericaData
      },
      capitals: {
        title: "Capitals",
        time: "05:00",
        findAmount: 23,
        map: NAMap,
        data: NorthAmericaData
      },
      states: {
        title: "US States",
        time: "5:00",
        findAmount: 50,
        map: StatesMap,
        data: StatesData
      }
    }
  },
  africa: {
    id: 3,
    continent: "Africa",
    continentId: "africa",
    mode: {
      countries: {
        title: "Countries",
        time: "02:00",
        findAmount: 55,
        map: AfricaMap,
        data: AfricaData
      },
      capitals: {
        title: "Capitals",
        time: "05:00",
        findAmount: 55,
        map: AfricaMap,
        data: AfricaData
      }
    }
  },
  asia: {
    id: 4,
    continent: "Asia",
    continentId: "asia",
    mode: {
      countries: {
        title: "Countries",
        time: "02:00",
        findAmount: 48,
        map: AsiaMap,
        data: AsiaData
      },
      capitals: {
        title: "Capitals",
        time: "05:00",
        findAmount: 48,
        map: AsiaMap,
        data: AsiaData
      }
    }
  },
  "south-america": {
    id: 5,
    continent: "South America",
    continentId: "south-america",
    mode: {
      countries: {
        title: "Countries",
        time: "02:00",
        findAmount: 13,
        map: SAMap,
        data: SouthAmericaData
      },
      capitals: {
        title: "Capitals",
        time: "05:00",
        findAmount: 13,
        map: SAMap,
        data: SouthAmericaData
      }
    }
  },
  oceania: {
    id: 6,
    continent: "Oceania",
    continentId: "oceania",
    mode: {
      countries: {
        title: "Countries",
        time: "02:00",
        findAmount: 14,
        map: OceaniaMap,
        data: OceaniaData
      },
      capitals: {
        title: "Capitals",
        time: "05:00",
        findAmount: 14,
        map: OceaniaMap,
        data: OceaniaData
      }
    }
  }
};
