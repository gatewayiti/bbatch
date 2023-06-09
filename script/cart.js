function increment() {
    var element = document.getElementById('count').innerHTML
    document.getElementById("count").innerHTML = Number(element) + 1
}
function decrement() {
    var element = document.getElementById('count').innerHTML
    if (element > 1) {
        document.getElementById("count").innerHTML = Number(element) - 1
    }else{
        deleteCard()
    }
}

function deleteCard(){
  const element =  document.getElementById('card')
  element.remove()
}