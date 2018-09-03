function randomColor() {
    let num1 = Math.floor(Math.random() * 256)+1;
    let num2 = Math.floor(Math.random() * 256)+1;
    let num3 = Math.floor(Math.random() * 256)+1;
    let num4 = Math.floor(Math.random() * 101)+1;
    return `${num1}, ${num2}, ${num3}, ${num4}`;
}

function disappear(element) {
    element.style.display = 'none';
    return element;
}

function oneCircle(rad) {
    let circle = document.createElement('div');

    circle.className = 'circle-created';
    circle.style = `width: ${rad}px; 
        height: ${rad}px;
        display: inline-block; 
        background-color: rgba(${randomColor()}); 
        border-radius: 50%;
        opacity: 1;
        margin: 8px`;

    return circle;
}

function drawCircle() {
    let radius = document.getElementById('circle-radius');

    if(!isNaN(+radius.value)){
        document.getElementById('circle-create').style.display = 'none';
        let fragment = document.createDocumentFragment();

        for (let i = 0; i < 101; i++) {
            fragment.appendChild(oneCircle(radius.value));
        }

        document.body.insertBefore(fragment, document.getElementById('circle-create'));
    } else {
        alert('Wrong radius! You must enter the number of pixels!');
    }

    document.body.addEventListener('click', function (el) {
        if(el.target.classList.contains('circle-created')){
            el.target.classList.add('disappear');
            el.target.style = `width: ${radius.value}px; 
            height: ${radius.value}px;
            color: rgba(0,0,0,0);
            display: inline-block;
            margin: 8px`;
        }
    })

}

function showInputs() {
    document.getElementsByClassName('circle')[0].style.display = 'none';
    let fragment = document.createDocumentFragment();
    let radius = document.createElement('input');
    let submit = document.createElement('button');

    radius.placeholder = 'Input the radius of circle in px';
    radius.style.display = 'block';
    radius.style.width = '30vw';
    radius.id = 'circle-radius';
    submit.innerHTML = 'DRAW';
    submit.style.display = 'block';
    submit.style.marginTop= '8px';
    submit.id = 'circle-create';

    fragment.appendChild(radius);
    fragment.appendChild(submit);

    document.body.insertBefore(fragment, document.getElementsByClassName('circle')[0]);

    document.getElementById('circle-create').onclick = drawCircle;
}

let button = document.getElementsByClassName('circle')[0];
button.onclick = showInputs;