"use client";
import { pdfjs, Document, Page } from "react-pdf";
import { useState, useEffect } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import { Button } from "../ui/button";
import { Download } from 'lucide-react';
import { useTheme } from "next-themes";

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber] = useState(1);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const updateDimensions = () => {
      const isSmallScreen = window.innerWidth < 640; // Tailwind's sm breakpoint
      const width = isSmallScreen ? window.innerWidth * 0.9 : window.innerWidth * 0.5;
      const height = isSmallScreen ? window.innerHeight * 0.9 : window.innerHeight * 0.9;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="p-5">
        <a href="/Personal/resume.pdf" download>
          <Button className="p-5">
            <Download /> Download
          </Button>
        </a>
      </div>
      <div className={`${theme === 'dark' ? 'invert' : ''} overflow-auto`} style={{ width: dimensions.width, height: dimensions.height }}>
        <Document
          file="/Personal/resume.pdf" // Path to the PDF file in the public folder
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={dimensions.width} />
        </Document>
        <p className="flex justify-center text-sm">
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}
