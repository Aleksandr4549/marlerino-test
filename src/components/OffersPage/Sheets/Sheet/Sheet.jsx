import SheetLine from '../SheetLine/SheetLine';
import '../sheets.scss';

const Sheet = ({titles, sheetLines, onChange, type, theme}) => {
  let className;
  if (type === 'network' && theme === 'dark') {
    className = 'sheet sheet_network sheet_dark'
  } else if (type === 'offer' && theme === 'dark') {
    className = 'sheet sheet_offer sheet_dark'
  } else if (type === 'network') {
    className = 'sheet sheet_network'
  } else {
    className = 'sheet sheet_offer'
  }
  
  return (
    <div className={className}>
      <div className={theme === 'dark' ? 'sheet-titles sheet-titles_dark' : 'sheet-titles'}>
        {titles.length > 0 && titles.map((title, i) => <span key={i}>{title}</span>)}
      </div>
      <div className='sheet__content'>
        {sheetLines.length > 0 && sheetLines.map((line) => 
          <SheetLine key={line.id}
                     theme={theme}
                     id={line.id}
                     type={type}
                     name={line.name}
                     url={type === 'network' ? line.postbackURL : line.offerURL}
                     offerURLTemplate={type === 'network' ? line.offerURLTemplate : null}
                     networkName={type === 'offer' ? line.networkName : null}
                     date={line.date}
                     onChange={onChange} />
        )}
      </div>
    </div>
  );
};

export default Sheet;