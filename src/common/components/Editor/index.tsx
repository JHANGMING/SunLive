import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Controller } from 'react-hook-form';
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import 'react-quill/dist/quill.snow.css';
import { EditorProps } from './data';
const Colors = [
  '#333333',
  '#666666',
  '#999999',
  '#CCCCCC',
  '#FEE26B',
  '#DE3C2B',
  '#47835A',
]; 
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1">標題 1</option>
      <option value="2">標題 2</option>
      <option value="">正文</option>
    </select>
    <select className="ql-size">
      {FontSizes.map((size) => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
    <select className="ql-color">
      {Colors.map((color) => (
        <option key={color} value={color} style={{ backgroundColor: color }}>
        </option>
      ))}
    </select>
    <select className="ql-background">
      {Colors.map((color) => (
        <option key={color} value={color} style={{ backgroundColor: color }}>
        </option>
      ))}
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-link" />
    <button className="ql-image" />
  </div>
);
const FontSizes = [
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
];

const Editor = ({ control }:EditorProps) => {
  const quillRef = useRef(null);
  useEffect(() => {
    const Quill = require('quill');
    
    const SizeStyle = Quill.import('attributors/style/size');
    SizeStyle.whitelist = FontSizes;
    Quill.register(SizeStyle, true);
  }, []);
   const modules = {
     toolbar: {
       container: '#toolbar',
     },
   };

  return (
    <>
      <CustomToolbar />
      <Controller
        name="introduction"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <ReactQuill
            {...field}
            modules={modules}
            // theme="snow"
            className="h-[350px] rounder-8"
            onChange={(content, delta, source, editor) =>
              field.onChange(editor.getHTML())
            }
          />
        )}
      />
    </>
  );
};

export default Editor;
