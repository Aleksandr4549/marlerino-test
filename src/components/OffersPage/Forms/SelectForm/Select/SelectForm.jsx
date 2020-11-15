import '../selectForm.scss';

const SelectForm = ({values, title, iconUrl, onSelectHandler, isOpen, toggleIsOpen, isBurger}) => {
  const onClickHandler = (value) => {
    onSelectHandler(value);
  };

  return (
    <div className='select'>
      <div className='select__list' onClick={toggleIsOpen}>
        {isBurger && <div className='select__list__burger'></div>}
        <p className='select__list__title'>{title}</p>
        <img className={isOpen ? 'select__list__arrow__open' : 'select__list__arrow'} src={iconUrl} alt='arrow' />
        <div className={isOpen ? 'select__list__content select__list__content_visible' : 'select__list__content'}>

        {values.length > 0 && values.map((value) => (
          <div key={value.id} onClick={() => onClickHandler(value.name)}>{value.name}</div>))}
        </div>
      </div>
    </div>
  );
};

export default SelectForm;