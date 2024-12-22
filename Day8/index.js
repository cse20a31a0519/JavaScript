let heading1 = document.getElementById("heading1");
console.log(heading1);
heading1.style.backgroundColor = "#8B5E83";
heading1.style.textAlign = "center";
function changeText() {
    heading1.innerText = "This is double click  - DOUBLE CLICK";
    heading1.style.textAlign = "center";
    heading1.style.padding = "30px";
    heading1.style.color = "#FFB6C1";
    heading1.style.height = "60px";
    heading1.style.borderRadius = "25px";
    heading1.style.boxShadow = "8px 8px #6A5ACD";
}

let heading2 = document.getElementById("heading2");
console.log(heading2);
heading2.style.backgroundColor = "#FFDEAD";
heading2.style.textAlign = "center";
function modifyText() {
    heading2.innerText = "This is on click - ONCLICK";
    heading2.style.textAlign = "center";
    heading2.style.padding = "30px";
    heading2.style.color = "#6A5ACD";
    heading2.style.height = "60px";
    heading2.style.borderRadius = "25px";
    heading2.style.boxShadow = "8px 8px #FF6347";
}

let heading3 = document.getElementById("heading3");
console.log(heading3);
heading3.style.backgroundColor = "#98FB98";
heading3.style.textAlign = "center";
function onHover() {
    heading3.innerText = "This is on Hover - HOVER";
    heading3.style.textAlign = "center";
    heading3.style.padding = "30px";
    heading3.style.color = "#2E8B57";
    heading3.style.height = "60px";
    heading3.style.borderRadius = "25px";
    heading3.style.boxShadow = "8px 8px #4682B4";
}
