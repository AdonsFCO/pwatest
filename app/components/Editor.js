"use client"

// components/Editor.js
import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';  

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: 'editorjs',
        tools: {
          header: Header,
          image: {
            class: ImageTool,
      
          },
        },
      });
    }
  }, []);

  return <div id="editorjs" style={{ border: '1px solid #ccc', padding: '10px' }}></div>;
};

export default Editor;
