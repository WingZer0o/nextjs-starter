"use client";

import { useEffect, useRef, useState } from "react";
import "@stackoverflow/stacks/dist/css/stacks.css";
import "@stackoverflow/stacks-editor/dist/styles.css";

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
      // Dynamically import Stacks first to set up Stimulus
      // This import has side effects that start the Stimulus application
      await import("@stackoverflow/stacks");

      // Then import the editor module
      const stacksEditorModule = await import("@stackoverflow/stacks-editor");

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
