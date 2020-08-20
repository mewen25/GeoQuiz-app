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

export const completeGuess = (place, data) => {
  const { attempts } = place;
  let newObj = Object.assign(data, {});
  for (const key in data) {
    newObj[key] = {
      ...data[key],
      finished: attempts,
    };
  }
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
