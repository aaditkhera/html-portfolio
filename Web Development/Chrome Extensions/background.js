chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, { action: "download_video" });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "download_video") {
    // Get the download URL of the video
    const downloadUrl = request.downloadUrl;

    // Create a link element
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "twitter_video.mp4";

    // Append the link to the body and click it
    document.body.appendChild(link);
    link.click();

    // Remove the link
    document.body.removeChild(link);
  }
});
