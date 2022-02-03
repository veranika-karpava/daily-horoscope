const apiUrl = 'https://aztro.sameerkumar.website/';

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

    const logo = document.createElement('h1');
    logo.classList.add('header__logo');
    logo.innerText = 'Daily Horoscope';
    headerSection.appendChild(logo);

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

function createSignContainer() {

    const signContainer = document.createElement('div');
    signContainer.classList.add('form__container');

    const labelSign = document.createElement('label');
    labelSign.classList.add('form__label');
    labelSign.setAttribute('for', 'sign');
    labelSign.innerText = "Select your sign:";

    const inputSign = document.createElement('select');
    inputSign.classList.add('form__list-sign');
    inputSign.id = "sign";
    inputSign.name = "sign";

    const optionSignAries = document.createElement('option');
    optionSignAries.classList.add('form__option-sign');
    optionSignAries.value = "Aries"
    optionSignAries.innerText = "Aries";

    const optionSignTaurus = document.createElement('option');
    optionSignTaurus.classList.add('form__option-sign');
    optionSignTaurus.value = "Taurus"
    optionSignTaurus.innerText = "Taurus";

    const optionSignGemini = document.createElement('option');
    optionSignGemini.classList.add('form__option-sign');
    optionSignGemini.value = "Gemini"
    optionSignGemini.innerText = "Gemini";

    const optionSignCancer = document.createElement('option');
    optionSignCancer.classList.add('form__option-sign');
    optionSignCancer.value = "Cancer"
    optionSignCancer.innerText = "Cancer";

    const optionSignLeo = document.createElement('option');
    optionSignLeo.classList.add('form__option-sign');
    optionSignLeo.value = "Leo"
    optionSignLeo.innerText = "Leo";

    const optionSignVirgo = document.createElement('option');
    optionSignVirgo.classList.add('form__option-sign');
    optionSignVirgo.value = "Virgo"
    optionSignVirgo.innerText = "Virgo";

    const optionSignLibra = document.createElement('option');
    optionSignLibra.classList.add('form__option-sign');
    optionSignLibra.value = "Libra"
    optionSignLibra.innerText = "Libra";

    const optionSignScorpio = document.createElement('option');
    optionSignScorpio.classList.add('form__option-sign');
    optionSignScorpio.value = "Scorpio"
    optionSignScorpio.innerText = "Scorpio";

    const optionSignSagittarius = document.createElement('option');
    optionSignSagittarius.classList.add('form__option-sign');
    optionSignSagittarius.value = "Sagittarius"
    optionSignSagittarius.innerText = "Sagittarius";

    const optionSignCapricorn = document.createElement('option');
    optionSignCapricorn.classList.add('form__option-sign');
    optionSignCapricorn.value = "Capricorn"
    optionSignCapricorn.innerText = "Capricorn";

    const optionSignAquarius = document.createElement('option');
    optionSignAquarius.classList.add('form__option-sign');
    optionSignAquarius.value = "Aquarius"
    optionSignAquarius.innerText = "Aquarius";

    const optionSignPisces = document.createElement('option');
    optionSignPisces.classList.add('form__option-sign');
    optionSignPisces.value = "Pisces"
    optionSignPisces.innerText = "Pisces";

    inputSign.append(optionSignAries, optionSignTaurus, optionSignGemini, optionSignCancer, optionSignLeo, optionSignVirgo, optionSignLibra, optionSignScorpio, optionSignSagittarius, optionSignCapricorn, optionSignAquarius, optionSignPisces);

    signContainer.append(labelSign, inputSign);

    return signContainer;
}

function createDateContainer() {

    const selectContainer = document.createElement('div');
    selectContainer.classList.add('form__container');

    const labelPrediction = document.createElement('label');
    labelPrediction.classList.add('form__label');
    labelPrediction.setAttribute('for', 'prediction-date');
    labelPrediction.innerText = "Select a prediction date:";

    const inputPrediction = document.createElement('select');
    inputPrediction.classList.add('form__list-date');
    inputPrediction.id = "prediction-date";
    inputPrediction.name = "prediction-date";

    const optionPredictionToday = document.createElement('option');
    optionPredictionToday.classList.add('form__option-date');
    optionPredictionToday.value = "Today"
    optionPredictionToday.innerText = "Today";

    const optionPredictionTomorrow = document.createElement('option');
    optionPredictionTomorrow.classList.add('form__option-date');
    optionPredictionTomorrow.value = "Tomorrow"
    optionPredictionTomorrow.innerText = "Tomorrow";

    inputPrediction.append(optionPredictionToday, optionPredictionTomorrow);

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

    const additionalItemCompatibility = document.createElement('li');
    additionalItemCompatibility.classList.add('prediction__item');
    additionalItemCompatibility.innerText = (`Compatibility:  ${signDescription.compatibility}`);

    const additionalItemNumber = document.createElement('li');
    additionalItemNumber.classList.add('prediction__item');
    additionalItemNumber.innerText = (`Lucky number:  ${signDescription.lucky_number}`);

    const additionalItemTime = document.createElement('li');
    additionalItemTime.classList.add('prediction__item');
    additionalItemTime.innerText = (`Lucky time:  ${signDescription.lucky_time}`);

    additionalList.append(additionalItemCompatibility, additionalItemNumber, additionalItemTime);

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

    const signInputValue = document.querySelector('.form__list-sign').value.toLowerCase();

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

    // event.target.reset();
})






