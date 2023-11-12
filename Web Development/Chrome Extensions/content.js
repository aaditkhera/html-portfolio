// Get the Twitter video player element
const player = document.querySelector(".Player");

// Check if the player exists
if (player) {
  // Get the video element
  const video = player.querySelector("video");

  // Check if the video exists
  if (video) {
    // Get the download URL of the video
    const downloadUrl = video.src;

    // Send a message to the background script with the download URL
    chrome.runtime.sendMessage({ action: "download_video", downloadUrl: downloadUrl });
  }
}
