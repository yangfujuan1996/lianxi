// imqq   js文件



// 点击当前页面
document.onclick = function(){
    // alert('hh')
    pic1.className = pic1.dataset.name;
    pic3.className = pic3.dataset.name;


    console.log(document.documentElement.scrollTop)
}


// 当页面滚动时触发的事件
window.onscroll = function(){
    var num = document.documentElement.scrollTop;
    if(num > 3500){
        pic1.className = pic1.dataset.name;
        pic3.className = pic3.dataset.name;
    }else{
        pic1.className = pic1.dataset.name + ' init';
        pic3.className = pic3.dataset.name + ' init';
    }
    bg1.style.backgroundPositionY = num/50 - 20 + 'px';

}