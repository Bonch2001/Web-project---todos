let myNodelist = document.getElementsByTagName("LI");

/* let check = document.getElementsByClassName("check");
for (i = 0; i < check.length; i++) {
    check[i].onclick = function () {
        div.classList.remove("checked");        
        let div = this.parentElement;
        let k = document.createElement('img')
        k.src = "unchecked.png"
        div.classList.add("uncheck");
        k.className = 'check'
        div.appendChild(k);
    }
}
 */

let input = document.getElementById("myInput");
input.addEventListener("keyup", function (e) {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        newElement()
    }
});

/* let unchecked = document.getElementsByClassName('uncheck');
unchecked.addEventListener('click', function (ev) {
    if (ev.target.className === 'uncheck') {
        target.classList.remove("uncheck");
        target.classList.add("checked");
    }
}, false);

let checked = document.querySelector('check');
checked.addEventListener('click', function (ev) {
    if (ev.target.className === 'check') {
        ev.target.classList.toggle('uncheck');
    }
}, false); */

let itemsleft = document.getElementById('number');

function newElement() {
    let li = document.createElement("li");
    li.id = "item"
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);

    li. id ="0";

    let k = document.createElement('img')
    k.src = "unchecked.png"
    k.className = 'uncheck'
    let kk = document.createElement('img')
    kk.src = "checked.png"
    kk.className = 'check'

    k.addEventListener('click', function () {
        let div = this.parentElement;
        div.classList.add("checked");
        div.appendChild(kk)
    });
    kk.addEventListener('click', function () {
        let div = this.parentElement;
        div.classList.remove("checked");
        div.removeChild(kk)
        div.appendChild(k)
    });

    let j = document.createElement('img')
    j.src = "close.png"
    j.className = 'close'

    li.appendChild(k)
    li.appendChild(t);
    li.appendChild(j)
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    itemsleft.textContent = myNodelist.length + " items left"

    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.remove('li')
        }
    }
}

let k = document.createElement('img')
k.src = "unchecked.png"
k.className = 'uncheck'

let kk = document.createElement('img')
kk.src = "checked.png"
kk.className = 'check'

k.addEventListener('click', function () {
    let div = this.parentElement;
    div.classList.add("checked");
    cln = kk.cloneNode(true);
    div.appendChild(cln)
    div.removeChild(this)
});
kk.addEventListener('click', function () {
    let div = this.parentElement;
    div.classList.remove("checked");
    cln = k.cloneNode(true);
    div.removeChild(this);
    cln = k.cloneNode(true);
    div.appendChild(cln);
});

/* function pressed() {

}
 */
let arrow = document.getElementById("arrow");
arrow.addEventListener('click', function () {
    let myNodelist = document.getElementsByTagName("LI");


    let v = 0

    // let array = Array.from(myNodelist)

    for (i = 0; i < myNodelist.length; i++) {
        if (myNodelist[i].classList.contains("checked")) { v = v + 1 }
    }

    if (v === myNodelist.length) {
        for (i = 0; i < myNodelist.length; i++) {
            cln = k.cloneNode(true);
            myNodelist[i].classList.remove("checked");
            let child = myNodelist[i].getElementsByClassName("check").item(0);
            myNodelist[i].removeChild(child)
            myNodelist[i].appendChild(cln);
        }
    }
    else {
        for (i = 0; i < myNodelist.length; i++) {
            cln = kk.cloneNode(true);
            myNodelist[i].classList.add("checked");
            // let children = myNodelist[i].childNodes;
            //myNodelist[i].removeChild(children[0]);
           // myNodelist[i].replaceChild(kk, children[0]);
           let child = myNodelist[i].getElementsByClassName("uncheck").item(0);
           myNodelist[i].removeChild(child)
           myNodelist[i].appendChild(cln);
        }
    }
});


let all = document.getElementById('all');
all.addEventListener('click', function () {
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.display = "block";
    }
    itemsleft.textContent = myNodelist.length + " items left"
});

let active = document.getElementById('active');
active.addEventListener('click', function () {
    let myNodelist = document.getElementsByTagName("li");
    c = myNodelist.length
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.display = "block";
    }
    for (i = 0; i < myNodelist.length; i++) {
        if (myNodelist[i].classList.contains("checked")) {
            myNodelist[i].style.display = "none";
            c = c - 1
            itemsleft.textContent = c + " items left"
        }
    }
});

let completed = document.getElementById('completed');
completed.addEventListener('click', function () {
    let myNodelist = document.getElementsByTagName("li");
    c = myNodelist.length
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.display = "block";
    }
    for (i = 0; i < myNodelist.length; i++) {
        if (!myNodelist[i].classList.contains("checked")) {
            myNodelist[i].style.display = "none";
            c = c - 1
            itemsleft.textContent = c + " items left"
        }
    }
});