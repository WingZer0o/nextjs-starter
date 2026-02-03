"use client";

import { useEffect, useRef, useState } from "react";

interface StacksEditorClientProps {
  initialContent?: string;
}

export default function StacksEditorClient({
  initialContent = "*Your* **markdown** here",
}: StacksEditorClientProps) {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const editorInstanceRef = useRef<unknown>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !editorContainerRef.current) return;

    const loadEditor = async () => {
      // Import the editor module (Stacks CSS/JS is loaded globally via layout.tsx)
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const stacksEditorModule = require("@stackoverflow/stacks-editor");

      // Initialize the editor
      if (
        stacksEditorModule &&
        !editorInstanceRef.current &&
        editorContainerRef.current
      ) {
        editorInstanceRef.current = new stacksEditorModule.StacksEditor(
          editorContainerRef.current,
          initialContent,
          {},
        );

        setIsLoaded(true);
      }
    };

    loadEditor();

    // Cleanup on unmount
    return () => {
      editorInstanceRef.current = null;
    };
  }, [initialContent]);

  return (
    <div
      ref={editorContainerRef}
      id="editor-container"
      style={{ opacity: isLoaded ? 1 : 0.5 }}
    ></div>
  );
}
