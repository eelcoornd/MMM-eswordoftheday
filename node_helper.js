const NodeHelper = require("node_helper")
const axios = require('axios')
const cheerio = require('cheerio')

module.exports = NodeHelper.create({
  socketNotificationReceived: function(notification, payload) {
    if (notification === "MMM-eswordoftheday-GET_WORD") {
      const url = "https://www.spanishdict.com/wordoftheday";

      axios.get(url).then(({ data }) => {
        const $ = cheerio.load(data);
  
        const container = $(".cN01C0v6");

        const translationData = [];

        for(let i = 0; i < container.length; i++) {
          const currentContainer = container[i];
          const container1 = $(".S59euzHw")[i];
          const container2 = $(".al0K82xM")[i];

          // Get Spanish Word
          const word = $(currentContainer).find("h3");
          // Get English Translation
          const translation = word.next();
          
          // Get Spanish Examples
          const spanishExample = $(container1);

          // Get English Translation
          const englishExample = $(container2);

          translationData.push({
            "word": word.text(),
            "translation": translation.text(),
            "examples": {
              "spanish": spanishExample.text(),
              "english": englishExample.text()
            }
          })
        }
        // Send Data
        this.sendSocketNotification("MMM-eswordoftheday-RETURN_WORD", translationData)
      })
    }
  }
})
