function getZodiacSign(day, month) {
    console.log(`fuching date is - ${month}-${day}`);

    var zodiacSigns = {
        'capricorn':'Capricorn',
        'aquarius':'Aquarius',
        'pisces':'Pisces',
        'aries':'Aries',
        'taurus':'Taurus',
        'gemini':'Gemini',
        'cancer':'Cancer',
        'leo':'Leo',
        'virgo':'Virgo',
        'libra':'Libra',
        'scorpio':'Scorpio',
        'sagittarius':'Sagittarius'
    }

    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
        return zodiacSigns.capricorn;
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return zodiacSigns.aquarius;
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return zodiacSigns.pisces;
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return zodiacSigns.aries;
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return zodiacSigns.taurus;
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return zodiacSigns.gemini;
    } else if((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return zodiacSigns.cancer;
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return zodiacSigns.leo;
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return zodiacSigns.virgo;
    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return zodiacSigns.libra;
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return zodiacSigns.scorpio;
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return zodiacSigns.sagittarius;
    }
}

function chinaZodiac(yearOfBirth) {
    let toyear = 1997;
    let birthpet="Ox";

    x = (toyear - yearOfBirth) % 12;
    if ((x == 1) || (x == -11)) {
        birthpet="Mouse"
    } else if (x == 0) {
        birthpet="Ox"
    } else  if ((x == 11) || (x == -1)) {
        birthpet="Tiger"
    } else if ((x == 10) || (x == -2)) {
        birthpet="Rabbit"
    } else if ((x == 9) || (x == -3)) {
        birthpet="Dragon"
    } else if ((x == 8) || (x == -4)) {
        birthpet="Snake"
    } else if ((x == 7) || (x == -5)) {
        birthpet="Horse"
    } else if ((x == 6) || (x == -6)) {
        birthpet="Sheep"
    } else if ((x == 5) || (x == -7)) {
        birthpet="Monkey"
    } else if ((x == 4) || (x == -8)) {
        birthpet="Chicken"
    } else if ((x == 3) || (x == -9)) {
        birthpet="Dog"
    } else if ((x == 2) || (x == -10)) {
        birthpet="Pig"
    }

    return birthpet;
}

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
    let badDate = prompt('Enter when you was born in format DD-MM-YYYY \n Example: 12-08-1969','').split('-');

    console.log(`${badDate[2]}-${badDate[1]}-${badDate[0]}`);

    let dateOfBirdth = new Date(`${badDate[2]}-${badDate[1]}-${badDate[0]}`);
    let date = new Date(Date.now());

    console.log(date);
    console.log(date.getMonth());
    console.log(dateOfBirdth);
    console.log(dateOfBirdth.getDay());

    let zod = getZodiacSign(badDate[0], dateOfBirdth.getMonth()+1);
    let chinaZod = chinaZodiac(dateOfBirdth.getFullYear());
    let years = checkDate(date, dateOfBirdth);

    return alert(`Your age is: ${years} \n Your zodiac sign is - ${zod} \n Your chinese zodiac sign is - ${chinaZod}`);
}

usersAge();