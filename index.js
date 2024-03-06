const count = require('text-count');

function starxminth() {
  const text = "S T A R X M I N T H"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = Starxminth
