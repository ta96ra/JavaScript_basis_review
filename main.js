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
  console.log(numbers);



}