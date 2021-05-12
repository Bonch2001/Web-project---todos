var myNodelist = document.getElementsByTagName("LI");

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var check = document.getElementsByClassName("uncheck");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
    }
}

var input = document.getElementById("myInput");
document.body.input.onkeyup = function (e) {
    if (e.key === "Enter") {
        newElement()
    }
}

var unchecked = document.querySelector('uncheck');
unchecked.addEventListener('click', function (ev) {
    if (ev.target.className === 'uncheck') {
        ev.target.classList.toggle('check');
    }
}, false);

var checked = document.querySelector('check');
checked.addEventListener('click', function (ev) {
    if (ev.target.className === 'check') {
        ev.target.classList.toggle('uncheck');
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    var k = document.querySelector('uncheck')
    li.appendChild(k)
    li.appendChild(t);
    var j = document.querySelector('close')
    li.appendChild(j)
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
/*     for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
    } */
}

//    var arrow = document.getElementById("arrow");
