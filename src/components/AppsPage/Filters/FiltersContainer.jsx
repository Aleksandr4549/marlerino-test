import { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import { applyFilters, applySearch } from '../../../redux/reducers/apps-reducer';
import PushFilter from './PushFilter/PushFilter';
import Search from './Search/Search';
import Select from '../../OffersPage/Forms/SelectForm/SelectContainer';

const FiltersContainer = ({filters, applyFilters, applySearch}) => {
  const [searchValue, setSearchValue] = useState('');

  const selectCondition = (filterName, condition) => {
    applyFilters(filterName, condition)
  };

  const searchHandler = () => {
    applySearch(searchValue);
  };

  const onChangeHandler = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  useLayoutEffect(() => {
    searchHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div className='filters__container'>
      <Search value={searchValue} onChangeHandler={onChangeHandler} />
      <PushFilter filterName='gender' 
                  conditions={['all', 'male', 'female']} 
                  selectCondition={selectCondition}
                  selectedItem={filters.filter(item => item.keyName === 'gender')[0].value} />

      <PushFilter filterName='species' 
                  conditions={['all', 'human', 'alien']} 
                  selectCondition={selectCondition}
                  selectedItem={filters.filter(item => item.keyName === 'species')[0].value} />
      <Select type='offer' onSelectHandler={() => console.log('not handler')} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.appsPage.filters
  }
}

export default connect(mapStateToProps, {applyFilters, applySearch})(FiltersContainer);