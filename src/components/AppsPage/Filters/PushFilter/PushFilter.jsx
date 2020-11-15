import '../../appsPage.scss';

const PushFilter = ({filterName, conditions, selectCondition, selectedItem}) => {
  return (
    <div className='filters__container__btn__wrapper'>
      {conditions.length > 0 && conditions.map((condition, i) => {
        return <button className={selectedItem === condition 
          ? 'filters__container__btn filters__container__btn_active' 
          : 'filters__container__btn'} 
                       key={i} 
                       onClick={() => selectCondition(filterName, condition)}>{condition}
               </button>
      })}
    </div>
  );
};

export default PushFilter;