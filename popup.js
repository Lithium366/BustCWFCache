document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("bustCacheButton")
    .addEventListener("click", function () {
      chrome.tabs.getSelected(null, function (tab) {
        var code =
          "var hash = Math.random().toString(36).replace(/[^a-z0-9]+/g, ''); if (window.location.search) { if (window.location.search.indexOf('review=') > -1) { window.location.search = window.location.search.replace(/review=([0-9a-z])+/, 'review=' + hash)  } else { window.location.search += '&review=' + hash } } else { window.location.search = 'review=1' + hash }";
        chrome.tabs.executeScript(tab.id, { code: code });
      });
    });
});
