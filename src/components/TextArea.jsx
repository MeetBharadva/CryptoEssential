import React from 'react';
import { useState, useEffect } from 'react';
import { Toster } from './Toster';
export const TextArea = ({
  label,
  rowCount,
  dataEmit,
  acceptValue,
  isDataNeeded,
  isCopyNeeded,
}) => {
  const [data, setData] = useState('');
  useEffect(() => {
    setData(acceptValue);
  }, [acceptValue]);

  const onChangeHandler = (e) => {
    setData(e.target.value);
    if (isDataNeeded) {
      dataEmit(e.target.value);
    }
  };
  const onCopyClickHandler = () => {
    navigator.clipboard.writeText(data);
    Toster('Copied!', 1);
  };
  return (
    <div className="mb-3">
      <div className="label-textarea">
        <label htmlFor={label} className="form-label">
          {label}
        </label>
        {!isCopyNeeded && (
          <span
            className={`badge rounded-pill bg-secondary float-end ${
              data === '' ? 'isDisabled' : ''
            }`}
            role="button"
            onClick={onCopyClickHandler}
          >
            Copy
          </span>
        )}
      </div>

      <textarea
        className="form-control"
        id={label}
        rows={rowCount}
        value={data}
        onChange={(e) => onChangeHandler(e)}
      ></textarea>
    </div>
  );
};
