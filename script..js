const text = document.getElementById('text');
const email = document.getElementById('email');
const num = document.getElementById('number');
const btn = document.getElementById('btn');
const updateBtn = document.getElementById('updateBtn');
const deleteBtn = document.getElementById('deleteBtn');
const searchBtn = document.getElementById('Search');
const tableData = document.querySelectorAll('td');

function getInp(){
    const table = document.querySelector('table');
    const txt = text.value; 
    const emailVal = email.value;
    const numValue = num.value
    if(!isNaN(txt)){
        alert('Please enter valid input');
        return;
    }

     if(isNaN(numValue) || numValue.length<10 || numValue.length>10){
        alert('Please enter valid input num');
        return;
    }

    table.innerHTML += ` <tr>
    <td class = 'names'>${txt}</td>
    <td>${emailVal}</td>
    <td>${numValue}</td>
</tr>`
}

btn.addEventListener('click', getInp);

function updateHandler(){
    const updateInput = document.getElementById('updateInput')
    const updateInp = updateInput.value;
    const names = document.querySelectorAll('.names');
    const enterUpdate = document.getElementById('enterUpdate');
    for(const items of names){
        if(updateInp == items.innerHTML){
            items.innerHTML = enterUpdate.value;
        }
       
    }

}
updateBtn.addEventListener('click', updateHandler);

function deleteHandler(){
    const deleteInp = document.getElementById('deleteInp');
    const deleteValue = deleteInp.value;
    const names = document.querySelectorAll('.names');
    for(const items of names){
        if(deleteValue == items.innerHTML){
            items.parentElement.style.display = 'none'
        }
    }
}
deleteBtn.addEventListener('click', deleteHandler)

function searchHandler(){
    const search = document.getElementById('searchInp');
    const searchInp = search.value;
    const names = document.querySelectorAll('.names');
    const para = document.getElementById('data')
    for(const items of names){
        if(searchInp == items.innerHTML){
            const data = items.parentElement.textContent;
            // para.textContent +=  items.parentElement.textContent;
            para.innerHTML += `<p> ${data} </p>`
        }
    }
}

searchBtn.addEventListener('click', searchHandler)