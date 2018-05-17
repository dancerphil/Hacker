let active = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  active=!active;
  if(active){
		chrome.browserAction.setIcon({path:"iconclose.png"});
  } else {
		chrome.browserAction.setIcon({path:"icon.png"});
  }
  chrome.tabs.executeScript(null, {
    code: `document.body.setAttribute('contenteditable', ${active});`
  });
});
