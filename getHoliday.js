const Holidaysettings = {
	async: true,
	crossDomain: true,
	url: 'https://public-holiday.p.rapidapi.com/2019/US',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '80d98f806bmsh0df6322de0d3074p199f71jsn1470cabb095b',
		'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
	}
};

function getholiday() {
    var year = document.getElementById("year").value;
    var countrycode = document.getElementById("Countrycode").value;
    var holiday;
    Holidaysettings.url = "https://public-holiday.p.rapidapi.com/"+ year + "/" + countrycode;

    $.ajax(Holidaysettings).done(function (response) {
    	holiday = JSON.stringify(response,null,'\t');
    	document.getElementById("holidaylist").innerHTML= "holidaylist:\n" + holiday;
    });
}