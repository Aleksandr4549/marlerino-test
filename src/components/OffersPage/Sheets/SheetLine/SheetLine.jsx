import { useState } from 'react';

import editIcon from '../../../../assets/icons/Edit.png';
import '../sheets.scss';

const SheetLine = ({id, theme, name, url, offerURLTemplate, networkName, date, onChange}) => {
  const [editMode, setEditMode] = useState(false);
  const [columnValues, setColumnValues] = useState({
    name,
    url,
    offerURLTemplate,
    networkName,
    date
  });

  const onChangeHandler = (value, fieldName) => {
    setColumnValues(state => ({...state, [fieldName]: value}));
  };

  const saveChanges = () => {
    if (offerURLTemplate) {
      onChange(id, columnValues.name, columnValues.url, columnValues.offerURLTemplate, columnValues.date);
    } else {
      onChange(id, columnValues.name, columnValues.url, columnValues.networkName, columnValues.date);
    }
  }

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const onClickHandler = () => {
    setEditMode(true);
  };

  const onBlurHandler = () => {
    saveChanges();
  };

  const onKeyPressHandler = (e) => {
    if (e.code === 'Enter') {
      saveChanges();
    }
  };

  return (
    <div className='sheet-line_container'>
      <input className={theme === 'dark' ? 'sheet-line_container__input sheet-line_container__input_dark' 
                                         : 'sheet-line_container__input'} 
             type='text' 
             value={columnValues.name} 
             onChange={(e) => onChangeHandler(e.currentTarget.value, 'name')}
             onClick={onClickHandler}
             onBlur={onBlurHandler}
             onKeyPress={onKeyPressHandler} />

      <input className={theme === 'dark' ? 'sheet-line_container__input sheet-line_container__input_dark' 
                                         : 'sheet-line_container__input'} 
             type='text' 
             value={columnValues.url} 
             onChange={(e) => onChangeHandler(e.currentTarget.value, 'url')}
             onClick={onClickHandler}
             onKeyPress={onKeyPressHandler} />

      {offerURLTemplate &&  <input className={theme === 'dark' 
                                         ? 'sheet-line_container__input sheet-line_container__input_dark' 
                                         : 'sheet-line_container__input'} 
                                  value={columnValues.offerURLTemplate} 
                                  onChange={(e) => onChangeHandler(e.currentTarget.value, 'offerURLTemplate')}
                                  onClick={onClickHandler}
                                  onBlur={onBlurHandler}
                                  onKeyPress={onKeyPressHandler} />}

      {networkName &&  <input className={theme === 'dark' 
                                         ? 'sheet-line_container__input sheet-line_container__input_dark' 
                                         : 'sheet-line_container__input'} 
                             type='text' 
                             value={columnValues.networkName} 
                             onChange={(e) => onChangeHandler(e.currentTarget.value, 'networkName')}
                             onClick={onClickHandler}
                             onBlur={onBlurHandler}
                             onKeyPress={onKeyPressHandler} />}

          <input className={theme === 'dark' ? 'sheet-line_container__input sheet-line_container__input_dark' 
                                             : 'sheet-line_container__input'} 
             type='text' 
             value={columnValues.date} 
             onChange={(e) => onChangeHandler(e.currentTarget.value, 'date')}
             onClick={onClickHandler}
             onBlur={onBlurHandler}
             onKeyPress={onKeyPressHandler} />

      <img className='sheet-line_container__icon' src={editIcon} alt='icon' onClick={toggleEditMode} />
    </div>
  );
};

export default SheetLine;