function left(){
    var audio  = new Audio('./audio/fbchat.mp3');
    var chat = document.getElementById("chat");
    var div = document.createElement("div");
    div.setAttribute("class", "chat-1");

    var message = document.getElementById('input');

    var p = document.createElement("p");
    
    var pText = document.createTextNode(message.value);

    p.appendChild(pText);

    div.appendChild(p)
    chat.appendChild(div);


    message.value = "";
    audio.play();
}

function right(){
    var audio  = new Audio('./audio/fbchat.mp3');
    var chat = document.getElementById("chat");

    var div = document.createElement("div");
    div.setAttribute("class", "chat-2");

    var message = document.getElementById('input');

    var span = document.createElement("span");

    var spanText = document.createTextNode(message.value);

    span.appendChild(spanText);

    div.appendChild(span)
    chat.appendChild(div);
    audio.play();
    message.value = "";
}