import React, {useState} from 'react'

export const FileUpload = () => {
    const [file, setFile] = useState('')
    const [filename, setFileName] = useState('')

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name)
    }

    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
    }
  return (
    <>
    <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
            <input type='file' className='custom-file-input' id='customFile' 
            onChange={onChange}
            />
            <lable className='custom-file-lable' htmlFor='customFile'>
                {filename}
            </lable>
        </div>
        <input type='submit' value='Upload' className='btn btn-primary btn-block mt-4'/>
    </form>
    </>
  )
}

export default FileUpload;