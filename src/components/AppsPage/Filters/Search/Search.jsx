const Search = ({value, onChangeHandler}) => {
  return (
    <div>
      <input placeholder='Search' value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default Search;