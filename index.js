const axios = require('axios')

const dothrakiInstance = axios.create({
  baseURL: 'http://api.funtranslations.com/translate/dothraki',
  timeout: 10000
})

const valyrianInstance = axios.create({
  baseURL: 'http://api.funtranslations.com/translate/valyrian',
  timeout: 10000
})

const vulcanInstance = axios.create({
  baseURL: 'http://api.funtranslations.com/translate/vulcan',
  timeout: 10000
})

const klingonInstance = axios.create({
  baseURL: 'http://api.funtranslations.com/translate/klingon',
  timeout: 10000
})

//TODO implement the rest of these languags
const languages = ['yoda',
 'minion',
 'piglatin',
 'dothraki', //done
'valyrian', //done
'sindarin',
'sith',
'mandalorian',
'shakespeare',
'vulcan', //done
'klingon', //done
'jive',
'cockney',
'morse']

module.exports = {
  Dothraki: function(str){
    return dothrakiInstance.post('/', {text: str})
    .then(res => res.data)
    .then(translationObject =>  translationObject.contents.translated)
    .catch(err => console.error(err))
  },
  Valyrian: function (str) {
    return valyrianInstance.post('/', {text: str})
    .then(res => res.data)
    .then(translationObject => translationObject.contents.translated)
    .catch(err => console.error(err))
  },
  Vulcan: function (str) {
    return vulcanInstance.post('/', {text: str})
    .then(res => res.data)
    .then(translationObject => translationObject.contents.translated)
    .catch(err => console.error(err))
  },
  klingon: function(str){
    return klingonInstance.post('/', {text: str})
    .then(res => res.data)
    .then(translationObject => translationObject.contents.translated)
    .catch(err => console.error(err))
  }
}
