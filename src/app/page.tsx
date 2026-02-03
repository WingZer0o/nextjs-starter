import Image from "next/image";
import StacksEditorClient from "./components/stacks-editor-client";

export default function Home() {
  return (
    <div className="container my-5">
      <Image
        src="/images/hero.webp"
        width={350}
        height={350}
        alt="Capitol building with chat bubble."
        className="d-block mx-auto mb-4"
      />
      <h1 className="display-5 fw-bold text-white text-center">
        Tell your story
      </h1>
      <div className="col-lg-6 mx-auto">
        <StacksEditorClient initialContent="" />
      </div>
    </div>
  );
}
