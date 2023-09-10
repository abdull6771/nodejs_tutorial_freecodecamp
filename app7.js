const _ = require("lodash")

const myarray = [1,[2,[3,[4]]]]

const flat = _.flatMapDeep(myarray)
console.log(flat)