chrome.runtime.onMessage.addListener(function (message, sender, senderResponse) {
  if (message.type === "request") {
    fetch("blocklist.json")
    .then(data => data.json())
    .then(senderResponse);
  }
  return true
});
