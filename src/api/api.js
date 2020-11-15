import axoios from 'axios';

export const instance = axoios.create({
  //дефолтные настройки axios
  baseURL: 'https://rickandmortyapi.com/api/',
});