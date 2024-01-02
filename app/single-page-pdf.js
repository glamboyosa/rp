
import { Worker, Viewer } from "@react-pdf-viewer/core";

const SinglePDFPage = ({ url, className }) => {
  return (
    <div className={className}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={url} />
      </Worker>
    </div>
  );
};

export default SinglePDFPage;
