import { useState } from 'react';

import InputForm from '../InputForm/InputForm'; 
import TextBlockForm from '../TextBlockForm/TextBlockForm';
import DefaultBtn from '../../../Buttons/DefaultBtn/DefaultBtn';
import infoCircle from '../../../../assets/icons/infoCircle.svg';
import '../forms.scss';

const NewNetworkForm = ({onClickHandler, theme}) => {
  const [networkNameValue, setNetworkNameValue] = useState('');
  const [postbackUrlValue, setPostbackUrlValue] = useState('');
  const [errors, setErrors] = useState([]);

  const changeNetworkName = (e) => {
    setErrors([]);
    setNetworkNameValue(e.currentTarget.value);
  };

  const changePostbackUrl = (e) => {
    setErrors([]);
    setPostbackUrlValue(e.currentTarget.value);
  };

  const checkErrors = () => {
    const errors = [];

    if (networkNameValue.length > 16) {
      setErrors(errors => [...errors, 'networkNameValue']);
      errors.push({fieldName: 'name', error: 'длина имени не должна превышать 16 символов'});
    }

    if (postbackUrlValue === '') {
      setErrors(errors => [...errors, 'postbackUrlValue']);
      errors.push({fieldName: 'name', error: 'поле name должно быть заполнено'});
    }

    if (networkNameValue === '') {
      setErrors(errors => [...errors, 'networkNameValue']);
      errors.push({fieldName: 'url', error: 'поле url должно быть заполнено'});
    }

    return errors;
  };

  const onClickBtn = () => {
    const errors = checkErrors();

    if (errors.length > 0) return;
    
    onClickHandler(networkNameValue, postbackUrlValue);
    setNetworkNameValue('');
    setPostbackUrlValue('');
  };

  return (
    <div className={theme === 'dark' ? 'form form_dark' : 'form'}>
      <div className='form-inputs_block'>
        <div>
          <div className='form-inputs_block__text'>Network name</div>
          <InputForm value={networkNameValue} 
                     placeholder='Up to 16 symbols' 
                     onChangeHandler={changeNetworkName}
                     theme={theme}
                     isError={errors.includes('networkNameValue')} />
        </div>
        
        <div className='form-inputs_block__long'>
          <div className='form-inputs_block__text'>Postback URL</div>
          <InputForm value={postbackUrlValue} 
                     placeholder='Postback URL from your affiliate program' 
                     onChangeHandler={changePostbackUrl}
                     theme={theme}
                     isError={errors.includes('postbackUrlValue')} />
        </div>
      </div>

      <div className='form_info'>
        <TextBlockForm iconURL={infoCircle} 
                       text='You need a network to create a campaign with outside offer, '
                       linkText='learn more'
                       linkURL='#'
                       theme={theme} />
        <DefaultBtn value='Make a new network' onClickHandler={onClickBtn} />
      </div>
    </div>
  );
};

export default NewNetworkForm;