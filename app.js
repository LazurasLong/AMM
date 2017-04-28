const axios = require('axios')

// These code snippets use an open-source library. http://unirest.io/nodejs
// unirest.post("https://elvish.p.mashape.com/quenya.json?text=I+am+Arwen+-+I've+come+to+help+you.+Hear+my+voice...+Come+back+to+the+light.")
// .header("X-Mashape-Key", "o1eZbSEX8jmshsmmEDH7ZMkRLoO9p1Rbl0ljsnCRGCzfBbcqJj")
// .header("Content-Type", "application/x-www-form-urlencoded")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
let callCounts = {
  dothraki: 0,
  elvish: 0,
  yodaish: 0
}

const dothrakiInstance = axios.create({
  baseURL: 'http://api.funtranslations.com/translate/dothraki',
  timeout: 1000
})

const valyrianInstance = axios.create({
  baseURL: 'http://api.funtranslations.com/translate/valyrian',
  timeout: 1000
})

dothrakiInstance.post('/', {text: 'This is another test.'})
.then(res => res.data)
.then(translation => console.log('translation', translation))
.catch(console.error)

valyrianInstance.post('/', {text: 'This is another test.'})
.then(res => res.data)
.then(translation => console.log('translation', translation))
.catch(console.error)
