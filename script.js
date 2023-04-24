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
  //alldata.jsのallUser配列と照らし合わせて、ユーザー名パスワードが正しければ次の画面へ
  for (const userArray of loginArray) {
    if (input1 === userArray["userNumber"] && inputPass === userArray["passwaord"]) {
      document.getElementById("span1").textContent = "ログイン成功";
      return location.href = nextUrl;
    }
    //合致するユーザーがなければログイン失敗
    document.getElementById("span1").textContent = "ログイン失敗"; 
    }
  }

//ユーザー登録画面の登録ボタンの処理
function newuser() {
  alert("メールで仮パスワードを送信しました");
  return location.href = "logincliant.html";
}

//商品購入フォームの購入ボタンの処理
function newbuy() {
 let ko = Number(document.getElementById('kosu').value);
 if(ko === 0) {
  alert("個数が入っておりません");
 } else {
  alert("購入を受付しました。ありがとうございます");
  return location.href = "sale.html";
 }
}
        

