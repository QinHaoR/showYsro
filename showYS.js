
/**
 * （一万五千原石，出不来一个限定四星，真的是up角色么）
 //给下一页的按钮在开发者模式添加一个点击事件，每次点击会将上一页的四星或五星展示到控制台内
onclick="var n = document.getElementsByClassName('name');
var c = document.getElementsByClassName('item_4');
var w = document.getElementsByClassName('item_5');
for (let i = 0; i < n.length; i++) {
  if(c[i]){
    var d = c[i].nextElementSibling.nextElementSibling.innerText;
    console.log('————>'+ c[i].innerText+'-----'+d);
  }
  if(w[i]){
    var e = w[i].nextElementSibling.nextElementSibling.innerText;
    console.log('<****>'+ w[i].innerText+'-----'+e);
  }
}"
*/


/*
    n 获取(武器/角色)名称组
    c 四星(武器/角色)组
    w 五星(武器/角色)组
    d e 获取(武器/角色)时间
*/
document.getElementsByClassName('to-next').onclick = function(){
    var n = document.getElementsByClassName('name');
    var c = document.getElementsByClassName('item_4');
    var w = document.getElementsByClassName('item_5');
    for (let i = 0; i < n.length; i++) {
      if(c[i]){
        var d = c[i].nextElementSibling.nextElementSibling.innerText;
        console.log('————>'+ c[i].innerText+'-----'+d);
      }
      if(w[i]){
        var e = w[i].nextElementSibling.nextElementSibling.innerText;
        console.log('<****>'+ w[i].innerText);
      }
    }
}



