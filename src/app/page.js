"use client";
import styles from "./page.module.css";
import { useState } from "react";
import mammoth from "mammoth";

export default function Home() {
  const [htmlContent, setHtmlContent] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (
      file &&
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const arrayBuffer = await file.arrayBuffer();
      mammoth
        .convertToHtml({ arrayBuffer })
        .then((result) => {
          setHtmlContent(result.value); // The generated HTML
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className={styles.page}>
      <main>
        <p className="title">Word to html convertor</p>
        <form action="" className="uploadForm">
          <input className="file__upload" type="file" accept=".docx" onChange={handleFileChange} />
        </form>
        <button
          type="button"
          className="copy_btn"
          onClick={() => navigator.clipboard.writeText(htmlContent)}
        >
          Copy to Clipboard
        </button>
        <div
          className="html-area"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>
    </div>
  );
}
