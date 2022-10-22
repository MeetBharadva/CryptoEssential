import React from 'react';
import { Dropdown } from '../components/Dropdown';
import { useState, useEffect } from 'react';
import { TextArea } from '../components/TextArea';
import { Toster } from '../components/Toster';
import BigNumber from 'bignumber.js';
export const ArithMetic = () => {
  const FromDdData = [
    { name: 'HEX', value: 'HEX' },
    { name: 'DECIMAL', value: 'DECIMAL' },
  ];
  const ToDdData = [
    { name: 'DECIMAL', value: 'DECIMAL' },
    { name: 'HEX', value: 'HEX' },
  ];
  const [mainTextAreaData, setMainTextAreaData] = useState('');
  const [fromOption, setFromOption] = useState('HEX');
  const [toOption, setToOption] = useState('DECIMAL');
  const [result, setResult] = useState('');
  const [fromData, setFromData] = useState(FromDdData);
  const [toData, setToData] = useState(ToDdData);

  const hexToDecimal = (data) => {
    let hex = data;
    hex = hex.replace('0x', '');
    hex = hex.replace('0X', '');
    const x = new BigNumber(hex, 16);
    const hextToDec = x.toString(10);
    setResult(hextToDec);
    if (hextToDec === 'NaN') Toster('Error: Input is not a HEX Value!');
  };
  const decimalToHex = (data) => {
    const number = Number(data);
    const decToHex = number.toString(16).toUpperCase();
    setResult(decToHex);
    if (decToHex === 'NAN') Toster('Error: Input is not a decimal number!');
  };

  const swapHandler = (first, second) => {
    const firstArray = arrayManuplation(second, fromData);
    setFromOption(second);
    setFromData(firstArray);
    const secondArray = arrayManuplation(first, ToDdData);
    setToData(secondArray);
    setToOption(first);
  };

  const arrayManuplation = (element, array) => {
    const optionToPush = array.filter((one) => {
      return one.value === element;
    });
    let optionAfterDelete = array.filter((one) => {
      return one.value !== element;
    });
    optionAfterDelete.unshift(optionToPush[0]);
    return optionAfterDelete;
  };

  const onConvertHandler = () => {
    if (fromOption === 'HEX' && toOption === 'DECIMAL') {
      hexToDecimal(mainTextAreaData);
    } else if (fromOption === 'DECIMAL' && toOption === 'HEX') {
      decimalToHex(mainTextAreaData);
    }
  };
  return (
    <div className="wrapper mx-auto">
      <div className="responsiveGroup">
        <div className="col-md-4 from-dd">
          <Dropdown
            data={fromData}
            ddLabel="From"
            selectedData={(data) => setFromOption(data)}
          />
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <button
            className="btn btn-primary my-auto"
            onClick={() => swapHandler(fromOption, toOption)}
          >
            Swap
          </button>
        </div>
        <div className="col-md-4 to-dd">
          <Dropdown
            data={toData}
            ddLabel="To"
            selectedData={(data) => setToOption(data)}
          />
        </div>
      </div>
      <div className="my-2">
        <TextArea
          label="Input"
          rowCount="3"
          isCopyNeeded={true}
          isDataNeeded={true}
          dataEmit={(data) => setMainTextAreaData(data)}
        />
      </div>
      <div className="my-2 text-center ">
        <button
          className="btn btn-primary"
          disabled={fromOption === toOption}
          onClick={onConvertHandler}
        >
          Convert
        </button>
      </div>
      <div className="my-2">
        <TextArea
          label="Result"
          rowCount="3"
          isCopyNeeded={false}
          acceptValue={result}
        />
      </div>
    </div>
  );
};
