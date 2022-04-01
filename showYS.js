
/**
 * 
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

