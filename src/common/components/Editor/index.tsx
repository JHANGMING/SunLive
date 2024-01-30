import React from 'react';
import dynamic from 'next/dynamic';
import { Controller } from 'react-hook-form';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import 'react-quill/dist/quill.snow.css';

const FontSizes = [
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
];

const Editor = ({ control }) => {
  const modules = {
    toolbar: [
      [{ size: FontSizes }],
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'image'],
    ],
  };

  return (
    <Controller
      name="editorContent"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <ReactQuill
          {...field}
          modules={modules}
          className="h-[350px] rounder-8"
          onChange={(content, delta, source, editor) =>
            field.onChange(editor.getHTML())
          }
        />
      )}
    />
  );
};

export default Editor;
