const quotes = [
{
    quote:"I never dreamed about success, I worked for it"
    ,quoteKorean:"나는 결코 성공에 대해 꿈꾸지 않았다, 나는 꿈을 위해 행동했다."
    ,author:"Estee Lauder"
},
{
    quote:"Do not try to be original, just try to be good."
    ,quoteKorean:"특별한 사람이 되려고 하지 말아라, 좋은 사람이 되도록 해라."
    ,author:"Paul Rand"
},
{
    quote:"Do not be afraid to give up the good to go for the great."
    ,quoteKorean:"더 좋은 것을 쫓기 위해 좋은 것을 버리는 것을 두려워하지 마라."
    ,author:"John D. Rockfeller"
},
{
    quote:"Don't let the fear of losing be greater than the excitement of winning."
    ,quoteKorean:"잃는다는 것에 대한 두려움이 이기는 전율보다 더 커지게 놔두지 마라."
    ,author:"Robert T. Kiyosaki"
},
{
    quote:"Action is the foundational key to all success."
    ,quoteKorean:"행동하는 것은 모든 성공의 기본적인 요소이다."
    ,author:"Pablo Picasso"
},
{
    quote:"You can waste your life drawing lines. Or you can live your life crossing them."
    ,quoteKorean:"당신은 자신의 한계선만 그리면서 인생을 낭비할 수도 있고, 그 한계선을 뛰어넘는 인생을 살 수도 있다."
    ,author:"Shonda Rhimes"
},
{
    quote:"You cannot change what you are, only what you do."
    ,quoteKorean:"본연의 모습은 바꿀 수 없다, 바꿀 수 있는 것은 자신의 행동 뿐."
    ,author:"Phillp Pullman"
},
{
    quote:"Change the way you look at things and the things you look at change."
    ,quoteKorean:"당신이 세상을 바라보는 방법을 바꾸면 당신이 보는 세상은 달라질 것이다."
    ,author:"Wayne Dyer"
},
{
    quote:"The greatest mistake you can make in life is to be continually fearing you will make one."
    ,quoteKorean:"당신이 인생에서 저지를 수 있는 가장 큰 실수는 실수를 할 까봐 두려워 한 것이다."
    ,author:"Elbert Hubbard"
},
{
    quote:"Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ,quoteKorean:"당신이 대면하는 모든 것들을 바꿀 수는 없다, 그러나 대면하지 않는다면 아무것도 바뀌지 않는다."
    ,author:"James Baldwin"
},];

const quote = document.querySelector("#quote span:first-child");
const quoteKorean = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
quoteKorean.innerText = todaysQuote.quoteKorean;
author.innerText = todaysQuote.author;