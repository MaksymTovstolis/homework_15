let object = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } }

function convert(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      for (let key2 in obj[key]) {
        newObj[key2] = obj[key][key2];
      } 
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj
}

console.log(convert(object));

