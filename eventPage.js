function checkForSite(tabID, changeInfo, tab) {
  if (tab.url.indexOf('https://www.fanfiction.net') === 0) {
    chrome.pageAction.show(tabID);
  }
}

chrome.tabs.onUpdated.addListener(checkForSite);
