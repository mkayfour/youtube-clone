import React, { useState, useEffect } from 'react';
import { Typography, Button, Form, Input, Icon, message } from 'antd';
import Dropzone from 'react-dropzone';
import { response } from 'express';
import axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;
const Private = [
  { value: 0, label: 'Private' },
  { value: 1, label: 'Public' }
];

const Category = [
  { value: 0, label: 'Film & Animation' },
  { value: 1, label: 'Autos & Vehicles' },
  { value: 2, label: 'Music' },
  { value: 3, label: 'Animals' },
  { value: 4, label: 'Sports' }
];

function UploadVideoPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState(0);
  const [categories, setCategories] = useState('Film & Animation');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePrivacy = (e) => {
    setPrivacy(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategories(e.target.value);
  };

  const onSubmit = () => {
    alert('submit');
  };

  const onDrop = (files) => {
    // let formData = new FormData();
    // const config = {
    //   header: { 'content-type': 'multipart/form-data' }
    // };
    // console.log(files[0]);
    // formData.append('file', files[0]);

    // axios.post('/api/video/uploadfiles', formData, config).then((response) => {
    //   if (response.data.success) {
    //     console.log(response);
    //   } else {
    //     alert('Failed to upload video');
    //   }
    // });
  };

  return (
    <div style={{ maxWidth: '700', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}> Upload Video </Title>
      </div>
      <Form onSubmit={onSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: '300px',
                  height: '240px',
                  border: '1px solid lightgray'
                }}
              >
                <input {...getInputProps()} />
                <Icon type='plus' style={{ fontSize: '3rem' }} />
              </div>
            )}
          </Dropzone>
        </div>
        <br /> <br />
        <label>Title</label>
        <Input value={title} onChange={handleChangeTitle}></Input>
        <br /> <br />
        <label>Description</label>
        <TextArea
          onChange={handleChangeDescription}
          value={description}
        ></TextArea>
        <br />
        <br />
        <select onChange={handleChangePrivacy}>
          {Private.map((item, index) => (
            <option key={index} value='item.label'>
              {item.label}
            </option>
          ))}
        </select>
        <br /> <br />
        <select onChange={handleChangeCategory}>
          {Category.map((item, index) => (
            <option key={index} value='item.label'>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button type='primary' size='large' onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UploadVideoPage;
