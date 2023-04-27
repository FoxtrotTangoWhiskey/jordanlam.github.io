function bigger(){
    alert("Hello, world!");
    document.getElementById('text-area').style.fontSize = "24px";
}

function fancy(){
    let text = document.getElementById('text-area');
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
}

function boring(){
    let text = document.getElementById('text-area');
    text.style.fontWeight = "400";
    text.style.color = "black";
    text.style.textDecoration = "none";
}

function moo(){
    let text = document.getElementById('text-area');
    text.style.textTransform = "uppercase";
    var str = text.value.split("\n");
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i] + "-Moo";
    }
    text.value = str.join("\n");
}