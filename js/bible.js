const quotes = [
{
    quote: "아무 것도 염려하지 말고 오직 모든 일에 기도와 간구로 너희의 구할 것을 감사함으로 하나님께 아뢰라. 그리하면 모든 이해를 뛰어넘는 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지킬 것이다.",
    author: "빌립보서 4장 6-7절",
},
{
    quote: "내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것이니, 주께서 나와 함께 하심이라. 주의 지팡이와 목장이 나를 안위하시나이다.",
    author: "시편 23장 4절",
},
{
    quote: "이것을 말한 것은 내 안에서 너희가 평안을 얻게 하려는 것이다. 세상에서는 너희가 환난을 겪겠지만, 담대하라. 내가 세상을 이겼노라.",
    author: "요한복음 16장 33절",
},
{
    quote:"우리가 알거니와 하나님을 사랑하는 자, 곧 그 뜻대로 부르심을 받은 자들에게는 모든 것이 합력하여 선을 이루느니라.",
    author:"로마서 8장 28절",
},
{
    quote:"하나님은 우리의 피난처시요 힘이시니, 환난 중에 심히 가까운 도움이 되시도다. 그러므로 우리는 땅이 변하여도, 산이 바다 가운데 빠져도 두려워하지 않으리로다.",
    author:"시편 46장 1-2절",
},
{
    quote:"수고하고 무거운 짐 진 자들아 다 내게로 오라. 내가 너희를 쉬게 하리라. 내 멍에를 메고 내게 배우라. 나는 마음이 온유하고 겸손하니 너희 마음이 쉼을 얻으리라.",
    author:"마태복음 11장 28-30절",
},
{
    quote:"두려워하지 말라. 내가 너와 함께 함이니라. 놀라지 말라. 나는 너의 하나님이 됨이니라. 내가 너를 굳세게 하리라. 참으로 너를 도와주리라. 참으로 내 의의 오른손으로 너를 붙들리라.",
    author:"이사야 41장 10절",
},
{
    quote:"여호와께서는 상한 마음을 가진 자들에게 가까이 계시고, 심령이 깨진 자들을 구원하시는도다.",
    author:"시편 34장 18절",
},
{
    quote:"그러므로 우리는 낙심하지 않으나, 우리의 겉사람은 쇠약해져 가도 우리 안의 사람은 날로 새로워지도다. 우리의 잠깐 동안의 가벼운 고난이 우리에게 영원히 무게를 뛰어넘는 영광을 이루어 줄 것이다.",
    author:"고린도후서 4장 16-18절",
},
{
    quote:"내 형제들아, 너희가 여러 가지 시험에 빠질 때에는 이것을 온전한 기쁨으로 여기라. 너희가 알거니와 너희 믿음의 시험은 인내를 낳는다. 그러나 인내가 온전한 일을 이루게 하여 너희로 온전하고 흠이 없으며 부족함이 없게 하라.",
    author:"야고보서 1장 2-4절",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function randomIndex(){
    const index = Math.floor(Math.random() * quotes.length); 
    // ceil(), parseInt(), round()
    quote.innerText = quotes[index].quote;
    author.innerText = quotes[index].author;
}

randomIndex();