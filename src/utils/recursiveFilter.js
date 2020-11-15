export const recursiveFilter = (arr, filters) => {
  //Функция принимает 1 аргументом массив объектов, которые нужно отфильтровать, 2 аргументом массив фильтров.
  //Каждый фильтр - это объект с 2 полями keyName и value. 
  //Если значение keyName совпадает с именем одного из полей объекта в массиве arr, а value совпадает с
  //значением этого поля или value имеет значение 'all' - объект проходит проверку. 
  //Функция возвращает новый массив, не мутируя входящий массив values

  //счётчик фильтров
  let counter = filters.length - 1;
  let newArr = arr;
  function filtrate () {
    if (counter === -1) {
      //фильтры применены. Выход из рекурсии.
      return;
    } else {
      const nameField = filters[counter].keyName;
      const valueField = filters[counter].value;
      if (valueField !== 'all') {
        //eсли value в фильтре === all - все объекты остаются в newValues
        newArr = newArr.filter(obj => obj[nameField].toLowerCase() === valueField.toLowerCase());
      }
      counter--;
      filtrate()
    }
  }
  filtrate();
  return newArr;
};