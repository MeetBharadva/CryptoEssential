import React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { TextArea } from './TextArea';
import cryptoJs from 'crypto-js';
import { useState, useEffect } from 'react';
import { Toster } from './Toster';

export const Base64Component = forwardRef((props, ref) => {
  const [encodedData, setEncodedData] = useState('');
  const [decodedData, setDecodedData] = useState('');
  useEffect(() => {
    setEncodedData('');
    setDecodedData('');
  }, [props.type]);

  const b64encode = (words) => {
    const encodedWord = cryptoJs.enc.Utf8.parse(words);
    const b64Encoded = cryptoJs.enc.Base64.stringify(encodedWord);
    setEncodedData(b64Encoded);
  };
  const b64Decode = (words) => {
    try {
      const decodedWord = cryptoJs.enc.Base64.parse(words);

      const decoded = cryptoJs.enc.Utf8.stringify(decodedWord);
      setDecodedData(decoded);
    } catch (error) {
      Toster('Provided data is not encoded!');
    }
  };
  useImperativeHandle(ref, () => ({
    base64Onclick() {
      props.type === 0 ? b64encode(props.data) : b64Decode(props.data);
    },
  }));

  return (
    <div>
      <TextArea
        label="output data"
        rowCount="3"
        acceptValue={props.type === 0 ? encodedData : decodedData}
      />
    </div>
  );
});
