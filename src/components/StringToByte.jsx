import React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { TextArea } from './TextArea';
import { useState, useEffect } from 'react';
import { Toster } from './Toster';

export const StringToByte = forwardRef((props, ref) => {
  const [encodedData, setEncodedData] = useState('');
  const [decodedData, setDecodedData] = useState('');
  useEffect(() => {
    setEncodedData('');
    setDecodedData('');
  }, [props.type]);

  const S2AEncode = (words) => {
    let bytes = [];
    for (var i = 0; i < words.length; ++i) {
      var code = words.charCodeAt(i);
      bytes = bytes.concat([code]);
    }
    const result = bytes.join(', ');
    setEncodedData(result);
  };
  const S2ADecode = (words) => {
    var regex = /[a-zA-Z]/;

    var matches = words.match(regex);
    if (!matches) {
      const splited = words.split(',');

      var opstr = String.fromCharCode.apply(null, splited);
      setDecodedData(opstr);
    } else {
      Toster('Not Valid Byte Array');
    }
  };
  useImperativeHandle(ref, () => ({
    S2AOnclick() {
      props.type === 0 ? S2AEncode(props.data) : S2ADecode(props.data);
    },
  }));

  return (
    <div>
      <TextArea
        label="Result: "
        rowCount="3"
        acceptValue={props.type === 0 ? encodedData : decodedData}
      />
    </div>
  );
});
