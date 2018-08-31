function checkDate(date, dateOfBirdth) {
    let years = date.getFullYear() - dateOfBirdth.getFullYear().toFixed(0);
    if(date.getMonth() < dateOfBirdth.getMonth()){
        years--;
    } else if(date.getDay() < dateOfBirdth.getDay()){
        years--;
    }
    return years;
}

function usersAge(){
    let dateOfBirdth = new Date(prompt('Enter when you was born in format YYYY-MM-DD \n Example: 1994-02-18',''));
    let date = new Date(Date.now());

    console.log(date);
    console.log(date.getMonth());
    console.log(dateOfBirdth.getMonth());

    let years = checkDate(date, dateOfBirdth);

    return alert(`Your age is: ${years}`);
}

usersAge()