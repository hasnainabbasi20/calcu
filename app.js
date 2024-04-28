function calculator(n){
    document.getElementById('inp').value +=n
}
function result(){
 
  var cal = document.getElementById('inp')
  cal.value =eval(cal.value)

}
function del(){
    document.getElementById('inp').value =''
}
function clr_digit(){
    var remove = document.getElementById('inp')
    remove.value =remove.value. slice(0,-1)
}