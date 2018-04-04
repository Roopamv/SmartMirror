var self = this;
moment.locale("en");

			$.getJSON("http://api.openweathermap.org/data/2.5/weather?id=1253367&APPID=<API ID>",function(json){            
		document.getElementById("weather").innerHTML = "City :" + json.name;
		document.getElementById("weather").innerHTML += "<br />";
		document.getElementById("weather").innerHTML += "Weather :" + json.weather[0].main;
		document.getElementById("weather").innerHTML += "<br />";
		document.getElementById("weather").innerHTML += "Weather Description:" + json.weather[0].description;
		document.getElementById("weather").innerHTML += "<br />";
		document.getElementById("weather").innerHTML += "Temperature:" + (json.main.temp - 273) + " Celcius";
		document.getElementById("weather").innerHTML += "<br />";		
		document.getElementById("weather").innerHTML += "Pressure:" + json.main.pressure;
		document.getElementById("weather").innerHTML += "<br />";		
		document.getElementById("weather").innerHTML += "Humidity:" + json.main.humidity;
		document.getElementById("weather").innerHTML += "<br />";				
		document.getElementById("weather").innerHTML += "Wind Speed:" + json.wind.speed;
		document.getElementById("weather").innerHTML += "<br />";
});

setInterval(function(){
			$.getJSON("http://api.openweathermap.org/data/2.5/weather?id=1253367&APPID=<API ID>",function(json){            
		document.getElementById("weather").innerHTML = "City :" + json.name;
		document.getElementById("weather").innerHTML += "<br />";
		document.getElementById("weather").innerHTML += "Weather :" + json.weather[0].main;
		document.getElementById("weather").innerHTML += "<br />";
		document.getElementById("weather").innerHTML += "Weather Description:" + json.weather[0].description;
		document.getElementById("weather").innerHTML += "<br />";
		document.getElementById("weather").innerHTML += "Temperature:" + (json.main.temp - 273) + " Celcius";
		document.getElementById("weather").innerHTML += "<br />";		
		document.getElementById("weather").innerHTML += "Pressure:" + json.main.pressure;
		document.getElementById("weather").innerHTML += "<br />";		
		document.getElementById("weather").innerHTML += "Humidity:" + json.main.humidity;
		document.getElementById("weather").innerHTML += "<br />";				
		document.getElementById("weather").innerHTML += "Wind Speed:" + json.wind.speed;
		document.getElementById("weather").innerHTML += "<br />";
        });
		},10*60*1000);
