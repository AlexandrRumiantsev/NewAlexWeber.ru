class Helper {
     makeid() {
        let text = "";
        let possible = "55153a8014829a865bbf700d";

        for (let i = 0; i < 12; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(text);
        return text;
    }
    decodeBase64Image(dataString) {
          var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
            response = {};
        
          if (matches.length !== 3) {
            return new Error('Invalid input string');
          }
        
          response.type = matches[1];
          response.data = new Buffer(matches[2], 'base64');
        
          return response;
    }
}

module.exports = Helper;