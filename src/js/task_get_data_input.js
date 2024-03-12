
import backgroundImg from '../static/images/Background_Input.jpg'

const root = document.querySelector('#root');
const divContainer = root.querySelector('.container')

// Adding CSS to bg-image 
divContainer.style.backgroundImage = `url('${backgroundImg}')`;
divContainer.style.backgroundRepeat = 'no-repeat';
divContainer.style.backgroundSize = 'cover';
divContainer.style.backgroundPosition = 'center';

// const bgImgTPL = `<img src='${backgroundImg}'`;
// root.innerHTML = bgImgTPL;


const inputs = [
    {
        id: 1,
        type: 'text',
        function: () => {},
    },
    {
        id: 2,
        type: 'number',
        function: () => {},
    },
    {
        id: 3,
        type: 'password',
        function: () => {},
    },
    {
        id: 4,
        type: 'email',
        function: () => {},
    },
    {
        id: 5,
        type: 'color',
        function: () => {},
    },
    {
        id: 6,
        type: 'date',
        function: () => {},
    },
    {
        id: 7,
        type: 'range',
        function: () => {},
    },
    {
        id: 8,
        type: 'checkbox',
        function: () => {},
    },
]


inputs.forEach( (input) => {
    
    const formElem = document.createElement('form');
    formElem.classList.add('form');
        
    const inputFormTPL = `
        <label for="input-${input.id}">Input Type <b>${input.type}</b></label>
        <div class="div-input">
            <input type="${input.type}" id="input-${input.id}"> 
            <button type="button" class="btn-${input.id}">Confirm</button>
        </div>
        <p class="out out-${input.id}"></p>
    `;


    formElem.insertAdjacentHTML('beforeend', inputFormTPL);
    divContainer.append(formElem);

    const inputElem = formElem.querySelector(`#input-${input.id}`);
    const btn = formElem.querySelector(`.btn-${input.id}`);
    const result = formElem.querySelector(`.out-${input.id}`);


    console.log(inputElem.getAttribute('type'));

    // validation of PASSWORD
    if (inputElem.getAttribute('type') === 'password') {
        const TPL = `
            <div class='div-text'><b>${input.type}</b> must be at least 6 characters, contain 1 uppercase, 1 lowercase, 1 number</div>
        `;
        formElem.insertAdjacentHTML('afterbegin', TPL);

        // validation
        const regExp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
        if (!inputElem.value.match(regExp)) {
            result.textContent = 'Your password is wrong, please try again!';
            result.textContent = '';
        } else {
            result.textContent = inputElem.value;
            inputElem.value = '';
        }
    }

    // validation of EMAIL
    if (inputElem.getAttribute('type') === 'email') {
        const TPL = `
            <div class='div-text'>please enter your <b>${input.type}</b></div>
        `;
        formElem.insertAdjacentHTML('afterbegin', TPL);
    
        // validation
        const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (inputElem.value.match(regExp)) {
            result.textContent = inputElem.value;
            inputElem.value = '';
        } else {
            result.textContent = "Missing the '@' symbol or the domain name, please try again!";
        }
    }

    // CHECKBOX
    if (inputElem.getAttribute('type') === 'checkbox') {

        btn.addEventListener("click", () => {
            if (inputElem.checked) {
                inputElem.checked = false;
                result.textContent = 'off';
            }
            else {
                inputElem.checked = true;
                result.textContent = 'on';
            }
        });

    } else {
        btn.addEventListener("click", () => {
            const data = inputElem.value;
            if (data) {
                result.textContent = data;
                inputElem.value = '';
            } 
        });
    }

});

