"use client"
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from 'react';
import QuillEditor from '../components/QuillEditor';

const Page = () => {
    const [editorValue, setEditorValue] = useState('');
  return (
    <main>
      <h1>Hello jorge this is just a test</h1>

      <h1>Quill Editor en Next.js</h1>
      <QuillEditor value={editorValue} setValue={setEditorValue} />
      <div>
        <h2>Contenido del Editor:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorValue }} />
      </div>





      <a href="/api/auth/logout">Logout</a>



    </main>
  );
};

export default withPageAuthRequired(Page);
