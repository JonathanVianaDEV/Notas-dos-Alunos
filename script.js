const maxPoints = 120;
const passingPoints = 70;
let alexPoints = 45;
const jessiePoints = 99;
const samPoints = 84;
let didAlexPass = false;
// pontos feitos 
const samPointsDisplay = "Sam fez " + samPoints + " pontos de " + maxPoints;
console.log(samPointsDisplay);
const alexPointsDisplay = "Alex fez " + alexPoints + " pontos de " + maxPoints;
console.log(alexPointsDisplay);
const jessiePointsDisplay = "Jessie fez " + jessiePoints + " pontos de " + maxPoints;
console.log(jessiePointsDisplay);
// porcentagem
const samPercentage = (samPoints/maxPoints)*100;
const samPercentDisplay = "Sam fez " + samPercentage + "%.";
console.log(samPercentDisplay);
const alexPercentage = (alexPoints/maxPoints)*100;
const alexPercentDisplay = "Alex fez " + alexPercentage + "%.";
console.log(alexPercentDisplay);
const jessiePercentage = (jessiePoints/maxPoints)*100;
const jessiePercentDisplay = "Jessie fez " + jessiePercentage + "%.";
console.log(jessiePercentDisplay);
// pontos perdidos
const samMissedPoints = (maxPoints - samPoints);
const samMissedPointsDisplay = "Sam perdeu " + samMissedPoints + " ponto(s).";
console.log(samMissedPointsDisplay);
const alexMissedPoints = (maxPoints - alexPoints);
const alexMissedPointsDisplay = "Alex perdeu " + alexMissedPoints + " ponto(s).";
console.log(alexMissedPointsDisplay);
const jessieMissedPoints = (maxPoints - jessiePoints);
const jessieMissedPointsDisplay = "Jessie perdeu " + jessieMissedPoints + " ponto(s).";
console.log(jessieMissedPointsDisplay);
// média percentual
const classAveragePoints = (alexPoints + samPoints + jessiePoints) / 3;
const classAveragePercent = (classAveragePoints / maxPoints) * 100;
const classAvgDisplay = "A média da turma foi de " + classAveragePoints + " pontos ou " + classAveragePercent.toFixed(2) + "%.";
console.log(classAvgDisplay);
// atualização de pontos
alexPoints = 75;
didAlexPass = !didAlexPass;

const alexPointsUpdated = "Alex falhou inicialmente mas ele fez um trabalho extra. A sua nova nota foi de " + alexPoints + " do total de " + maxPoints;
console.log(alexPointsUpdated);
//
const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Pontos Feitos:";
listItemArray[4].innerHTML = "Porcentagens:";
listItemArray[8].innerHTML = "Pontos Perdidos:";
listItemArray[12].innerHTML = "Notas Finais:";

listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;

listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;

listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;

listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;