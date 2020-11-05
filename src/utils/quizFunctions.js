import _ from "lodash";

export const assignColour = (theme, data) => {
  let newObj = {};
  for (const key in data) {
    newObj[key] = {
      ...data[key],
      colour: theme[Math.floor(Math.random() * theme.length)],
    };
  }
  return newObj;
};

export const completeGuess = (place, attempts, data) => {
  let newObj = Object.assign(data, {});
  newObj[place] = {
    ...newObj[place],
    finished: attempts,
  };
  return newObj;
};

export const shuffleArray = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

export const formatList = (obj) => {
  let tempArr = [];
  for (let [key, _] of Object.entries(obj)) tempArr.push(key);
  return shuffleArray(tempArr);
};

export const manageClass = (element, classname, data, add = true) => {
  if (add && data[element] && !data[element].class.includes(classname)) {
    data[element].class.push(classname);
  }
  return data;
};

export const getFlag = (continent, mode, name) => {
  var imgPath = null;
  try {
    imgPath = require(`../assets/images/flags/continents/${continent}/${mode}/${name}.png`);
  } catch (e) {
    imgPath = null;
  }
  return imgPath;
};

export function sortDistance(country, data) {
  if (!data) return;
  let distances = [];
  const findCountry = data[country];
  if (!findCountry) return;
  for (var c of Object.values(data)) {
    if (c === findCountry || !c || !c.latlng) continue;
    distances.push({
      dist: Math.sqrt(
        Math.pow(69.1 * (c.latlng[0] - findCountry.latlng[0]), 2) +
          Math.pow(
            69.1 *
              (c.latlng[1] -
                findCountry.latlng[1] * Math.cos(c.latlng[1] / 57.3)),
            2
          )
      ),
      place: c,
    });
  }
  return distances.sort((a, b) => a.dist - b.dist);
}

export const getClose = (country, data) => {
  if (!country || !data || !data[country] || !data[country].latlng) return [];
  const list = sortDistance(country, data);
  console.log(country, list, data);

  const questions = [];
  let rngs = [];
  for (var i = 0; i < 2; i++) {
    const rng = 2 + Math.floor(Math.random() * 5);
    if (rngs.includes(rng)) {
      i += 1;
      continue;
    }
    rngs.push(rng);
  }
  console.log(rngs);
  questions[0] =
    list[Math.floor(Math.random() * 2)].place.id ||
    list[Math.floor(Math.random() * 2)].place.name;
  questions[1] = list[rngs[0]].place.id || list[rngs[0]].place.name;
  // questions[2] = list[rngs[1]].place.name;
  questions[2] = country;
  let final = _.shuffle(questions);
  return final;
};

export function sortedData(country, data) {
  let distances = [];
  const findCountry = data[country];
  if (!findCountry || !findCountry.latlng) return;
  for (var c of Object.values(data)) {
    if (c === findCountry || !c || !c.latlng) continue;
    distances.push({
      dist: Math.sqrt(
        Math.pow(69.1 * (c.latlng[0] - findCountry.latlng[0]), 2) +
          Math.pow(
            69.1 *
              (c.latlng[1] -
                findCountry.latlng[1] * Math.cos(c.latlng[1] / 57.3)),
            2
          )
      ),
      place: c,
    });
  }
  let obj = {};
  let obj2 = {};
  const countryDist = findCountry;
  const distList = distances
    .map((d) => ({
      name: d.place.name,
      dist: d.dist,
    }))
    .sort((a, b) => a.dist - b.dist);
  console.log("TESTING---", countryDist, distList);

  distances
    .sort((a, b) => a.dist - b.dist)
    .forEach((c, i) => {
      const scoreThing = i + (1 / distances.length) * 100;
      data[c.place.id || c.place.name]["score"] = scoreThing;
      obj[c.place.id || c.place.name] = {
        place: c.place.id || c.place.name,
        dist: c.dist,
        score: scoreThing,
      };
    });
  console.log(distances);
  return {
    data,
    top: distances[distances.length - 1].dist,
    mid: distances[Math.floor(distances.length - distances.length / 2)].dist,
    low: distances[0].dist,
    obj,
    other: {
      dists: distList,
      midPoint: distList[Math.floor(distList.length - distList.length / 2)],
    },
  };
}
