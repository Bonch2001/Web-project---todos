let mylist = [
    {
        id: 1,
        todo: "a",
        check: false,
    },
    {
        id: 2,
        todo: "b",
        check: false,
    },
    {
        id: 3,
        todo: "c",
        check: false,
    }
]

let top = document.getElementById('text')
let lista = document.querySelector('lista')

top.addEventListener('keyup', function (e) {
    if (e.key === 13) {
        {
            let varr = document.createElement("li")
            varr.className = 'header'

            let input = document.createElement('input')
            input.type = "checkbox"
            input.className = 'check'
            varr.appendChild(input)

            let div = document.createElement('div')
            div.className = 'item'
            div.textContent = top.textContent
            top.textContent = ''
            varr.appendChild(div)

            let imag = document.createElement("img")
            imag.src = "close.png"
            imag.className = 'check3'
            varr.appendChild(imag)

            list.appendChild(varr)
        }
    }
})



