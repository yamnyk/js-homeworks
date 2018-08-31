function checkDate(date, dateOfBirdth) {
    let years = date.getFullYear() - dateOfBirdth.getFullYear();
    if(date.getMonth() < dateOfBirdth.getMonth()){
        years--;
    } else if(date.getMonth() === dateOfBirdth.getMonth() && date.getDay() > dateOfBirdth.getDay()){
        years--;
    }
    return years;
}

function usersAge(){
    let dateOfBirdth = new Date(prompt('Enter when you was born in format DD-MM-YYYY \n Example: 12-08-1969',''));
    let date = new Date(Date.now());

    console.log(date);
    console.log(date.getMonth());
    console.log(dateOfBirdth.getMonth());

    let years = checkDate(date, dateOfBirdth);

    return alert(`Your age is: ${years}`);
}

usersAge();