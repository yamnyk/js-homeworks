function filterCollection(inputArray, keyWords, flag) {
    let keyWordsArray = keyWords.split(' ').map(word => word.toLowerCase());
    let propertiesToSearch = [].slice.call(arguments, 3, arguments.length).map(word => word.toLowerCase());
    console.log(keyWordsArray);
    console.log(propertiesToSearch);

    return inputArray.filter(function(el, ind, array){
        if(flag){
            return findMatchesInPropsALL(el, propertiesToSearch, keyWords);
        } else {
            return findMatchesInPropsANY(el, propertiesToSearch, keyWords);
        }
    })
}

function includesIntoProps(el, property) {
    if(property.indexOf('.') === -1){
        return el[property] !== undefined ? el[property] : false;
    } else {
        let propList = property.split('.');
        //TODO: how I cat get recursively into last prop of the chain...
        //smth like this `[${prop.split('.').join('][')}]`
        let tempObj = obj;
        for (let i = 0; i < propList.length; i++) {
            if(i === propList.length-1 && tempObj[propList[i]] !== undefined) {
                return tempObj[propList[i]];
            } else if(typeof tempObj === 'object'){
                if(tempObj[propList[i]] === undefined) {
                    return false
                } else {
                    tempObj = tempObj[propList[i]]
                }
            } else if(typeof tempObj !== 'object') {
                return false
            }
        }
    }
}

function findMatchesInPropsALL(el, propertiesToSearch, keyWords) {
    let counterOfMatchedKeywords = 0;

    //FOR EVERY PROPERTY
        //find out if this property includes into propertiesToSearch with includesIntoProps()
        //if FALSE: next property
        //if TRUE:
            //FOR EVERY KEYWORD
            //find out if this property include this keyword
                //if TRUE: counterOfMatchedKeywords++
                //if FALSE: next keyword

    return counterOfMatchedKeywords === keyWords.length;
}

function findMatchesInPropsANY(el, propertiesToSearch, keyWords) {
    //FOR EVERY PROPERTY:
        // find out if this includes into propertiesToSearch with includesIntoProps()
        //TRUE: find any matches with keyWords array
                    //if its match - return true
                    //if there is NO matches - return false
        //FALSE: return false
    return undefined;
}

console.log(filterCollection([],'Pop Lola gOgi ufufF', false,'Gogi', 'mogi', 'dodik'));