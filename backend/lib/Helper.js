class Helper {
     makeid() {
        let text = "";
        let possible = "55153a8014829a865bbf700d";

        for (let i = 0; i < 12; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(text);
        return text;
    }
}

module.exports = Helper;