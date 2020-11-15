import '../forms.scss';

const TextBlockForm = ({iconURL, text, linkText, linkURL, theme}) => {
  return (
    <div className='form_info__text'>
      <div className='form_info__text__icon'>
        <img src={iconURL} alt='icon' />
      </div>
      <div className={theme === 'dark' ? 'form_info__text__link form_info__text__link_dark' 
                                         : 'form_info__text__link'}>
        <span>{text}</span>
        <a href={linkURL}>{linkText}</a>
      </div>   
    </div>
  );
};

export default TextBlockForm;