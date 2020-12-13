  let bg = document.getElementById('bg');
  let mountain = document.getElementById('mountain');
  let road = document.getElementById('road');
  let text = document.getElementById('text');

  window.addEventListener('scroll', function functionName() {
    var value = window.scrollY;
    bg.style.left = '-'+value *0.5 + 'px';
    mountain.style.top = value*0.9 + 'px';
    road.style.top = value * 0.1 + 'px';
    text.style.top = value * 2 +'px';
  })

const checkedRadio = document.getElementsByName('r');
const prev = document.getElementById('left-btn');
const next = document.getElementById('right-btn');
const bars = document.getElementsByClassName('bar');
let index = 0;

window.addEventListener('click', (e)=> {
    for (let i = 0; i < bars.length; i++) {
        e.target== bars[i] ? (index = i, setBarActive(index)) : {}
    }
})

window.addEventListener('scroll', ()=>{
  const elems = document.getElementsByClassName('side-menu');
  const navBar = document.getElementsByClassName('top-menu')[0]

  for(let a of elems){
    if(a.getBoundingClientRect().y<560){
      a.classList.add('_active')
    }
    if(a.getBoundingClientRect().y<0){
      a.classList.remove('_active')
    }
    if(a.getBoundingClientRect().y>620){
      a.classList.remove('_active')
    }
  }

  if(navBar.getBoundingClientRect().y<=0){
    navBar.style.position = 'fixed';
    navBar.style.top = '0'
  }
  if(pageYOffset<=document.documentElement.clientHeight){
    navBar.style.position = 'absolute';
    navBar.style.top = '101%'
  }
})

prev.onclick = prevSlide;
next.onclick= nextSlide;

function prevSlide() {
    if(index==0){
    index = checkedRadio.length-1;
        setSlide(index)}
    else {
      index--;
        setSlide(index)}
    }

function nextSlide() {
  if(index==checkedRadio.length-1){
    index = 0;
      setSlide(index)}
    else {
      index++;
      setSlide(index)}
  }

function setBarActive(i) {
  for (let bar of bars){
    bar.classList.remove('active')
  }
  bars[i].classList.add('active')
}

function setSlide(i) {
    setBarActive(i);
    checkedRadio[i].checked=true
}
