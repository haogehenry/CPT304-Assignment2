const Hotelsetting = {
	async: true,
    	crossDomain: true,
    	url: 'https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest?string=london&get_hotels=true',
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': '80d98f806bmsh0df6322de0d3074p199f71jsn1470cabb095b',
    		'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    	}
    };
function getHotel() {
    var city = document.getElementById("city").value;
    var hotelist;
    Hotelsetting.url = "https://priceline-com-provider.p.rapidapi.com/v2/hotels/autoSuggest?string="+city+"&get_hotels=true";

    $.ajax(Hotelsetting).done(function (response) {
        hotelist = JSON.stringify(response,null,'\t');
    	document.getElementById("hotellist").innerHTML= "hotelist:\n" + hotelist;
    });
}
