var APIKey = "8adb2e0c088db12ee75771e62fd38ac2";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "," + stateName + "&appid=" + APIKey;
var cityName = $("input").text()
var stateName = $("select#inputState").val()
var submit = $(".btn")

$(submit).on("click", function(e){
    alert("clicked")
    e.preventDefault();
    console.log(cityName)
    console.log(stateName)


    // $.ajax({
    // url: queryURL,
    // method: "GET"
    // })
    // // We store all of the retrieved data inside of an object called "response"
    // .then(function(response) {
    
    //   // Log the queryURL
    //   console.log(queryURL);
    
    //   // Log the resulting object
    //   console.log(response);
    
      // Transfer content to HTML
    //   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    //   $(".wind").text("Wind Speed: " + response.wind.speed);
    //   $(".humidity").text("Humidity: " + response.main.humidity);
      
    //   // Convert the temp to fahrenheit
    //   var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    
    //   // add temp content to html
    //   $(".temp").text("Temperature (K) " + response.main.temp);
    //   $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
    
    //   // Log the data in the console as well
    //   console.log("Wind Speed: " + response.wind.speed);
    //   console.log("Humidity: " + response.main.humidity);
    //   console.log("Temperature (F): " + tempF);
    // });
});
// Here we run our AJAX call to the OpenWeatherMap API