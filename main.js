var todolist = [];

function generateUniqueKey() {
    let key = '_' + Math.random().toString(36).substr(2, 9);
    return key;
}

function addItem(text) {
    let item = {
        text,
        key: generateUniqueKey()
    }
    todolist.push(item);
    return;
}

function removeItem(key) {
    for(let i=0; i<todolist.length; i++){
        if(todolist[i].key === key) {
           let a = todolist.slice(0, i);
           let b = todolist.slice(i+1);
           todolist = a.concat(b);
        }
    }
    return todolist;
}

function renderList() {
    var list = document.querySelector('.todolist');
    var content = todolist.map(item => {
        return `<li>${item.text} <button onclick=removeFromList("${item.key}")>X</button></li>`;
    });
    list.innerHTML = content.join("");
    return;
}

function addToList() {
    let input = document.querySelector('.input-text');
    let text = input.value;
    if(text !== "")
    addItem(text);
    input.value = "";
    input.focus();
}

let form = document.querySelector('.form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        addToList();
        renderList();
    })

function removeFromList(key) {
    removeItem(key);
    renderList();
}