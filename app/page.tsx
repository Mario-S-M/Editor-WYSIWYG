"use client";

import dynamic from "next/dynamic";

// Dynamically import CKEditor component with SSR disabled
const CKEditorComponent = dynamic(
  () => import("./components/CKEditorComponent"),
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
  }
);

export default function App() {
  return (
    <>
      <div className="header-wrapper">
        <h1>Feature-rich editor</h1>
      </div>
      <CKEditorComponent />
    </>
  );
}
