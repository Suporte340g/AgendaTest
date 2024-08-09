let itens = document.querySelectorAll('.item');
let columns = document.querySelectorAll('.column');
let draggableItem = null;
let message = document.querySelectorAll('.hi');


itens.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
});

function dragStart() {
    draggableItem = this;
    console.log('dragStart')
}

function dragEnd() {
    draggableItem = null;
    console.log('dragEnd')
}

columns.forEach((column) => {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("dragenter", dragEnter);
    column.addEventListener("dragleave", dragLeave);
    column.addEventListener("drop", dragDrop);
    
})

function dragOver(e) {
    e.preventDefault();
    console.log('drag over');
}

function dragEnter() {
    this.style.border = "4px solid blue";
    console.log('drag enter');
}

function dragLeave() {
    this.style.border = "4px solid whitesmoke";
    a.innetText = 'leaving';
    console.log('drag leave');
}

function dragDrop() {
    this.style.border = "4px solid whitesmoke";
    this.appendChild(draggableItem);
    console.log('dropped');
}

function cad() {
    console.log('hi')
}