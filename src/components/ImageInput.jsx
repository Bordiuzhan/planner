import { useRef, useState } from 'react';
import './ImageInput.css';

const ImageInput = ({ addImgData }) => {
  const [fileName, setFileName] = useState('file');
  const fileInputRef = useRef(null);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    file ? setFileName(file.name) : setFileName('file');

    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'event-present');
    addImgData(formData);
  };

  return (
    <div>
      <input
        type="file"
        className="input-file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
      />
      <input type="text" className='input-file-custom' onClick={handleChooseFile} readOnly value={fileName} />
    </div>
  );
};

export default ImageInput;
