let myNodelist = document.getElementsByTagName("LI");

// Click on a close button to hide the current list item
setInterval(function () {
    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.remove('li')
        }
    }
}, 100);

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
    let k = document.createElement('img')
    let j = document.createElement('img')

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
}

let arrow = document.getElementById("arrow");

arrow.addEventListener('click', function () {
    let myNodelist = document.getElementsByTagName("LI");
    let kk = document.createElement('img')
    kk.src = "checked.png"
    kk.className = 'check'
    let k = document.createElement('img')
    k.src = "unchecked.png"
    k.className = 'uncheck'
    let v = 0
    for (i = 0; i < myNodelist.length; i++)
        console.log(myNodelist[i])
        /* if (myNodelist[i].classList.contains("checked")) { v = v + 1 }
        if (v === i) {

            myNodelist[i].classList.remove("checked");
            myNodelist[i].removeChild(kk);
            myNodelist[i].appendChild(k);
        }
        else {
            myNodelist[i].classList.add("checked");
            myNodelist[i].removeChild(k);
            myNodelist[i].appendChild(kk);
        } */
        if (myNodelist[i].classList.contains("checked"))
        {}
        else{
            myNodelist[i].classList.add("checked");
            myNodelist[i].removeChild(k);
            myNodelist[i].appendChild(kk);
        }
});


let all = document.getElementById('all');
all.addEventListener('click', function () {
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.display = "block";
    }
    itemsleft.textContent = myNodelist.length + " items left"
}, false);

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
            c = c-1
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
            c = c-1
            itemsleft.textContent = c + " items left"
        }
    }
}, false);