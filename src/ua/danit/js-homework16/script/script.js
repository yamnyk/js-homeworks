window.onload = function () {
    if(localStorage.getItem('flag') === 'bright') {
        document.head.getElementsByTagName('link')[document.head.getElementsByTagName('link').length-1].outerHTML = '<link rel="stylesheet" href="css/style.css">';
    } else if (localStorage.getItem('flag') === 'dark'){
        document.head.getElementsByTagName('link')[document.head.getElementsByTagName('link').length-1].outerHTML = '<link rel="stylesheet" href="css/style-dark.css">';
    }
};

document.getElementById("theme").onclick = function () {
    if(localStorage.getItem('flag') === 'bright') {
        document.head.getElementsByTagName('link')[document.head.getElementsByTagName('link').length-1].outerHTML = '<link rel="stylesheet" href="css/style-dark.css">';
        localStorage.setItem('flag',`dark`)
    } else if (localStorage.getItem('flag') === 'dark'){
        document.head.getElementsByTagName('link')[document.head.getElementsByTagName('link').length-1].outerHTML = '<link rel="stylesheet" href="css/style.css">';
        localStorage.setItem('flag',`bright`)
    }
};