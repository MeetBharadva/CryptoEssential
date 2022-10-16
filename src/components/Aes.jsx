import React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { TextArea } from './TextArea';
import cryptoJs from 'crypto-js';
import { useState, useEffect } from 'react';
import { Toster } from './Toster';

export const Aes = forwardRef((props, ref) => {
  const [encodedData, setEncodedData] = useState('');
  const [decodedData, setDecodedData] = useState('');
  useEffect(() => {
    setEncodedData('');
    setDecodedData('');
  }, [props.type]);

  const aesencode = (words, key) => {
    const encrypted = cryptoJs.AES.encrypt(words, key);
    setEncodedData(encrypted);
  };
  const aesDecode = (words, key) => {
    try {
      const decrypted = cryptoJs.AES.decrypt(words, key);
      const plain = decrypted.toString(cryptoJs.enc.Utf8);
      setDecodedData(plain);
    } catch (error) {
      Toster('Provided data is not encoded!');
    }
  };
  useImperativeHandle(ref, () => ({
    aesOnclick() {
      props.type === 0
        ? aesencode(props.data, props.dataKey)
        : aesDecode(props.data, props.dataKey);
    },
  }));

  return (
    <>
      <div>
        <TextArea
          label="output data"
          rowCount="3"
          acceptValue={props.type === 0 ? encodedData : decodedData}
        />
      </div>
    </>
  );
});
