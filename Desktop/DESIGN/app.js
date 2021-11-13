//define a
const divs = document.querySelectorAll('.milestone-indicator')
const unorderList = document.getElementById('milestone-unorder'); 
const lists = document.querySelectorAll('li');
const listLength = unorderList.getElementsByClassName('milestone-list').length;

// console.log(link);


divs.forEach(function(div){
    // console.log(div);
    div.addEventListener('mouseenter', visible);
});

divs.forEach(function(div){
    // console.log(div);
    div.addEventListener('mouseleave', hidden);
});

function visible(e){
    const test = e.target.parentElement.parentElement.parentElement.firstElementChild;
    test.style.visibility = 'visible';
}

function hidden(e){
    const test = e.target.parentElement.parentElement.parentElement.firstElementChild;
    test.style.visibility = 'hidden';
}

