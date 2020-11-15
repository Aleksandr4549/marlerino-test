import DefaultBtn from '../../Buttons/DefaultBtn/DefaultBtn';
import '../appsPage.scss';

const Card = ({imgUrl, name, gender}) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <img src={imgUrl} alt='avatar' />
      <p>{gender}</p>
      <DefaultBtn value='text' type='long' />
    </div>
  );
};

export default Card;