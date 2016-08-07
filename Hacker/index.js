chrome.browserAction.onClicked.addListener(function(tab) {
	if(open){
		var thecode = "document.body.setAttribute('contenteditable', true);";
		chrome.browserAction.setIcon({path:"iconclose.png"});
		open=!open;
	} else {
		var thecode = "document.body.setAttribute('contenteditable', false);";
		chrome.browserAction.setIcon({path:"icon.png"});
		open=!open;
	}
  chrome.tabs.executeScript({
    code: thecode
  });
});
