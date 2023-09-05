
//메뉴 탭 선택 시 색상 변경
const menuWrap = document.querySelector('#menuList');

function movePage(dis){
    window.scrollTo({ top: dis, behavior: "smooth" });
}

function select(ulEl, liEl){
    Array.from(ulEl.children).forEach(
        v => v.classList.remove('selected')
    )
    if(liEl.innerText === 'Profile') {
        liEl.classList.add('selected');
        movePage(330);
    }
    else if(liEl.innerText === 'Skills'){
        liEl.classList.add('selected');
        movePage(1080);
    }
    else if(liEl.innerText === 'Project'){
        liEl.classList.add('selected');
        movePage(1675);
    }
}

menuWrap.addEventListener('click', e => {
    const selected = e.target;
    select(menuWrap, selected);
})

//jQuery, 메뉴 바 스크롤 시 고정
$(document).ready(function(){
 
    var topMenu = $("#menu").offset();
 
    $(window).scroll(function(){
        
        var docScrollY = $(document).scrollTop()
        var barThis = $("#menu")
        var fixNext = $(".main-content")
 
        if( docScrollY > topMenu.top ) {
            barThis.addClass("top_bar_fix");
            fixNext.addClass("pd_top_80");
        }else{
            barThis.removeClass("top_bar_fix");
            fixNext.removeClass("pd_top_80");
        }
 
    });
 
})

//night&day mode
var Body = {
    setColor:function (color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
       //document.querySelector('body').style.backgroundColor = color;
       $('body').css('backgroundColor', color)
    }
}
var Links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color', color)
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('powderblue');
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');
    }
}

var slider = {};
slider.opacityIn = [0,1];
slider.scaleIn = [0.2, 1];
slider.scaleOut = 3;
slider.durationIn = 800;
slider.durationOut = 600;
slider.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '#slider .letters-1',
    opacity: slider.opacityIn,
    scale: slider.scaleIn,
    duration: slider.durationIn
  }).add({
    targets: '#slider .letters-1',
    opacity: 0,
    scale: slider.scaleOut,
    duration: slider.durationOut,
    easing: "easeInExpo",
    delay: slider.delay
  }).add({
    targets: '#slider .letters-2',
    opacity: slider.opacityIn,
    scale: slider.scaleIn,
    duration: slider.durationIn
  }).add({
    targets: '#slider .letters-2',
    opacity: 0,
    scale: slider.scaleOut,
    duration: slider.durationOut,
    easing: "easeInExpo",
    delay: slider.delay
  }).add({
    targets: '#slider .letters-3',
    opacity: slider.opacityIn,
    scale: slider.scaleIn,
    duration: slider.durationIn
  }).add({
    targets: '#slider .letters-3',
    opacity: 0,
    scale: slider.scaleOut,
    duration: slider.durationOut,
    easing: "easeInExpo",
    delay: slider.delay
  }).add({
    targets: '.slider',
    opacity: 0,
    duration: 500,
    delay: 500
  });