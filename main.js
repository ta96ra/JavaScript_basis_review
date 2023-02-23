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
// --------------------
// オブジェクト（配列）
// --------------------
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
  console.log(updatePrice); //[200,210,220]
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
  // オブジェクトの定義、呼出、プロパティーの追加、削除
  const point = {
    x: 100,
    y: 180
  }
  console.log(point.x);
  console.log(point['y']);
  point.z = 90; //z:90の追加
  delete point.y; //yの削除
  console.log(point);
}
{
  // スプレット構文でオブジェクトにオブジェクトの複数プロパティーを追加
  const otherPops = {
    r: 4,
    color: 'red'
  }
  const point = {
    x: 100,
    y: 180,
    ...otherPops
  }
  console.log(point);  //{x:100,y:180,r:4,color:'red'}

  // 分割代入を使ってオブジェクトの値の取り出し
  const {x,r,...others} = point;
  console.log(r);
  console.log(others)

  // Object.keys()を使ってキーのみ取り出し
  const keys = Object.keys(point);
  console.log(keys);  //['x','y','r','color']
  keys.forEach(key=>{
    console.log(`${key}:${point[key]}`);
  });

  // 配列の中にオブジェクトが入っている時のデータ取得
  const points = [
    {x:30,y:20},
    {x:10,y:50},
    {x:40,y:40}
  ];
  // y:50を取得したいとき
  console.log(points[1].y);
}
{
  // 配列のコピーについて
  let x = [1,2];
  // let y = x;  //このように書くと丸ごと紐付けられる
  // x[0] = 5;
  // console.log(x); //[5,2]
  // console.log(y); //[5,2]

  let y = [...x];  //スプレッド演算子mamp で書くと値そのもを直接代入される
  x[0] = 5;
  console.log(x); //[5,2]
  console.log(y); //[1,2]
}

// -------------------
// 文字列の操作
// -------------------
{
  // length,substring
  const str = 'hello';
  console.log(str.length); //文字数 5
  console.log(str.substring(2,4));  //index番号2から4番手前の文字列を切り取る ll
  console.log(str[1]);  //index番号1の文字列 e
  
  // join():配列を文字列に結合
  const d = [2023,2,22];
  console.log(d.join('/')); //2023/2/22

  // split():文字列を配列に分割
  const t = '12:42:35';
  console.log(t.split(':')); //['12','42','35']
  console.log(t.split(''));  //['1','2',':','4','2',':','3','5']

  // 分割代入で取り出し
  const[hour,minute,second] = t.split(':');
  console.log(minute);   //42
}

// --------------------
// 数値の操作
// --------------------
{
// Math.floor(),Mathceil(),Math.round(),toFixed()
  const avg = 7.6666666666
  console.log(Math.floor(avg)); //整数で切り下げ
  console.log(Math.ceil(avg));  //整数で切り上げ
  console.log(Math.round(avg));  //整数で四捨五入
  console.log(avg.toFixed(3));  //小数点3桁で四捨五入 7.667

  //Math.randam()
  console.log(Math.random()); //0~1の間で乱数の生成
  console.log(Math.ceil(Math.random() * 6)); //サイコロ
}
// --------------
// 日時
// --------------
{
  // 現在日時
  const d = new Date();  //現在地における現在日時
  console.log(d);

  console.log(d.getHours());  //時の取得
  console.log(d.getSeconds());  //分の取得
  // console.log(d.getMillseconds()); //??
  console.log(d.getMonth());  //月の取得(0:1月~)
  console.log(d.getDate());  //日の取得
  console.log(d.getDay());  //曜日の取得(0：日,1:月~)
  console.log(d.getFullYear());  //年の取得
  // const n = getTime();  //??
  // console.log(n);
}
{
  // 特定日時
  const d = new Date(2000,11);  //2000年12月に指定
  console.log(d);

  // d.setHours(10);
  d.setHours(10,20,30); //10時20分30秒に指定
  d.setDate(31);  //31日に指定
  console.log(d);  //2000年12月31日10時20分30秒
}

//------------------
// 様々な機能
//-------------------

// ----- alert()とconfirm() --------
{
  alert('hello');
  const answer = confirm('削除しますか？');
  if(answer){
    console.log('削除しました');//OKを押すとtrueを返す
  }else{
      console.log('キャンセルしました');//キャンセルを押すとfalseを返す
  }

  // --------- setInterval()とclearInterbal() ---------

  //setInterval(a,b); bミリ秒おきにaを無限に実行
  //clearInterval(c); cのsetIntervalを解除

  let i = 0
  function showTime(){
    console.log(new Date());
    i++;
    if(i > 2){
      clearInterval(intervalId);
    }
  }
  const intervalId = setInterval(showTime,1000);
  // 現在時を1sごとに更新し、i=0からi=2になったら処理の終了
  // 現在時が1sごとに３回表示される


  // ---------- setTimeout()とclearTimeout() ------------

  //setTimeout(a,b); bミリ秒おきに1回だけaを実行
  //clearTimeout(c); cという繰り返されたsetTimeoutを解除

  // 3回繰り返す方法
  let n = 0;
  function showTimeout(){
    console.log(new Date());
    const timeoutId = setTimeout(showTimeout,1000);
    n++;
    if(n > 2){
      clearTimeout(timeoutId);
    }
  }
  showTimeout();
}

{
  // ---------- オブジェクトに関数を入れてみる ---------
  const posts = [
    {
      text: 'JavaScriptの勉強中',
      likeCount: 0,
      Show: function show(post){
        console.log(`${post.text} - ${post.likeCount}いいね`)
      },
    }
  ];
}



{ 
  // 7以上7777777以下の7の倍数を全て書き出したとき、数字「7」は何回現れるか。
  const n = [];
  for(let i = 7;i <= 7777777;i+=7){
    n.push(i);
  }
  const strings = n.join().split('');  //strは入れる['7','1','4'~]
  // console.log(strings);

  const answers = strings.filter(string => string === '7');
  console.log(answers.length);
}

