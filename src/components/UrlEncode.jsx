import React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { TextArea } from './TextArea';
import { useState, useEffect } from 'react';

export const UrlEncoderComponent = forwardRef((props, ref) => {
  const [encodedData, setEncodedData] = useState('');
  const [decodedData, setDecodedData] = useState('');
  useEffect(() => {
    setEncodedData('');
    setDecodedData('');
  }, [props.type]);

  const UrlEncode = (words) => {
    const UrlEncoded = encodeURIComponent(words);
    setEncodedData(UrlEncoded);
  };
  const UrlDecode = (words) => {
    const UrlDecoded = decodeURIComponent(words);
    setDecodedData(UrlDecoded);
  };
  useImperativeHandle(ref, () => ({
    UrlOnclick() {
      props.type === 0 ? UrlEncode(props.data) : UrlDecode(props.data);
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
