const axios = require('axios')

const dothrakiInstance = axios.create({
  baseURL: 'http://api.funtranslations.com/translate/dothraki',
  timeout: 1000
})

const valyrianInstance = axios.create({
  baseURL: 'http://api.funtranslations.com/translate/valyrian',
  timeout: 1000
})

module.exports = {
  Dothraki: function(str){
    dothrakiInstance.post('/', {text: str})
    .then(res => res.data)
    .then(translationObject => translationObject.contents.translated)
  },
  Valyrian: function (str) {
    valyrianInstance.post('/', {text: str})
    .then(res => res.data)
    .then(translationObject => translationObject.contents.translated)
  }
}
