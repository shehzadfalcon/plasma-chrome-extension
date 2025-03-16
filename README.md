# PDFWizard Chrome Extension

A powerful Chrome extension for PDF manipulation built with the [Plasmo Framework](https://docs.plasmo.com/).

## Features

- **PDF Upload**: Drag and drop PDFs directly in the extension popup
- **Conversion Tools**: Convert PDFs to JPG, Word, and more
- **PDF Manipulation**: Compress, merge, crop, and OCR your PDFs
- **Smart PDF Detection**: Automatically detects PDFs you're viewing
- **Quick Actions**: Access common PDF tools with just one click

## Installation

### From Chrome Web Store

1. Visit the PDFWizard extension page on the Chrome Web Store
2. Click "Add to Chrome"
3. Follow the onboarding instructions

### From Source

```bash
# Clone the repository
git clone https://github.com/shehzadfalcon/plasma-chrome-extension

# Navigate to project directory
cd plasma-chrome-extension

# Install dependencies
npm install
# or
pnpm install

# Build for development
npm run dev
# or
pnpm dev
```
## Visualize
<img width="1353" alt="Screenshot 2025-03-17 at 4 11 55 AM" src="https://github.com/user-attachments/assets/1ac48623-130d-4543-983c-420e5861099b" />

After building, load the extension from `build/chrome-mv3-dev` using Chrome's developer mode.

## Usage

### Process PDFs from Your Browser

1. Click the PDFWizard icon in your toolbar
2. Upload a PDF by:
   - Dragging and dropping it into the designated area
   - Clicking "Choose File" to select from your computer
3. Select the action you want to perform
4. The extension will redirect you to PDFWizard.io with your file ready for processing

### Access Tools Directly

1. Click the PDFWizard icon
2. Select any tool from the action grid:
   - 🗜️ Compress PDF
   - 🔗 Merge PDF
   - ✂️ PDF to JPG
   - 🔄 PDF to Word
   - ✏️ Crop PDF
   - 🔒 OCR PDF

### Process PDFs You're Viewing

When browsing a PDF in Chrome:
1. The PDFWizard icon will display a "PDF" badge
2. A sidebar will appear with quick actions
3. Select any action to process the current PDF

## Development

This extension is built with the Plasmo Framework, making it easy to develop and maintain.

### Project Structure

- `popup.tsx` - Main extension popup UI
- `background.ts` - Background service worker
- `content.tsx` - PDF detection and action sidebar
- `onboarding.tsx` - First-time user onboarding experience

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Package for distribution
pnpm package
```

### Debugging

For troubleshooting:
1. Open Chrome and navigate to `chrome://extensions`
2. Enable "Developer mode"
3. Click on "background page" under the PDFWizard extension
4. Use Chrome DevTools to debug

## Known Issues

- Ensure the actions in both handlers use the same URL format
- There's a known bug with PDF detection in certain embedded viewers
- When file upload redirects don't work, check for extension context invalidation

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bugs and feature requests.

## Stay in touch

- Author - [Shahzad Ahmad]
- LinkedIn - [https://www.linkedin.com/in/shehzadcs2016/](https://www.linkedin.com/in/shehzadcs2016/)

## License

This project is licensed under the MIT License.
