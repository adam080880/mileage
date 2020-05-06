const mileage = require('./src/mileage')
const mileageFix = require('./src/mileage-fix')

console.log(mileage("10:12:21", "12:00:00") + " KM")
console.log(mileageFix("10:12:21", "12:00:00") + " KM")

// Keduanya bisa, sama-sama jalan, cuman buat readable, lebih baik yang mileageFix hehe (Reference: Code Mas Irul)