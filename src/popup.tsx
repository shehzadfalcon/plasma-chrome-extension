/**
 * @fileoverview Popup component for the GoPDF Chrome extension.
 * This component provides a UI for users to upload PDF files and access
 * various PDF manipulation features via gopdf.io.
 */
import { useState } from "react"

import "./style.css"

/**
 * Main popup component for the GoPDF extension.
 * Provides file upload functionality and PDF manipulation action buttons.
 * @returns {JSX.Element} The rendered popup UI
 */
const Popup = () => {
  /**
   * State to store the currently selected PDF file
   * @type {[File|null, React.Dispatch<React.SetStateAction<File|null>>]}
   */
  const [file, setFile] = useState(null)
  
  /**
   * State to track if a file is being dragged over the drop area
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isDragging, setIsDragging] = useState(false)

  /**
   * Handles file selection from the file input element
   * If a valid PDF is selected, updates state and sends message to background script
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event
   */
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
      chrome.runtime.sendMessage({
        type: "FILE_UPLOADED",
        action: ""
      })
    }
    // Redirect to gopdf.io with the specific action
  }

  /**
   * Handles dragover event for the file drop area
   * @param {React.DragEvent<HTMLDivElement>} e - The dragover event
   */
  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  /**
   * Handles dragleave event for the file drop area
   */
  const handleDragLeave = () => {
    setIsDragging(false)
  }

  /**
   * Handles file drop events
   * If a valid PDF is dropped, updates state and sends message to background script
   * @param {React.DragEvent<HTMLDivElement>} e - The drop event
   */
  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile)
      chrome.runtime.sendMessage({
        type: "FILE_UPLOADED",
        action: ""
      })
    }
  }

  /**
   * Handles action button clicks based on the selected action
   * If a file is already selected, sends a FILE_UPLOADED message with the action
   * Otherwise opens a new tab to the gopdf.io service with the specified action
   * @param {string} action - The action identifier (URL path) for the PDF operation
   */
  const handleAction = (action) => {
    // Create FormData to upload the file
    if (file) {
      chrome.runtime.sendMessage({ type: "FILE_UPLOADED", action })
    } else {
      chrome.tabs.create({
        url: `https://gopdf.io/${action}`
      })
    }
  }

  return (
    <div className="popup-container">
      <div className="header">
        <img src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" alt="GoPDF" className="logo" />
        <h1>GoPDF Actions</h1>
      </div>

      <div
        className={`drop-area ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}>
        <p>Drop your PDF here or</p>
        <label className="upload-button">
          Choose File
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            hidden
          />
        </label>
      </div>

      <div className="file-actions">
        <div className="actions-grid">
          <ActionButton
            action="features/compress-pdf"
            label="Compress PDF"
            icon="🗜️"
            onClick={handleAction}
          />
          <ActionButton
            action="features/merge-pdf"
            label="Merge PDF"
            icon="🔗"
            onClick={handleAction}
          />
          <ActionButton
            action="features/convert-pdf-to-jpg"
            label="PDF To JPG"
            icon="✂️"
            onClick={handleAction}
          />
          <ActionButton
            action="features/convert-pdf-to-word"
            label="PDF To Word"
            icon="🔄"
            onClick={handleAction}
          />
          <ActionButton
            action="features/crop-pdf"
            label="CROP PDF"
            icon="✏️"
            onClick={handleAction}
          />
          <ActionButton
            action="feature/ocr-pdf"
            label="OCR PDF"
            icon="🔒"
            onClick={handleAction}
          />
        </div>
      </div>

      <div className="footer">Powered by gopdf.io</div>
    </div>
  )
}

/**
 * Component for rendering action buttons with icons and labels
 * @param {Object} props - Component properties
 * @param {string} props.action - The action path identifier for the button
 * @param {string} props.label - The display text for the button
 * @param {string} props.icon - The emoji icon to display
 * @param {(action: string) => void} props.onClick - Callback when button is clicked
 * @returns {JSX.Element} A styled button element
 */
const ActionButton = ({ action, label, icon, onClick }) => (
  <button className="action-button" onClick={() => onClick(action)}>
    <span className="action-icon">{icon}</span>
    <span className="action-label">{label}</span>
  </button>
)

export default Popup