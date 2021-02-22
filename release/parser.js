const https = require('https');

//Begin GET request
https.get('https://api.ampifymusic.com/packs', (resp) => {
  let data = '';
  var genres = [];
  let sorted = {};

  //Wait for data chunks to be received
  resp.on('data', (chunk) => {
    data += chunk;
  });

  //MARK: -- Data received in full. Begin processing
  resp.on('end', () => {
    //Parse JSON data as d
    var d = JSON.parse(data).packs;

    //Iterate through keys of JSON response
    Object.keys(d).forEach(function(key) {
        //Retrieve genre, g, of each track
        let g = (d[key].genres).toString();
    
            //If genre does not already exist
            if (!genres.includes(g)) {
                //Add current track to genre in set
                var trackArray = []
                trackArray.push(d[key])
                sorted[g] = trackArray

                //Add to genre array
                genres.push(g);
            } 
            else { //If genre already exists
                for (i = 0; i < genres.length; i++) {
                  //Locate position from genre array
                    if (g == genres[i]) {
                      //Cross reference indices from genre array to main set
                      //Add current track to genre in set
                        var current = sorted[g];
                        current.push(d[key])
                        sorted[g] = current;
                    }
                }
            }
      })
      //Outputs
      console.log("---------------------------------------------------------------------")
      console.log("Output: Parsed JSON Response, sorted into a dictionary based on genre")
      console.log(sorted)
      console.log("---------------------------------------------------------------------")

      console.log("Output: Array of all genres in the pack")
      console.log(genres)
      console.log("---------------------------------------------------------------------")

      console.log("Output: All packs of genre: hip-hop")
      console.log(sorted['hip-hop'])
      console.log("---------------------------------------------------------------------")
  });


//If error thrown
}).on("error", (err) => {
  //Return error message in console for debugging
  console.log("Error: " + err.message);
});