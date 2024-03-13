import Quill from 'quill';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Controller } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import { Colors, EditorProps, FontSizes } from './data';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

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
        <option
          key={color}
          value={color}
          style={{ backgroundColor: color }}
          aria-label="color"
        />
      ))}
    </select>
    <select className="ql-background">
      {Colors.map((color) => (
        <option
          key={color}
          value={color}
          style={{ backgroundColor: color }}
          aria-label="background"
        />
      ))}
    </select>
    <button className="ql-bold" type="button" aria-label="Bold" />
    <button className="ql-italic" type="button" aria-label="italic" />
    <button className="ql-link" type="button" aria-label="link" />
    <button className="ql-image" type="button" aria-label="image" />
  </div>
);

const Editor = ({ control }: EditorProps) => {
  useEffect(() => {
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
            className="h-[350px] rounder-8"
            onChange={(content, _delta, _source, editor) => field.onChange(editor.getHTML())}
          />
        )}
      />
    </>
  );
};

export default Editor;
