# GoPDF Chrome Extension

A powerful Chrome extension for PDF manipulation built with the [Plasmo Framework](https://docs.plasmo.com/).

## Features

- **PDF Upload**: Drag and drop PDFs directly in the extension popup
- **Conversion Tools**: Convert PDFs to JPG, Word, and more
- **PDF Manipulation**: Compress, merge, crop, and OCR your PDFs
- **Smart PDF Detection**: Automatically detects PDFs you're viewing
- **Quick Actions**: Access common PDF tools with just one click

## Installation

### From Chrome Web Store

1. Visit the GoPDF extension page on the Chrome Web Store
2. Click "Add to Chrome"
3. Follow the onboarding instructions

### From Source

```bash
# Clone the repository
git clone https://github.com/yourusername/gopdf-extension.git

# Navigate to project directory
cd gopdf-extension

# Install dependencies
npm install
# or
pnpm install

# Build for development
npm run dev
# or
pnpm dev
```

After building, load the extension from `build/chrome-mv3-dev` using Chrome's developer mode.

## Usage

### Process PDFs from Your Browser

1. Click the GoPDF icon in your toolbar
2. Upload a PDF by:
   - Dragging and dropping it into the designated area
   - Clicking "Choose File" to select from your computer
3. Select the action you want to perform
4. The extension will redirect you to gopdf.io with your file ready for processing

### Access Tools Directly

1. Click the GoPDF icon
2. Select any tool from the action grid:
   - 🗜️ Compress PDF
   - 🔗 Merge PDF
   - ✂️ PDF to JPG
   - 🔄 PDF to Word
   - ✏️ Crop PDF
   - 🔒 OCR PDF

### Process PDFs You're Viewing

When browsing a PDF in Chrome:
1. The GoPDF icon will display a "PDF" badge
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
3. Click on "background page" under the GoPDF extension
4. Use Chrome DevTools to debug

## Known Issues

- Ensure the actions in both handlers use the same URL format
- There's a known bug with PDF detection in certain embedded viewers
- When file upload redirects don't work, check for extension context invalidation

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bugs and feature requests.

## License

This project is licensed under the MIT License.