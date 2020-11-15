import { useState } from 'react';

import SelectContainer from '../SelectForm/SelectContainer';
import InputForm from '../InputForm/InputForm'; 
import TextBlockForm from '../TextBlockForm/TextBlockForm';
import DefaultBtn from '../../../Buttons/DefaultBtn/DefaultBtn';
import shortLeft from '../../../../assets/icons/shortLeft.svg';
import '../forms.scss';

const NewOfferForm = ({onClickHandler, theme}) => {
  const [offerNameValue, setOfferNameValue] = useState('');
  const [offerUrlValue, setOfferUrlValue] = useState('');
  const [offerNetwork, setOfferNetwork] = useState('');
  const [errors, setErrors] = useState([]);

  const changeOfferName = (e) => {
    setErrors([]);
    setOfferNameValue(e.currentTarget.value);
  };

  const checkErrors = () => {
    const errors = [];

    if (offerNameValue.length > 16) {
      setErrors(errors => [...errors, 'offerNameValue']);
      errors.push({fieldName: 'offer name', error: 'длина имени не должна превышать 16 символов'});
    }

    if (offerNameValue === '') {
      setErrors(errors => [...errors, 'offerNameValue']);
      errors.push({fieldName: 'offer name', error: 'поле offer name должно быть заполнено'});
    }

    if (offerUrlValue === '') {
      setErrors(errors => [...errors, 'offerUrlValue']);
      errors.push({fieldName: 'offer url', error: 'поле offer url должно быть заполнено'});
    }

    return errors;
  };

  const changeOfferUrl = (e) => {
    setErrors([]);
    setOfferUrlValue(e.currentTarget.value);
  };

  const changeOfferNetwork = (value) => {
    setOfferNetwork(value);
  };

  const onClickBtn = () => {
    const errors = checkErrors();

    if (errors.length > 0) return;
    
    onClickHandler(offerNameValue, offerUrlValue, offerNetwork);
    setOfferNameValue('');
    setOfferUrlValue('');
    setOfferNetwork('')
  };

  return (
    <div className={theme === 'dark' ? 'form form_dark' : 'form'}>
      <div className='form-inputs_block'>
        <div className='form-inputs_block-wrapper'>
          <div className='form-inputs_block__text'>Offer name</div>
          <InputForm value={offerNameValue} 
                     placeholder='Up to 16 symbols' 
                     onChangeHandler={changeOfferName}
                     isError={errors.includes('offerNameValue')} />
        </div>

        <div className='form-inputs_block-wrapper'>
          <div className='form-inputs_block__text'>Offer URL</div>
          <InputForm value={offerUrlValue} 
                     placeholder='URL' 
                     onChangeHandler={changeOfferUrl}
                     isError={errors.includes('offerUrlValue')} />
        </div>
        <div className='form-inputs_block-wrapper'>
          <div className='form-inputs_block__text'>Network</div>
          <SelectContainer type='network' onSelectHandler={changeOfferNetwork} selectTitle={offerNetwork} />
        </div>
      </div>

      <div className='form_info'>
        <TextBlockForm iconURL={shortLeft} 
                       text='Free installs with offers from '
                       linkText='LordOfApps Network'
                       linkURL='#'
                       theme={theme} />
        <DefaultBtn value='Add a new outside offer' onClickHandler={onClickBtn} type='middle' />
      </div>
    </div>
  );
};

export default NewOfferForm;