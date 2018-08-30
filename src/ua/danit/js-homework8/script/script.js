function filterCollection(inputArray, keyWords, flag) {
     let keyWordsArray = keyWords.split(' ').map(word => word.toLowerCase());
     let properties = [].slice.call(arguments, 3, arguments.length).map(word => word.toLowerCase());
     console.log(keyWordsArray);
     console.log(properties);
    /**
     * перебираю каждое ключевое слово. Для каждого ключевого слова запускаю поиск по каждой из
     * свойств каждого из объектов. Если нашел хоть одно совпадение - возвращаю true для этого обхекта в фильр;
     * если совпадений в значениях свойства этого объекта не нашлось - возвращаю false для фильтра
     */
/
    function findProp(item) {
        for(prop in item){
            if(properties.includes(prop)){
                 return prop
            } else if(typeof prop === 'object') {
                 findProp(prop)
            }
        }
    }
    return inputArray.filter(function(el, ind, array){
          if(flag){

          } else {
               return inputArray.some(function (item) {
                   for(some in findProp(item)){

                   }
               })
          }
     })
}

console.log(filterCollection([],'Pop Lola gOgi ufufF', false,'Gogi', 'mogi', 'dodik'));