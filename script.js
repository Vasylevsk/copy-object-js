const obj = {
  name: "Alex",
  age: 33,
  marks: [10, 10, 10, 10, 9],
  adress: {
    country: "UA",
    city: "Dnipro",
    home: {
      adress1: 1,
      adress2: 2,
    },
  },
};
const copyObj = copy(obj);
copyObj.marks = [10, 20];
copyObj.adress.city = "Odessa";
copyObj.name = "John";
copyObj.adress.home.adress1 = 3;
console.log(copyObj);
console.log(obj);

function copy(object) {
  let newObj = {};
  for (let key in object) {
    if (Array.isArray(object[key])) {
      newObj[key] = object[key];
    } else if (typeof object[key] === "object") newObj[key] = copy(object[key]);
    else newObj[key] = object[key];
  }
  return newObj;
}
