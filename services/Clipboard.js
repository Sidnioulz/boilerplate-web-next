const copy = (text) => {
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
};

export default copy;
