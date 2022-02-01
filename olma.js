function createElement(...array) {
    return array.map(el => {
        return document.createElement(el)
    })
}

function data() {
    let date = new Date
    date = date.getDate() + ":" + date.getMonth() + ":" + date.getFullYear()
    return date
}