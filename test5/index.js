const _ = require('lodash');


const objects = [1, [2, [3, [4]]]]
const objects2 = _.flatMapDeep(objects)

console.log(objects2)