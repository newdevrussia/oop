const { o3: obj } = require('./protochain.js');
const arr = [];
push(obj);
function push(obj) {
  const objPrototype = Reflect.getPrototypeOf(obj);
  if (!objPrototype) {
      return;
  }
  arr.push(objPrototype.name);
  push(objPrototype);
}
console.log(arr);