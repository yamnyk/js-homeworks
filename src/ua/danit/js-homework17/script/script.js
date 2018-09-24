$(document).ready(function () {
   randomColor();
   circlesMess();
});

function randomColor() {
    let num1 = Math.floor(Math.random() * 256)+1;
    let num2 = Math.floor(Math.random() * 256)+1;
    let num3 = Math.floor(Math.random() * 256)+1;
    let num4 = Math.random()+0.3;
    return `${num1}, ${num2}, ${num3}, ${num4}`;
}

function circlesMess(){
    $('#inputSize').hide();
    $('#btn-sbmt').hide();

    $('#first-btn').click(function () {
        $(this).hide();
        $('#inputSize').fadeIn();
        $('#btn-sbmt').fadeIn();
    });

    $('#btn-sbmt').click(function () {
        let radius = $('#inputSize')[0].value;
        let circles = $(document.createDocumentFragment());
        let arrayOfCircles = [];
        for (let i = 0; i < 100; i++) {
            $('#circles').append($(document.createElement('div')).addClass('gogi').css({
                display : 'inline-block',
                width: `${radius}px`,
                height: `${radius}px`,
                backgroundColor: `rgba(${randomColor()})`,
                borderRadius: '50%',
                margin: '10px',
                opacity: 1,
                transition : 'opacity 0.2s'
            }));
        }
        $('#btn-sbmt').fadeOut();
    });

    $('#circles').click(function (e) {
        if(e.target.classList.contains('gogi')){
            e.target.style.opacity = 0;
        }
    });
}


