//Test for future implementation for our own filterrules infrastrucrue
//No more dependecy on other filterlist and thirdparties
//Just an alive ping as server can handle the traffic for a single ping

//GEO CDN Infrastrucrue test
ping_alive();
ping_geo();


function ping_alive() {
    var ping_url = "http://ping.filterrules.com/";
    var extension_id = chrome.i18n.getMessage("@@extension_id");
    var ping_url = ping_url + "?id=" + extension_id + "&e=0";

    var xhr_id = new XMLHttpRequest();
    xhr_id.open("GET", ping_url, true);
    xhr_id.onload = function() {}
    xhr_id.send();
}

function ping_geo() {
    var extension_id = chrome.i18n.getMessage("@@extension_id");

    var geo_domains = [
        "http://amsterdam.filterrules.com",
        "http://berlin.filterrules.com",
        "http://capetown.filterrules.com",
        "http://frankfurt.filterrules.com",
        "http://hongkong.filterrules.com",
        "http://amsterdam.filterrules.com",
        "http://london.filterrules.com",
        "http://losangeles.filterrules.com",
        "http://moscow.filterrules.com",
        "http://newyork.filterrules.com",
        "http://saopaulo.filterrules.com",
        "http://singapore.filterrules.com",
        "http://sydney.filterrules.com",
        "http://tokyo.filterrules.com"
    ];

    for (index = 0; index < geo_domains.length; index++) {
        var ping_url = geo_domains[index] + "/ping/" + "?id=" + extension_id + "&geo=0";
        pingCheck(ping_url);
    }

}

//Update: Change XMLHttpRequest to fetch
function pingCheck(ping_url) {
    fetch(ping_url).then(function(response) {
        //return response;
    }).then(function(json) {
        //console.log('Done');
    }).catch(function(ex) {
        //console.log('Parsing failed:', ex);
    });

}
