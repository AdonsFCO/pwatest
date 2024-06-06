// components/QuillEditor.js

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

// Importa Quill dinámicamente para asegurarte de que se cargue solo en el lado del cliente
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const QuillEditor = ({ value, setValue }) => {
  return (
    <ReactQuill value={value} onChange={setValue} />
  );
};

export default QuillEditor;
