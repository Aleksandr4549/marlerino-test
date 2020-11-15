import './defaultBtn.scss';

const DefaultBtn = ({value, onClickHandler, type='short'}) => {
  return (
    <div className={`default_btn default_btn_${type}`}>
      <button onClick={onClickHandler}>{value}</button>
    </div>
  );
};

export default DefaultBtn;