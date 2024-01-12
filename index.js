let count=0
let countEl=document.getElementById("count-el")
function increament(){
    count += 1
    countEl.textContent=count
}

let saveEl=document.getElementById('save-el')
let totalEl=document.getElementById('total-el')
function save(){
  let countStr=count + " - "
  saveEl.textContent += countStr
  let totalCount=count+1-1
  totalEl.textContent=totalCount

  count=0
  countEl.textContent=0
  console.log(count)
}



