let part = document.getElementsByClassName('part');
let smallIcon = document.getElementById('smallIcon')
let textInfo = document.getElementById('textInfo');
let kicon = document.getElementById("kicon")
const modalBtn = document.getElementById('modal-btn')
const mwindow = document.getElementsByClassName('modal')[0]
const closeIcon = document.getElementById('close-icon')

const pics = [
    {name: "kherson",   text: "Хероснская область, с центром в Херсоне"},
    {name:"zaporozhe",   text:"Запорожская область, с центром в Запорожье"},
    {name:"donetsk",   text:"Донецкая область, с центром в Донецке"},
    {name:"luhansk",  text:"Луганская область, с центром в Луганске"},
    {name:"kharkov",   text:"Харьковская область, с центром в Харькове"},
    {name: "kiev",   text: "Киевская область, с центром в Киев"},
    {name:"odessa",   text:"Одесская область, с центром в Одессе"},
    {name:"cherkassy",   text:"Черкасская область, с центром в Черкассах"},
    {name:"chernihov",   text:"Черниговская область, с центром в Чернигове"},
    {name:"sumy",   text:"Сумская область, с центром в Суммах"},
    {name: "kirovohrad",   text: "Кировоградская область, с центром в Кропивницком"},
    {name:"khmelnitsky",  text:"Хмельницкая область, с центром в Хмельницком"},
    {name:"krym",   text:"Автономная республика Крым, с центром в Севастополе"},
    {name:"lvov",   text:"Львовская область, с центром во Львове"},
    {name:"jitomir",   text:"Житомирская область, с центром в Житомире"},
    {name: "poltava",   text: "Полтава область, с центром в Полтаве"},
    {name:"vinnitsa",   text:"Винницкая область, с центром в Виннице"},
    {name:"ifrankovsk",   text:"Ивано- Франковская область, с центром в Ивано- Франковске"},
    {name:"rovno",   text:"Ровенская область, с центром в Ровно"},
    {name:"ternopol",   text:"Тернопольская область, с центром в Тернополе"},
    {name: "lutsk",   text: "Волынская область, с центром в Луцке"},
    {name:"chernovtsy",   text:"Черновецкая область, с центром в Черновцах"},
    {name:"ujhorod",   text:"Закарпатская область, с центром в Ужгороде"},
    {name:"dnepr",   text:"Днепропетровская область, с центром в Днепре"},
    {name:"nikolaev",   text:"Николаевская область, с центром в Николаеве"}
]

closeIcon.onclick = function() {
  smallIcon.style.display = 'none'
}

modalBtn.onclick = function () {
  mwindow.style.display = 'none';
}

for (var i = 0; i < part.length; i++) {
  part[i].onmouseover = function (event) {
      for (let a of part)
          if (event.target === a) {
            let menuS = new Audio;
            menuS.src = 'menu.wav';
            menuS.play();
}
}
part[i].onclick = function(event) {
    const conte = document.getElementsByClassName('conte')[0]

    let pic = pics.find(item => item.name === event.target.id)
    textInfo.textContent = pic.text;
    kicon.src = pic.url;

    let map = new Map(Object.entries(states));
    for(let i of map){
        if(event.target.id===i[0])
            kicon.src=i[1]
    }

    if(event.clientY<243){
      smallIcon.style.top = event.y + "px";
      smallIcon.style.left = event.x - 50 + "px";
      smallIcon.style.height = "250px";
      smallIcon.style.display = "block";
      smallIcon.style.transform = "rotate(0.5turn)"
      conte.style.transform = "rotate(0.5turn)"
      conte.style.marginTop = '20px'
      closeIcon.style.bottom = '45px'
      closeIcon.style.left = '23px'
    }else {
      conte.style.transform = "rotate(0turn)"
      smallIcon.style.transform = "rotate(0turn)"
      smallIcon.style.top = event.y - 260 + "px";
      smallIcon.style.left = event.x - 215 + "px";
      smallIcon.style.height = "250px";
      smallIcon.style.display = "block";
      conte.style.marginTop= '3px'
      closeIcon.style.bottom = '220px'
      closeIcon.style.left = '193px'
    }
  }
}

const states = {
   kirovohrad: 'img/kirovohrad.png',
   cherkassy: 'img/cherkassy.png',
   chernihov: 'img/chernihov.png',
   chernovtsy: 'img/chernovtsy.gif',
   donetsk: 'img/donetsk.png',
   ifrankovsk: 'img/ifrankovsk.png',
   jitomir: 'img/jitomir.jpg',
   kharkov: 'img/kharkov.png',
   kherson: 'img/kherson.png',
   khmelnitsky: 'img/khmelnitsky.png',
   kiev: 'img/kiev.png',
   krym: 'img/krym.png',
   luhansk: 'img/luhansk.png',
   lutsk: 'img/lutsk.gif',
   lvov: 'img/lvov.png',
   nikolaev: 'img/nikolaev.png',
   odessa: 'img/odessa.png',
   poltava: 'img/poltava.png',
   rovno: 'img/rovno.gif',
   sumy: 'img/sumy.png',
   ternopol: 'img/ternopol.png',
   ujhorod: 'img/ujhorod.gif',
   vinnitsa: 'img/vinnitsa.png',
   zaporozhe: 'img/zaporozhe.png',
   dnepr: 'img/dnepr.gif',
}
