if (/youtube/.test(document.location.hostname)) {
  // Get actual URL
  var url = document.location.href;

  // Get enabled settings everytime in Safari
  if (SAFARI) {
    var enabled_settings = [];
    BGcall("get_settings", function(settings) {
      for (setting in settings) {
        if (settings[setting])
          enabled_settings.push(setting);
      }
      if (enabled_settings.indexOf("youtube_channel_whitelist") >= 0)
        channel();
    });
  } else {
    channel();
  }

  // Function which: - grabs the name of the channel from the page
  //                 - puts the name of the channel on the end of the URL e.g. &channel=nameofthechannel
  //                 - reload the page, so adremover can properly whitelist the channel
  //                   (if channel is whitelisted by user)
  function channel() {
    if ((url.search("channel=") < 0) && (/channel\/|watch/.test(url)) && (url.search("feed") < 0)) {
        var get_yt_name = document.querySelector("span[itemprop='author'] link");
        var extracted_name = get_yt_name.getAttribute("href").split('/').pop();
      if (/channel/.test(url)) {
          var new_url = url+"?&channel="+extracted_name;
      } else {
          var new_url = url+"&channel="+extracted_name;
      }
      // Add the name of the channel to the end of URL
      window.history.replaceState(null,null,new_url);
      // Reload page from cache
      document.location.reload(false);
    }
  }
}
