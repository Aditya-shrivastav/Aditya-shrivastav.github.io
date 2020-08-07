var obj = document.querySelector('.about');
var html = document.getElementById("HTML");   
var css = document.getElementById('CSS');
var js = document.getElementById('js');
var py = document.getElementById('python');

obj.addEventListener("scroll",move(html,html.innerHTML));
obj.addEventListener("scroll",move(css,css.innerHTML));
obj.addEventListener("scroll",move(js,js.innerHTML));
obj.addEventListener("scroll",move(py,py.innerHTML));

function move(elem,percent) {
    var width = 0;
    var id = setInterval(frame, 35);
    function frame() {
        if (width >= percent) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1  + '%';
        }
    }
}