'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

//管理者顧客両方のログオン画面処理
function nextPage() {
  //login.htmlまたはlogincliant.htmlから、contact-titleとユーザー名とパスワードの取得
  const contactTitle = document.getElementsByClassName("contact-title")[0].textContent;
  console.log(contactTitle);
  const input1 = document.getElementsByName("id")[0].value;
  const inputPass = document.getElementsByName("pass")[0].value;
  //顧客のログイン画面（logincliant.html）か、管理者ログイン画面（login.html）からの実行かで使う配列と次のページを変える
  let loginArray = [];
  let nextUrl = "";
  if (contactTitle === "ログイン") {
    loginArray = allUser;
    nextUrl = "MainMenu.html";
  } else if (contactTitle === "ユーザーログイン") {
    loginArray = allCliant;
    nextUrl = "sale.html";
  } else {
    console.log("割り当てなし");
  }
  //console.log(loginArray);
  //alldata.jsのallUser配列と照らし合わせて、ユーザー名パスワードが正しければ次の画面へ
  for (const userArray of loginArray) {
    //console.log(userArray["userNumber"]+userArray["passwaord"]);
    if (input1 === userArray["userNumber"] && inputPass === userArray["passwaord"]) {
      document.getElementById("span1").textContent = "ログイン成功";
      //location.href = nextUrl;
      return location.href = nextUrl;
    }
    //合致するユーザーがなければログイン失敗
    document.getElementById("span1").textContent = "ログイン失敗"; 
    }
  }

//在庫一覧
function stockOutput() {
  let stockList = '<tr><th>商品</th><th>在庫</th><th>イメージ</th></tr>';
  for (let i=0; i < allItem.length; i++ ) {
    if (allItem[i]["Stock"] < 10) {
      console.log(allItem[i]["Stock"]);
      stockList += '<tr><td id ="stockRed">＊' + allItem[i]["Name"] + '</td><td id ="stockRed">' + allItem[i]["Stock"] +'</td><td id ="stockRed"><img src="' + allItem[i]["Image"] +'" class ="ItemList"></td></tr>';     
    } else {
      stockList += '<tr><td>'+ allItem[i]["Name"] + '</td><td>' + allItem[i]["Stock"] +'</td><td><img src="' + allItem[i]["Image"] +'" class ="ItemList"></td></tr>';
    }
    
  }
  console.log(stockList);
  document.getElementById('item-table').innerHTML = stockList;
}

function saleOutput() {
  let saleList = '';
  for (let i=0; i < allItem.length; i++ ) {
    if (allItem[i]["Stock"] !== 0) {
        if ((i + 1 )% 3 === 0) {
        //console.log("yes");
        saleList += '<th id="' + allItem[i]["Nunber"] + '">品名：'+ allItem[i]["Name"]+'<br>価格：' + allItem[i]["Price"] + '<br><img src="' + allItem[i]["Image"] +'" class ="sale"></th></tr>';
        } else {
        saleList += '<th id="' + allItem[i]["Nunber"] + '">品名：'+ allItem[i]["Name"]+'<br>価格：' + allItem[i]["Price"] + '<br><img src="' + allItem[i]["Image"] +'" class ="sale"></th>';
        }
    }
  }
  document.getElementById('sale-table').innerHTML = saleList;
}

const myElement = document.getElementById("0001");
console.log(myElement)
myElement.addEventListener("click",itemTarget());

function newuser() {
  alert("メールで仮パスワードを送信しました");
  return location.href = "logincliant.html";
}

function itemTarget() {
  return location.href = "itemuBuy.html";
}
        




