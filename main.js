'use strict';
// ------------------
// 基本文法
// ------------------
{
  console.log(10 ** 3);

  let price = 500;
  price += 100;
  price = price + 100;
  const language = 'English'

  // データの型を確認
  console.log(price);
  console.log(typeof 'hello');
  console.log(typeof language);

  // 文字列をxx進数に変換
  const number = '2a'
  const a = parseInt(number,16);
  console.log(a);

  // for文、if文、continue,break
  for(let i = 1; i <= 5; i++){
    if(i % 3 === 0){
      // continue;
      break;
    }
    console.log(i);
  }
  // for文、switch文
  for(let i = 1; i <= 10; i++){
    switch(i % 3){
      case 0:
        console.log('blue');
        break;
      case 1:
        console.log('yellow');
        break;  
      default:
        console.log('red');
    }
  }

  // 関数の定義、呼び出し、return、アロー関数
  function showAd(message = 'Ad'){
    console.log(`-----${message}-------`)
  }
  showAd('記');

  // function sum (a,b,c){
  //   return a + b + c;
  // }
  const sum = (a,b,c)=> a + b + c;
  const total = sum(1,2,3) + sum(4,5,6);
  console.log(total);
}
// -------------
// オブジェクト
// -------------
{
  // 配列、呼出、変更、length
  const scores = [80,90,40];
  console.log(scores[1]);
  scores[2] = 50;
  console.log(scores);
  console.log(scores.length);

  // 配列の要素の変更 pop,push,shift,unshift
  const numbers = [1,6,9,12,15,16];
  numbers.pop();  //末尾を削除
  numbers.push(18,21);   //末尾に追加
  numbers.shift();    //先頭を削除
  numbers.unshift(0,3);  //先頭に追加
  console.log(numbers);  //[0,3,6,9,12,15,18,21]
  // 配列の要素の変更splice
  numbers.splice(1,1,2,4);  //index番号1から1個削除し2,4を追加 [0,2,4,6,9,12,15,18,21]
  numbers.splice(5,4);  // index番号5から4個削除
  console.log(numbers);  //[0,2,4,6,9]
}

{
  // 配列要素の変更スプレッド構文
  const otherScores = [80,90]
  const scores = [50,60,70,...otherScores]
  console.log(scores); //[50,60,70,80,90]

  //スプレッド構文を関数に代入
  function sum(a,b){
    console.log(a + b);
  }
  sum(...otherScores); //80 + 90
}

{
  // 分割代入
  const scores = [50,60,70,80];
  // const[a,b,c,d] = scores;
  // console.log(a,b,c,d);  //a~dがそのまま代入される
  const [a,b,...others] = scores;
  console.log(a,b);
  console.log(others);   //others === [70,80]

  let x = 30;
  let y = 70;
  [x,y] = [y,x];  //x,yを入れ替える
  console.log(x,y);  //70 30

  // forEach文
  scores.forEach(function(score,index){
    console.log(`${index} : ${score}`);
  });
  scores.forEach((score,index)=>{  //アロー関数で書き換え
    console.log(`${index} : ${score}`)
  });

  // map():配列に何らかの処理をして、その結果を別の配列として取得
  const prices = [180,190,200];
  // const updatePrices = prices.map((price) =>{
  //   return price + 20;
  // });
  const updatePrice = prices.map(price => price + 20); //全てに２０を足す
  console.log(updatePrice);
}
{
  // filter():配列の要素のうち、条件が合うものだけを抽出
  const numbers = [1,4,7,8,10];
  const evenNumbers = numbers.filter(number => number % 2 === 0); //偶数のみ抽出
  console.log(evenNumbers);
}

// -----------------------
// オブジェクト(連想配列)
// -----------------------

{


}