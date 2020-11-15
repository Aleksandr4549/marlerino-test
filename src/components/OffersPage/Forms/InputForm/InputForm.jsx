import '../forms.scss';

const InputForm = ({value, placeholder, onChangeHandler, theme, isError}) => {
  let className;
  if (theme === 'dark' && isError) {
    className = 'form-inputs_block__input form-inputs_block__input_dark form-inputs_block__input_error' 
  } else if (isError) {
    className = 'form-inputs_block__input form-inputs_block__input_error'
  } else if (theme === 'dark') {
    className = 'form-inputs_block__input form-inputs_block__input_dark' 
  } else {
    className = 'form-inputs_block__input'
  }

  return <input className={className} placeholder={placeholder} value={value} onChange={onChangeHandler} />
};

export default InputForm;