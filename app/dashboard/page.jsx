"use client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";
import Editor from "../components/Editor";

const Page = () => {
  const [editorValue, setEditorValue] = useState("");
  return (
    <main>
      <h1>Hello jorge this is just a test</h1>
      <Editor />

      <a href="/api/auth/logout">Logout</a>
    </main>
  );
};

// export default Page;
 export default withPageAuthRequired(Page);
