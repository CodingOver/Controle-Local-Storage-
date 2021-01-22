let allSpans = document.querySelectorAll('.buttons span');
let results = document.querySelector('.results > span');
let theInput = document.getElementById('the-input');


allSpans.forEach(span => {

    span.addEventListener('click', (e) => {
        if (e.target.classList.contains('check-item')) {
            checkItem();
        }

        if (e.target.classList.contains('add-item')) {
            addItem();
        }

        if (e.target.classList.contains('delete-item')) {
            deleteItem();
        }

        if (e.target.classList.contains('show-item')) {
            showItem();
        }
        
    });
});

function showEmptyMessage() {
        results.innerHTML = `<p style="color:red">Input Can't Be Empty</p>`
}

function checkItem() {
    if(theInput.value !== '') {

        if(localStorage.getItem(theInput.value)) {
            results.innerHTML = `Found Local Item Called <span>${theInput.value}</span>`;

            theInput.value = '';

        } else {
            results.innerHTML = `Not Found Local Item Called <span>${theInput.value}</span>`;

            theInput.value = '';
        }

    } else {
        showEmptyMessage();
    }
}

function addItem() {
    if(theInput.value !== '') {

        localStorage.setItem(theInput.value, 'Test')
        results.innerHTML = `Local Item Called <span>${theInput.value}</span> Has Added`;

        theInput.value = '';
      

    } else {
        showEmptyMessage();
    }
}

function deleteItem() {
    if(theInput.value !== '') {

        if(localStorage.getItem(theInput.value)) {

            localStorage.removeItem(theInput.value);

            results.innerHTML = `Local Item Called <span>${theInput.value}</span> Has Been Deleted`;
            
            theInput.value = '';
        } else {
            results.innerHTML = `Not Found Local Item Called <span>${theInput.value}</span>`;
        }

    } else {
        showEmptyMessage();
    }
}

function showItem() {
    if(localStorage.length) {
        results.innerHTML = '';
        // console.log(`Found Element ${localStorage.length}`)
        for (let [key,value] of Object.entries(localStorage)) {

            results.innerHTML += `<span class="keys">${key} </span>`
        }

    } else {
        results.innerHTML = `Local Storage Is Empty`;
    }
}