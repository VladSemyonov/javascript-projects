function getArticle(items){
  let articleMap = document.getElementById('articleMap');
  items.map((item, index)=>articleMap.innerHTML+=`<div class='small-article'>
                                                    <div class="box">
                                                        <button class="article-btn" onclick=toggle(${index}) id=${index}>Показать</button>
                                                        <h2>${item.title}</h2>
                                                        <div class='article-description' value=false id=${index}>
                                                            <img src=${item.img}>
                                                            <p>${item.text}</p>
                                                        </div>
                                                    </div>
                                                  </div>`)
}

function toggle(n) {
  let divs = document.getElementsByClassName('article-description');
  divs[n].value = !divs[n].value;
  showArticle(n, divs[n]);
  changeButton(n, divs[n])}

function showArticle(a, item) {
  item.value ? item.style.display = 'block' : item.style.display = 'none'
}

function changeButton(a, item) {
    let btn = document.getElementsByClassName('article-btn');
    item.value ? btn[a].innerText='Скрыть' : btn[a].innerText='Показать'
}

 const articles = [
  {
    title:"В Черном море обнаружили единственную в мире подводную реку.",
    text:"Река переносит колоссальные объемы воды – 22 000 м3/сек. Если бы эта река находилась на суше, то занимала бы шестое место в мире по этому показателю. Водный поток образован проникновением через пролив Босфор более соленой воды Мраморного моря в менее соленую среду Черного моря.",
  img:""},
  {
    title:"Из шести мужских монастырей в мире, которые имеют статус лавры, три находятся в Украине.",
    text:"Это Свято-Успенская Киево-Печерская Лавра в Киеве, Свято-Успенская Лавра в Почаеве и Святогорская Свято-Успенская Лавра в Донецкой области.",
    img:"img/slides/kplavra.jpg"
  },
  {
    title:"Первый вуз.",
    text:"Острожская академия – первое высшее учебное заведение в Восточной Европе, старейшее украинское научно-образовательное учреждение. В 1576 году князь Острожский Константин-Василий основал славяно-греко-латинскую академию в Остроге.",
    img:""
  },
  {
    title:"Самая глубокая станция метро.",
    text:"Станция метро «Арсенальная» в Киеве – самая глубокая в мире. Она проходит под землей на глубине 105 м. Станцию ​​у здания парламента построили в 1960 г. одной из первых. По некоторым данным, в туннелях возле «Арсенальной» есть тайные убежища для политической верхушки.",
    img:""
  },
  {
    title:"Первая Конституция.",
    text:"Автор одной из первых в мире Конституций – украинский политический и общественный деятель Пилип Орлик. 5 апреля 1710 г. он был избран гетманом Запорожского войска. В этот же день Пилип Орлик объявил «Конституцию прав и свобод войска Запорожского». В США Конституцию приняли в 1787 г., во Франции и Речи Посполитой– только в 1791 г. Интересен тот факт, что Пилип Орлик родился на территории Беларуси – в д. Косута Ошмянского повета.",
    img:""
  },
]
getArticle(articles)

function addNewArticle() {
  let b = document.getElementById('ex').value;
  let a = document.getElementById('article-text').value;
  let c = ''
  let ob = {
    title: b,
    text: a,
    img:c
  }
  articles.push(ob)
  let articleMap = document.getElementById('articleMap')
  articleMap.innerHTML = ''
  document.getElementById('ex').value = ''
  document.getElementById('article-text').value = ''
  getArticle(articles)
}
