const weathersettings = {
	async: true,
	crossDomain: true,
	url: 'https://openweather43.p.rapidapi.com/forecast?appid=bc6c763ec8bc0774426721e5a4ca2350&q=london&units=metric',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '80d98f806bmsh0df6322de0d3074p199f71jsn1470cabb095b',
		'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
	}
};

function getweather() {
    var city = document.getElementById("city").value;
    var weather;
       weathersettings.url = "https://openweather43.p.rapidapi.com/forecast?appid=bc6c763ec8bc0774426721e5a4ca2350&q="+city+"&units=metric"
       $.ajax(weathersettings).done(function (response) {
            weather = JSON.stringify(response,null,'\t');
            document.getElementById("weatherlist").innerHTML= "weatherlist:\n" + weather;
    });
}
