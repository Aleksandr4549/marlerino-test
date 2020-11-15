import promo from '../../../assets/images/promo.jpg';
import './promo.scss';

const Promo = ({theme}) => {
  return (
    <div className={theme === 'dark' ? 'promo promo_dark' : 'promo'}>
      <img className='promo-img' src={promo} alt='promo' />
    </div>
  );
};

export default Promo;