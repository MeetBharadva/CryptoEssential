import React from 'react';
import { Dropdown } from '../components/Dropdown';
import { useState, useRef } from 'react';
import { TextArea } from '../components/TextArea';
import { Base64Component } from '../components/Base64Component';
import { UrlEncoderComponent } from '../components/UrlEncode';
import { StringToByte } from '../components/StringToByte';
import { Aes } from '../components/Aes';
export const Home = () => {
  const [algoOptionData, setAlgoOptionData] = useState();
  const [algoTypenData, setAlgoTypenData] = useState();
  const [mainTextAreaData, setMainTextAreaData] = useState('');
  const [key, setKey] = useState('');
  const base64Ref = useRef();
  const urlRef = useRef();
  const s2aRef = useRef();
  const AesRef = useRef();

  const algoDropdownData = [
    { id: 1, name: 'encrypt', value: 'encrypt' },
    { id: 2, name: 'decrypt', value: 'decrypt' },
  ];
  const typeEncryptDropdownData = [
    { id: 1, name: 'Base 64', value: 'Base 64' },
    { id: 2, name: 'URL Encoded', value: 'URL Encoded' },
    { id: 3, name: 'String To Bytes', value: 'S2A' },
    { id: 4, name: 'AES Encypt', value: 'AESEN' },
  ];
  const typeDecryptDropdownData = [
    { id: 1, name: 'Base 64', value: 'Base 64' },
    { id: 2, name: 'URL Encoded', value: 'URL Encoded' },
    { id: 3, name: 'String To Bytes', value: 'S2A' },
    { id: 4, name: 'AES Decrypt', value: 'AESEN' },
  ];
  const algoDropdownLabel = 'Choose algoridhm:';
  const typeDropdownLabel = 'Encryption Type:';

  const setAlgoOption = (data) => {
    setAlgoOptionData(data);
  };

  const setTypeOption = (data) => {
    setAlgoTypenData(data);
  };

  const onClickHandler = () => {
    switch (algoTypenData) {
      case undefined:
        base64Ref.current.base64Onclick();
        break;
      case 'Base 64':
        base64Ref.current.base64Onclick();
        break;
      case 'URL Encoded':
        urlRef.current.UrlOnclick();
        break;
      case 'S2A':
        s2aRef.current.S2AOnclick();
        break;
      case 'AESEN':
        AesRef.current.aesOnclick();
        break;
    }
  };

  return (
    <div className="wrapper mx-auto">
      <div className="m-5 text-center">
        <h1>All In One Crypto Tools</h1>
      </div>
      <div>
        <Dropdown
          data={algoDropdownData}
          ddLabel={algoDropdownLabel}
          selectedData={(data) => setAlgoOption(data)}
        />
        <TextArea
          label={
            algoOptionData === 'decrypt'
              ? 'Enter data to be Decrypt'
              : 'Enter data to be Encrypt'
          }
          rowCount="3"
          isDataNeeded={true}
          isCopyNeeded={true}
          dataEmit={(data) => setMainTextAreaData(data)}
        />
        {algoTypenData === 'AESEN' && (
          <div className="my-3">
            <TextArea
              label="Key"
              rowCount="2"
              isDataNeeded={true}
              isCopyNeeded={true}
              dataEmit={(data) => setKey(data)}
            />
          </div>
        )}
        <Dropdown
          data={
            algoOptionData === 'decrypt'
              ? typeDecryptDropdownData
              : typeEncryptDropdownData
          }
          ddLabel={typeDropdownLabel}
          selectedData={(data) => setTypeOption(data)}
        />
      </div>

      <div className="my-3 text-center">
        <button
          type="button"
          className="btn btn-primary"
          disabled={mainTextAreaData === ''}
          onClick={onClickHandler}
        >
          {algoOptionData === 'decrypt' ? 'Decrypt' : 'Ecrypt'}
        </button>
      </div>
      <div className="my-3">
        {(algoTypenData === undefined || algoTypenData === 'Base 64') && (
          <Base64Component
            ref={base64Ref}
            data={mainTextAreaData}
            type={algoOptionData === 'decrypt' ? 1 : 0}
          />
        )}
        {algoTypenData === 'URL Encoded' && (
          <UrlEncoderComponent
            ref={urlRef}
            data={mainTextAreaData}
            type={algoOptionData === 'decrypt' ? 1 : 0}
          />
        )}
        {algoTypenData === 'S2A' && (
          <StringToByte
            ref={s2aRef}
            data={mainTextAreaData}
            type={algoOptionData === 'decrypt' ? 1 : 0}
          />
        )}
        {algoTypenData === 'AESEN' && (
          <Aes
            ref={AesRef}
            data={mainTextAreaData}
            dataKey={key}
            type={algoOptionData === 'decrypt' ? 1 : 0}
          />
        )}
      </div>
    </div>
  );
};
