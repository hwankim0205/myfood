let kFood = new Array(5);
let cFood = new Array(5);
let jFood = new Array(5);
let eFood = new Array(5);
let iFood = new Array(5);
let mFood = new Array(5);

let kFoodName = ['비빔밥', '삼겹살', '떡볶이', '순대국밥', '김밥'];
let cFoodName = ['짜장면', '짬뽕', '마라탕', '탕수육', '멘보샤'];
let jFoodName = ['초밥', '라멘', '샤브샤브', '규동', '규카츠'];
let eFoodName = ['팟타이', '쌀국수', '쏨땀', '반미', '탄두리치킨'];
let iFoodName = ['파스타', '피자', '리조토', '라자냐', '파니니'];
let mFoodName = ['타코', '부리토', '케사디야', '엔칠라다', '세비체'];

let kOrder = [0,1,2,3,4];
let cOrder = [0,1,2,3,4];
let jOrder = [0,1,2,3,4];
let eOrder = [0,1,2,3,4];
let iOrder = [0,1,2,3,4];
let mOrder = [0,1,2,3,4];

let state = 0;
let stage = 0;

let writer;
let kCount = 0;
let cCount = 0;
let jCount = 0;
let eCount = 0;
let iCount = 0;
let mCount = 0;

function preload(){
  for(let i=0; i<5; i++){
    let fileNumber = i+1;
    let fileName = '0'+fileNumber+'.png';
    console.log(fileName);
    kFood[i] = loadImage('korea/'+fileName);
    cFood[i] = loadImage('china/'+fileName);
    jFood[i] = loadImage('japan/'+fileName);
    eFood[i] = loadImage('eastsouth/'+fileName);
    iFood[i] = loadImage('italia/'+fileName);
    mFood[i] = loadImage('mexico/'+fileName);
  }
}

function setup() {
  createCanvas(800, 700);
  makeShuffle();
  
  let mm = month();
  let dd = day();
  let ho = hour();
  let mi = minute();
  let se = second();
  let dataName = 'data_'+mm+dd+'_'+ho+mi+se+'.txt';
  writer = createWriter('data.txt');
}

function draw() {
  background(255);
  
  if(state == 0){
    displayText(stage);
    displayKorea(stage);
    displayChina(stage);
    displayJapan(stage);
    displayEastsouth(stage);
    displayItalia(stage);
    displayMexico(stage);
    
  }else if(state == 1){
    textFont('Noto Sans KR');
    textSize(50);
    textAlign(CENTER, CENTER);
    text('종료되었습니다', width/2, height/2);
  }
}

function makeShuffle(){
  kOrder = shuffle(kOrder);
  cOrder = shuffle(cOrder);
  jOrder = shuffle(jOrder);
  eOrder = shuffle(eOrder);
  iOrder = shuffle(iOrder);
  mOrder = shuffle(mOrder);
  //console.log(kOrder);
}

function displayText(stageNum){
  textFont('Noto Sans KR');
  textSize(50);
  textAlign(CENTER);
  text('다음 중 가장 좋아하는 음식은? - ' + (stageNum+1), width/2, 70);
}

function displayKorea(stageNum){
  image(kFood[kOrder[stageNum]], 15, 100, 250, 250);
  fill(0);
  textFont('Noto Sans KR');
  textSize(25);
  textAlign(CENTER);
  text(kFoodName[kOrder[stageNum]], 140, 375);
}
function displayChina(stageNum){
  image(cFood[cOrder[stageNum]], 15+260, 100, 250, 250);
  fill(0);
  textFont('Noto Sans KR');
  textSize(25);
  textAlign(CENTER);
  text(cFoodName[cOrder[stageNum]], 140+260, 375);
}
function displayJapan(stageNum){
  image(jFood[jOrder[stageNum]], 15+520, 100, 250, 250);
  fill(0);
  textFont('Noto Sans KR');
  textSize(25);
  textAlign(CENTER);
  text(jFoodName[jOrder[stageNum]], 140+520, 375);
}

function displayEastsouth(stageNum){
  image(eFood[eOrder[stageNum]], 15, 100+300, 250, 250);
  fill(0);
  textFont('Noto Sans KR');
  textSize(25);
  textAlign(CENTER);
  text(eFoodName[eOrder[stageNum]], 140, 375+300);
}
function displayItalia(stageNum){
  image(iFood[iOrder[stageNum]], 15+260, 100+300, 250, 250);
  fill(0);
  textFont('Noto Sans KR');
  textSize(25);
  textAlign(CENTER);
  text(iFoodName[iOrder[stageNum]], 140+260, 375+300);
}
function displayMexico(stageNum){
  image(mFood[mOrder[stageNum]], 15+520, 100+300, 250, 250);
  fill(0);
  textFont('Noto Sans KR');
  textSize(25);
  textAlign(CENTER);
  text(mFoodName[mOrder[stageNum]], 140+520, 375+300);
}

function mouseReleased(){
  if(mouseX > 15 && mouseX < 15+250 && mouseY > 100 && mouseY < 100+250){
    stage = stage + 1; 
    kCount = kCount + 1;
    console.log('K: '+kCount);
  }else if(mouseX > 15+260 && mouseX < 15+250+260 && mouseY > 100 && mouseY < 100+250){
    stage = stage + 1; 
    cCount = cCount + 1;
    console.log('C: '+cCount);
  }else if(mouseX > 15+520 && mouseX < 15+250+520 && mouseY > 100 && mouseY < 100+250){
    stage = stage + 1; 
    jCount = jCount + 1;
    console.log('J: '+jCount);
  }else if(mouseX > 15 && mouseX < 15+250 && mouseY > 100+300 && mouseY < 100+250+300){
    stage = stage + 1; 
    eCount = eCount + 1;
    console.log('E: '+eCount);
  }else if(mouseX > 15+260 && mouseX < 15+250+260 && mouseY > 100+300 && mouseY < 100+250+300){
    stage = stage + 1; 
    iCount = iCount + 1;
    console.log('I: '+iCount);
  }else if(mouseX > 15+520 && mouseX < 15+250+520 && mouseY > 100+300 && mouseY < 100+250+300){
    stage = stage + 1; 
    mCount = mCount + 1;
    console.log('M: '+mCount);
  }
  
  if(stage == 5){
    state = 1;
    let data_msg = '' + kCount +','+ cCount +','+ jCount +','+ eCount +','+ iCount +','+ mCount;
    writer.print(data_msg);
    writer.close();
    writer.clear();
  }
}
