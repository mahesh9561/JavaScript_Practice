const inputName = document.querySelector('#input_name');
const submitBtn = document.querySelector('#btn_submit');
const textElement = document.querySelector('#taskList');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const addtext = inputName.value.trim();
    if (addtext === '') {
        alert("Please Enter Valid Value");
    } else {
        const createElementText = document.createElement('li');
        createElementText.innerHTML =
            `
            <span>${addtext}</span>
            <button class="update">Update</button>
            <button class="delete">Delete</button>
            `

        console.log(createElementText);
        textElement.appendChild(createElementText);

        // delete
        const deletElement = createElementText.querySelector('button.delete');
        const updateElement = createElementText.querySelector('button.update');

        deletElement.addEventListener('click',function(e){
            e.preventDefault();
            createElementText.remove();
            console.log("delete elemet" )
        })
        
        // update
        updateElement.addEventListener('click', function(e){
            e.preventDefault();
            const promptElement = prompt(`PLesae enter updared value ${addtext}`);
            if(promptElement !== ""){
                // createElementText.querySelector('span').textContent = updateElement;
                createElementText.querySelector('span').textContent = promptElement;
                // console.log(promptElement)
            }
        })

    }

})

