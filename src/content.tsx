// contents/pdf-detector.tsx
import { useEffect, useState } from "react";
import type { PlasmoContentScript } from "plasmo";

export const config: PlasmoContentScript = {
  matches: ["*://*/*"],
  all_frames: true,
};

const actions = [
  { action: "features/compress-pdf", label: "Compress PDF", icon: "🗜️" },
  { action: "features/merge-pdf", label: "Merge PDF", icon: "🔗" },
  { action: "features/convert-pdf-to-jpg", label: "PDF To JPG", icon: "✂️" },
  { action: "features/convert-pdf-to-word", label: "PDF To Word", icon: "🔄" },
  { action: "features/crop-pdf", label: "Crop PDF", icon: "✏️" },
  { action: "features/ocr-pdf", label: "OCR PDF", icon: "🔒" },
];

const sidebarStyle: React.CSSProperties = {
  position: "fixed",
  top: "10%",
  left: "10px",
  width: "240px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
  zIndex: 9999,
  borderRadius: "8px",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const titleStyle: React.CSSProperties = {
  margin: "0 0 15px",
  fontSize: "18px",
  textAlign: "center",
  color: "#333",
  borderBottom: "1px solid #eee",
  paddingBottom: "10px",
};

const buttonStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: "8px 0",
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  backgroundColor: "#00ADD7",
  color: "#fff",
  fontSize: "14px",
  transition: "background-color 0.3s ease",
};

const Content = () => {
  const [isPdf, setIsPdf] = useState(false);

  useEffect(() => {
    const detectPdf = () => {
      // Determine if the page is a PDF by checking the URL and content type.
      const pdfDetected =
        window.location.pathname.toLowerCase().endsWith(".pdf") ||
        document.contentType === "application/pdf";
      setIsPdf(pdfDetected);
    };

    detectPdf();
  }, []);

  if (!isPdf) return null;

  const handleAction = (action: string) => {
    // Redirect the user to gopdf.io with the desired action.
    window.open(`https://gopdf.io/${action}`, "_blank");
  };

  return (
    <div style={sidebarStyle}>
      <h3 style={titleStyle}>PDF Actions</h3>
      <div>
        {actions.map(({ action, label, icon }) => (
          <button
            key={action}
            style={buttonStyle}
            onClick={() => handleAction(action)}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "#00ADD7")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "#00ADD7")
            }
          >
            <span style={{ marginRight: "8px" }}>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Content;