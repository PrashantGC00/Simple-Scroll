const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');

function swapBoxes(){

    if (box1.classList.contains('box-1')) {
        box1.classList.remove('box-1')
        box2.classList.remove('box-2')
        box3.classList.remove('box-3')

        box1.classList.add('box-3')
        box2.classList.add('box-1')
        box3.classList.add('box-2')
    } else if (box1.classList.contains('box-3')) {

        box1.classList.remove('box-3')
        box2.classList.remove('box-1')
        box3.classList.remove('box-2')

        box1.classList.add('box-2')
        box2.classList.add('box-3')
        box3.classList.add('box-1')
    } else {
        box1.classList.remove('box-2')
        box2.classList.remove('box-3')
        box3.classList.remove('box-1')

        box1.classList.add('box-1')
        box2.classList.add('box-2')
        box3.classList.add('box-3')
    }
}
document.querySelector('.container').addEventListener('click', swapBoxes);
