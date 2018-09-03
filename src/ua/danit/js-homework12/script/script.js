function drawCircle() {
    let radius = document.getElementById('circle-radius');
    let color = document.getElementById('circle-color');

    if(!isNaN(+radius.value)){
        document.getElementById('circle-create').style.display = 'none';
        let fragment = document.createDocumentFragment();
        let circle = document.createElement('div');

        circle.style = `width: ${radius.value}px; 
        height: ${radius.value}px; 
        background-color: ${color.value}; 
        border-radius: 50%; 
        margin-top: 8px`;

        fragment.appendChild(circle);
        document.body.insertBefore(fragment, document.getElementById('circle-create'));
    } else {
        alert('Wrong radius! You must enter the number of pixels!');
    }
}

function showInputs() {
    document.getElementsByClassName('circle')[0].style.display = 'none';
    let fragment = document.createDocumentFragment();
    let radius = document.createElement('input');
    let color = document.createElement('input');
    let submit = document.createElement('button');

    radius.placeholder = 'Input the radius of circle in px';
    radius.style.display = 'block';
    radius.style.width = '30vw';
    radius.id = 'circle-radius';
    color.placeholder = 'Input the color of circle';
    color.style.width = '30vw';
    color.style.display = 'block';
    color.id = 'circle-color';
    submit.innerHTML = 'DRAW';
    submit.style.display = 'block';
    submit.style.marginTop= '8px';
    submit.id = 'circle-create';

    fragment.appendChild(radius);
    fragment.appendChild(color);
    fragment.appendChild(submit);

    document.body.insertBefore(fragment, document.getElementsByClassName('circle')[0]);

    document.getElementById('circle-create').onclick = drawCircle;
}

let button = document.getElementsByClassName('circle')[0];
button.onclick = showInputs;