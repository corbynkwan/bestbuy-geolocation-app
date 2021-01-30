
const axios = require('axios');

module.exports = async() => {
    Map.prototype.getOrElse = function(key, value) {
        return this.has(key) ? this.get(key) : value
      }
      let neighbourhoodStationsMap = new Map()
      
    let skytrain_names = [
        "29th Avenue",
        "Broadway–City Hall",
        "Burrard",
        "Commercial–Broadway",
        "Granville",
        "Joyce–Collingwood",
        "King Edward",
        "Langara–49th Avenue",
        "Main Street–Science World",
        "Marine Drive",
        "Nanaimo",
        "Oakridge–41st Avenue",
        "Olympic Village", "Rupert","Stadium–Chinatown","Vancouver City Centre","VCC–Clark","Waterfront","Yaletown–Roundhouse"
    ]
  let numberOfRestaurants = 0;
  let averageRating = 0; 
  for (let skytrain_name of skytrain_names) { 
    await axios({
        method: 'get',
        url: `https://nominatim.openstreetmap.org/search?q=vancouver+${skytrain_name}+skytrain&format=json&polygon_geojson=1&addressdetails=1`
      })
        .then(function (response) {
            console.log(response)
            if(response.data === undefined || response.data.length == 0)  { 
                return;
            }
          try{                                                              
          let railway = response.data.address.railway
          let cityDistrict = response.data.address.city_district
          neighbourhoodStationsMap.set(cityDistrict,neighbourhoodStationsMap.getOrElse(cityDistrict,0) + 1)    
          } catch(error) { 
              console.log("is null")
          }                             
                                                                                                       

        });


  }
  console.log(neighbourhoodStationsMap)
  return neighbourhoodStationsMap

};
