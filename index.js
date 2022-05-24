class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string){
    const wordArray = string.split(" ")
    const capitalEachWord = []
    wordArray.forEach(word =>{
        switch (word){
          case 'the':
          case 'a':
          case 'an':
          case 'but':
          case 'of':
          case 'and':
          case 'for':
          case 'at':
          case 'by':
          case 'from':
              return capitalEachWord.push(word);
          default:
              capitalEachWord.push(word.charAt(0).toUpperCase() + word.slice(1))
        }
    })
    capitalEachWord[0] = capitalEachWord[0].charAt(0).toUpperCase() + capitalEachWord[0].slice(1)
    return capitalEachWord.join(" ")
  }
}