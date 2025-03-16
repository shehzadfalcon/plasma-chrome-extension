// src/background.ts
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    // Mark that onboarding has NOT been dismissed yet.
    chrome.storage.local.set({ onboardingDismissed: false })
  }
})
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "PDF_DETECTED") {
    // When a PDF is detected, show the page action and set badge styles.
    chrome.pageAction.show(sender.tab!.id)

    chrome.action.setBadgeText({
      text: "PDF",
      tabId: sender.tab!.id
    })

    chrome.action.setBadgeBackgroundColor({
      color: "#4a6cf7",
      tabId: sender.tab!.id
    })
  } else if (message.type === "FILE_UPLOADED") {
    console.log("Creating tab with URL:", `https://gopdf.io/${message.action}`)
    // When a file is uploaded, the message should include an `action` property.
    // Redirect the user by opening a new tab that points to the corresponding gopdf.io action.
    const { action } = message
    chrome.tabs.create({
      url: `https://gopdf.io/${action}`
    })
  }

  sendResponse({ success: true })
})

// Handle action button click, open the popup when the extension icon is clicked.
chrome.action.onClicked.addListener((tab) => {
  chrome.action.openPopup()
})
