const bufferToBase64URLString = (buffer: ArrayBuffer): string => {
  const bytes = new Uint8Array(buffer);
  const str = Array.from(bytes)
    .map((charCode) => String.fromCharCode(charCode))
    .join('');

  const base64String = btoa(str);
  return base64String.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};
export default bufferToBase64URLString;
