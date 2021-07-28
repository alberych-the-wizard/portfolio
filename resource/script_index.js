var main_content = document.getElementsByClassName('main_content')[0];
var size_window = ((main_content.children.length) * 100);
main_content.style.width = size_window + '%';
let y = 0
alert(size_window);
/*var info_code = document.getElementsByClassName('info_code')[0];
info_code.innerHTML = "<p> O valor do Scroll é: " + y + "</p>\n"; */
function scroll_horizontal(event){
    let dY = (event.deltaY * 0.01);
    let speed = 33.33;
    //y = y +1;
    if(dY == 1){
        if(y >= (size_window - 100)){
            y = (size_window - 100);
        }
        else{
            y = y + speed;
        }
        
    }
    else{
        if(y < 0){
            y = 0;
        }
        else{
            y = y - speed;
        }
    }
    main_content.style.left = '-' + y + '%';
    //info_code.innerHTML = "<p> O valor do Scroll é: " + y + "</p>\n"; 
}
window.addEventListener('wheel', function() {
    scroll_horizontal(event);
});