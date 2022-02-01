let creteButton = document.querySelector(".btn-primary")
let form = document.querySelector(".form")
let tbody = document.querySelector("#tBody")
let createUserName = document.querySelectorAll(".form-control")
let trash = document.querySelector("#trash")
let le = document.querySelector(".close")
let currentpasswordInput = document.querySelector(".curremt-password")
let buttoncreate = document.querySelector("#buttoncreate")
let searchUser = document.querySelector(".w-100")
let but = document.querySelector(".btn-primary")
let lis = document.querySelectorAll(".nav-item")


lis[1].firstChild.children[1].textContent = users.length
let faol = lis[2].firstElementChild.children[1]
faol.textContent = matem()[1]


function matem() {
    let a = 0
    let arr_a = []
    let b = 0
    let arr_b = []
    for (let i of users) {
        if (i.toggled) {
            a++
            arr_a.push(i)
        }
    }

    for (let j of users) {
        if (j.checked) {
            b++
            arr_b.push(j)
        }
    }
    return [a, b, arr_a, arr_b]
}

function renderUsers(users) {
    let date = new Date()
    date = date.getDate() + ":" + (date.getMonth() + 1) + ":" + date.getFullYear()
    tbody.innerHTML = null
    let a = 1
    for (let user of users) {
        const [td1, td2, td3, td4, td5, td6, tr] = createElement("td", "td", "td", "td", "td", "td", "tr")

        td1.setAttribute("class", "align-middle")
        const [div, input, label] = createElement("div", "input", "label")
        div.classList.add("custom-control", "custom-control-inline", "custom-checkbox", "custom-control-nameless", "m-0", "align-top")
        input.classList.add("custom-control-input")
        input.setAttribute("type", "checkbox")
        input.setAttribute("id", a)

        label.setAttribute('class', "custom-control-label")
        label.setAttribute("for", a)
        div.append(input, label)
        td1.append(div)
        a += 1;



        td2.classList.add("text-center")
        const [div2, i] = createElement("div", "i")
        div2.classList.add("bg-light", "d-inline-flex", "justify-content-center", "align-items-center", "align-top")
        div2.setAttribute("style", "width: 35px; height: 35px; border-radius: 3px;")
        i.classList.add("fa", "fa-fw", "fa-photo")
        i.setAttribute("style", "opacity: 0.8;")
        div2.append(i)
        td2.append(div2)

        td3.classList.add("text-nowrap", "align-middle")
        td3.textContent = user.fullname

        td4.classList.add("text-nowrap", "align-middle")
        const [span] = createElement("span")
        span.textContent = date
        td4.append(span)

        td5.classList.add("align-middle", "text-center")
        const [toggle] = createElement("i")
        toggle.classList.add("fa", "fa-fw", "text-secondary", "cursor-pointer", "fa-toggle-on")
        td5.append(toggle)


        td6.classList.add("align-middle", "text-center")
        const [div6, edit, remove, i6] = createElement("div", "button", "button", "i")
        div6.classList.add("align-middle", "text-center")
        div6.classList.add("btn-group", "align-top")
        edit.classList.add("btn", "btn-sm", "btn-outline-secondary", "badge")
        edit.setAttribute("type", "button")
        edit.setAttribute("data-toggle", "modal")
        edit.setAttribute("data-target", "#user-form-modal")
        edit.textContent = "Edit"
        remove.classList.add("btn", "btn-sm", "btn-outline-secondary", "badge")
        remove.setAttribute("type", "button")
        i6.classList.add("fa", "fa-trash")
        remove.append(i6)
        div6.append(edit, remove)
        td6.append(div6)

        tr.append(td1, td2, td3, td4, td5, td6)
        tbody.append(tr)

        input.onclick = () => {
            console.log(input);
            if (input.checked) {
                lis[3].children[0].lastElementChild.textContent = parseInt(lis[3].children[0].lastElementChild.textContent) + 1;
                users[users.indexOf(user)].checked = input.checked
            } else {
                lis[3].children[0].lastElementChild.textContent = parseInt(lis[3].children[0].lastElementChild.textContent) - 1;
                users[users.indexOf(user)].checked = input.checked

            }
            window.localStorage.setItem("users", JSON.stringify(users))
        }


        remove.onclick = () => {
            users = users.filter(el => {
                return el.id != user.id
            })
            window.localStorage.setItem("users", JSON.stringify(users))
            tr.remove()
                // renderUsers(users)
        }

        edit.onclick = () => {

            console.log(createUserName);
            let fullName = createUserName[2]
            let username = createUserName[3]
            let Email = createUserName[4]
            let Bio = createUserName[5]

            fullName.value = user.fullname
            username.value = user.userName
            Email.value = user.email
            Bio.value = user.about


            but.onclick = (e) => {
                console.log("hello");
                e.preventDefault()
                if (fullName.value.trim() && fullName.value.length < 30 && username.value.length < 20 && username.value.trim() && Email.value.includes("@gmail.com")) {
                    console.log(user);
                    console.log(users);
                    user.fullname = fullName.value
                    user.userName = username.value
                    user.email = Email.value
                    user.about = Bio.value
                    window.localStorage.setItem("users", JSON.stringify(users))
                    renderUsers(users)
                } else {
                    console.log("Sheta bovoti");
                    return alert("Nito kiritvosan")
                }
                fullName.value = null
                username.value = null
                Email.value = null
                Bio.value = null
            }

            lis[2].onclick = (event) => {
                event.preventDefault()
                renderUsers(matem()[3])
            }

            lis[3].onclick = (event) => {
                event.preventDefault()
                renderUsers(matem()[2])
            }
        }
        a = 0
    }
}

renderUsers(users)


buttoncreate.onclick = (event) => {
    saveChanges.onclick = (event) => {
        event.preventDefault()
        if (fullname.value.trim() && fullname.value.length < 30 && username.value.length < 20 && username.value.trim() && email.value.includes("@gmail.com") && newpassword.value.length >= 8 && confirmpassword.value.length >= 8 && newpassword.value == confirmpassword.value) {
            users.push({
                id: users ? users.length + 1 : 1,
                fullname: fullname.value,
                userName: username.value,
                email: email.value,
                about: about.value,
                password: newpassword.value,
                toggled: true,
                checked: false
            })
            window.localStorage.setItem("users", JSON.stringify(users))
            lis[2].firstElementChild.children[1].textContent = users.length
            lis[1].firstElementChild.children[1].textContent = users.length
        } else {
            console.log("1");
            return alert("Nito kiritvosan")
        }
        renderUsers(users)

        fullname.value = null
        username.value = null
        email.value = null
        about.value = null
        newpassword.value = null
        confirmpassword.value = null

    }

}

function editUsers() {

}


searchUser.onkeyup = () => {
    let arr = []
    let b = JSON.parse(window.localStorage.getItem("users"))
    for (let i of b) {
        if (i.fullname.toLowerCase().includes(searchUser.value)) {
            arr.push(i)
        }
    }
    renderUsers(arr)
    if (!searchUser.value) {
        renderUsers(users)
    }
}