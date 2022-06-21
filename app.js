const apiUrl = 'https://aztro.sameerkumar.website/';
let signsData = [
    {
        image: "../assets/aries.png",
        value: "Aries"
    },
    {
        image: "../assets/taurus.png",
        value: "Taurus"
    },
    {
        image: "../assets/gemini.png",
        value: "Gemini"
    },
    {
        image: "../assets/cancer.png",
        value: "Cancer"
    },
    {
        image: "../assets/leo.png",
        value: "Leo"
    },
    {
        image: "../assets/virgo.png",
        value: "Virgo"
    },
    {
        image: "../assets/libra.png",
        value: "Libra"
    },
    {
        image: "../assets/scorpio.png",
        value: "Scorpio"
    },
    {
        image: "../assets/sagittarius.png",
        value: "Sagittarius"
    },
    {
        image: "../assets/capricorn.png",
        value: "Capricorn"
    },
    {
        image: "../assets/aquarius.png",
        value: "Aquarius"
    },
    {
        image: "../assets/pisces.png",
        value: "Pisces"
    }
]

const body = document.querySelector('body');

const headerElement = createHeaderSection();
const mainElement = document.createElement('main');
mainElement.classList.add('main');
const footerElement = createFooterSection();

body.append(headerElement, mainElement, footerElement);

const selectSection = createSelectSection();
mainElement.append(selectSection);


// header section
function createHeaderSection() {
    const headerSection = document.createElement('header');
    headerSection.classList.add('header');

    const containerLogo = document.createElement('div');
    containerLogo.classList.add('header__container-logo');


    const logoIcon = document.createElement('img');
    logoIcon.classList.add('header__icon-logo');
    logoIcon.setAttribute('src', '../assets/logo-icon.png');
    logoIcon.setAttribute('alt', 'Crystal Ball');

    const logo = document.createElement('h1');
    logo.classList.add('header__logo');
    logo.innerText = 'What will happen today?';

    containerLogo.append(logoIcon, logo);
    headerSection.appendChild(containerLogo);

    return headerSection;
}

// selection section
function createSelectSection() {
    const selectSection = document.createElement('section');
    selectSection.classList.add('form');

    const formInputElement = createSectionInput();
    selectSection.appendChild(formInputElement);

    return selectSection;
}

function createSectionInput() {
    const formInput = document.createElement('form');
    formInput.classList.add('form__input');

    const signContainer = createSignContainer();

    const dateContainer = createDateContainer();

    const buttonSubmit = document.createElement('button');
    buttonSubmit.classList.add('form__button-submit');
    buttonSubmit.innerText = "Get your horoscope";

    formInput.append(signContainer, dateContainer, buttonSubmit);

    return formInput;
}

function createInputSignsContainer(sign) {
    let inputSignsContainer = document.createElement('div');
    inputSignsContainer.classList.add('form__input-container');

    let imageSign = document.createElement('img');
    imageSign.classList.add('form__image-sign');
    imageSign.setAttribute('src', sign.image);
    imageSign.alt = sign.value;

    let inputSign = document.createElement('input');
    inputSign.classList.add('form__option-sign');
    inputSign.type = "radio";
    inputSign.id = sign.value;
    inputSign.name = 'sign';
    inputSign.value = sign.value;

    let labelSign = document.createElement('label');
    labelSign.classList.add('form__label');
    labelSign.setAttribute('for', sign.value);
    labelSign.innerText = sign.value;

    inputSignsContainer.append(imageSign, inputSign, labelSign);
    return inputSignsContainer;
}

function createSignContainer() {

    const signMainContainer = document.createElement('div');
    signMainContainer.classList.add('form__main-container');

    const headerForSignsForm = document.createElement('h2');
    headerForSignsForm.classList.add('form__header-signs');
    headerForSignsForm.innerText = "What is your zodiac sign?";

    const signContainer = document.createElement('div');
    signContainer.classList.add('form__container');

    // Input Signs Container
    for (let i = 0; i < signsData.length; i++) {
        let sign = signsData[i];
        let inputContainer = createInputSignsContainer(sign);
        signContainer.appendChild(inputContainer);
    }
    signMainContainer.append(headerForSignsForm, signContainer);

    return signMainContainer;
}

function createDateContainer() {

    const selectContainer = document.createElement('div');
    selectContainer.classList.add('form__date-container');

    const labelPrediction = document.createElement('label');
    labelPrediction.classList.add('form__label-date');
    labelPrediction.setAttribute('for', 'prediction-date');
    labelPrediction.innerText = "Select a prediction date:";

    const inputPrediction = document.createElement('select');
    inputPrediction.classList.add('form__list-date');
    inputPrediction.id = "prediction-date";
    inputPrediction.name = "prediction-date";

    // create option for Date for select form
    let selectedDate = ["Today", "Tomorrow"];
    for (let i = 0; i < selectedDate.length; i++) {
        const optionPredictionDate = document.createElement('option');
        optionPredictionDate.classList.add('form__option-date');
        optionPredictionDate.value = selectedDate[i];
        optionPredictionDate.innerText = selectedDate[i];
        inputPrediction.appendChild(optionPredictionDate);
    }

    selectContainer.append(labelPrediction, inputPrediction);

    return selectContainer;
}

// prediction section
function createPredictionSection(signDescription) {
    const sectionPrediction = document.createElement('section');
    sectionPrediction.classList.add('prediction');

    const predictionDate = createPredictionDate(signDescription);
    const predictionCard = createPredictionCard(signDescription);
    const additionalCard = createAdditionalCard(signDescription);

    sectionPrediction.append(predictionDate, predictionCard, additionalCard);

    return sectionPrediction;
}

function createPredictionDate(signDescription) {
    const predictionDate = document.createElement('div');
    predictionDate.classList.add('prediction__date');

    const predictionTitle = document.createElement('h2');
    predictionTitle.classList.add('prediction__title');
    predictionTitle.innerText = "Prediction date:"

    const predictionContent = document.createElement('p');
    predictionContent.classList.add('prediction__content');
    predictionContent.innerText = signDescription.current_date;

    predictionDate.append(predictionTitle, predictionContent);

    return predictionDate;
}

function createPredictionCard(signDescription) {
    const predictionCard = document.createElement('div');
    predictionCard.classList.add('prediction__card');

    const predictionTitle = document.createElement('h2');
    predictionTitle.classList.add('prediction__title');
    predictionTitle.innerText = "Your prediction:"

    const predictionContent = document.createElement('p');
    predictionContent.classList.add('prediction__content');
    predictionContent.innerText = signDescription.description;

    predictionCard.append(predictionTitle, predictionContent);

    return predictionCard;
}

function createAdditionalCard(signDescription) {
    const additionalCard = document.createElement('div');
    additionalCard.classList.add('prediction__additional-info');

    const aditionalTitle = document.createElement('h2');
    aditionalTitle.classList.add('prediction__title');
    aditionalTitle.innerText = "Additional:"

    const additionalList = document.createElement('ul');
    additionalList.classList.add('prediction__list');



    for (let key in signDescription) {
        let value = signDescription[key];
        if (key === 'lucky_time' || key === 'lucky_number' || key === 'compatibility' || key === 'mood') {
            const additionalItem = document.createElement('li');
            additionalItem.classList.add('prediction__item');
            if (key === 'compatibility') {
                additionalItem.innerText = (`Compatibility:  ${value}`);
            } else if (key === 'lucky_number') {
                additionalItem.innerText = (`Lucky number:  ${value}`);
            } else if (key === 'lucky_time') {
                additionalItem.innerText = (`Lucky time:  ${value}`);
            } else if (key === 'mood') {
                additionalItem.innerText = (`Mood:  ${value}`);
            }
            additionalList.appendChild(additionalItem);
        }
    }
    additionalCard.append(aditionalTitle, additionalList);
    return additionalCard;
}

// footer section
function createFooterSection() {

    const footerSection = document.createElement('footer');
    footerSection.classList.add('footer');

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer__copyright');

    const footerContent = document.createElement('p');
    footerContent.classList.add('footer__content-copyright');
    footerContent.innerText = 'Veranika Karpava © 2021 Brainstation';

    footerContainer.appendChild(footerContent);
    footerSection.appendChild(footerContainer);

    return footerSection;
}

function displayPrediction(signDescription) {
    const predictionSection = createPredictionSection(signDescription);
    mainElement.append(predictionSection);
}

const formSubmit = document.querySelector('.form__input');

formSubmit.addEventListener('submit', (event) => {

    event.preventDefault();

    const signInputValue = document.querySelector('.form__option-sign:checked').value.toLowerCase();

    const dateInputValue = document.querySelector('.form__list-date').value.toLowerCase();

    const predictionSection = document.querySelector('.prediction')

    if (mainElement.children.length > 1) {
        mainElement.removeChild(predictionSection);
        axios
            .post(`${apiUrl}?sign=${signInputValue}&day=${dateInputValue}`,
                { headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                const predictionDay = response.data;
                displayPrediction(predictionDay);
                console.log(predictionDay);
            })
            .catch(error => console.log(error))
    } else {
        axios
            .post(`${apiUrl}?sign=${signInputValue}&day=${dateInputValue}`,
                { headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                const predictionDay = response.data;
                displayPrediction(predictionDay);
                console.log(predictionDay);
            })
            .catch(error => console.log(error))
    }
})






