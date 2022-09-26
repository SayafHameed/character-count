let textbox=document.getElementById("textbox");
let count=document.getElementById("count");
function updatecount() {
    count.innerHTML=textbox.value.length;
}
textbox.oninput=updatecount;