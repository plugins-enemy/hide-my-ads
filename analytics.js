//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-53315434-6']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

//Update Tracking
if (!localStorage['installed'])
{

	localStorage['installed']='1';
	localStorage[chrome.app.getDetails().version] = '1';
	_gaq.push(['_trackEvent','Install',chrome.app.getDetails().version]);
}
else
{
	if (!localStorage[chrome.app.getDetails().version])
	{
		_gaq.push(['_trackEvent','Update',chrome.app.getDetails().version]);
		localStorage[chrome.app.getDetails().version] = '1';
	}
}
