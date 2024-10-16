const bar_open =document.querySelector('.header-menu-bar')
const bar_close =document.querySelector('.header-menu-bar_close')
const root=document.getElementById('root')
const menuWrap=document.querySelector('.menuWrap')
bar_open.onclick=function(){
    root.style='display: none';
    menuWrap.style='transform: translateX(0%)'
}
bar_close.onclick=function(){
    menuWrap.style='transform: translateX(-100%)'
    root.style='display: block';
}