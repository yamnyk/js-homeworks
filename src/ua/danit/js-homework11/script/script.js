function gogi(){
    return document.getElementsByTagName('body')[0].innerHTML = '';
}
function insertingMenu() {
    let list = document.createElement('ul');
    document.body.insertBefore(list,document.body.getElementsByTagName('*')[0]);

    let numberOfLIs = prompt(`How much li's you need to add`,'');
    if(!numberOfLIs){
        return null;
    }

    while(!(+numberOfLIs > 0)){
        alert('You entered wrong number!');
        numberOfLIs = prompt(`How much li's you need to add`,'');
    }

    for (let i = 0; i < numberOfLIs; i++) {
        let li = document.createElement('li');
        li.innerHTML = `<a href="#">${prompt('Enter the name of list element','')}</a>`;
        document.body.getElementsByTagName("ul")[0].appendChild(li);
    }

    let time = 10;
    document.getElementById("timer").style.fontSize = '26px';
    let x = setInterval(function() {

        document.getElementById("timer").innerHTML = `You about to die in [${time}] seconds`;
        time--;

        if (time < 0) {
            clearInterval(x);
            gogi();
        }
    }, 1000);
}


let button = document.getElementsByClassName('add-menu')[0];
button.onclick = insertingMenu;
// setTimeout("alert('Привет')", 1000);


