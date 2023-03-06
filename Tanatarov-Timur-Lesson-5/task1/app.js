const CONSTANT_PROPERTIES = {
    FUEL: 5,
    DURABILITY: 100,
    SPEED: 10,
    TRACK_LENGTH: 200,
};

class DefaultCar {
    constructor(fuel = 0, lowFuelConsumption = 0, durability = 0, speed = 0) {
        this.fuel = +fuel;
        this.lowFuelConsumption = +lowFuelConsumption;
        this.durability = +durability;
        this.speed = +speed;
        this.totalFuel = +(this.fuel + CONSTANT_PROPERTIES.FUEL);
        this.totalRange = +(this.totalFuel * CONSTANT_PROPERTIES.TRACK_LENGTH
            + this.totalFuel * 0.1 * CONSTANT_PROPERTIES.TRACK_LENGTH * this.lowFuelConsumption);
        this.totalSpeed = +(CONSTANT_PROPERTIES.SPEED + this.speed * 0.05 * CONSTANT_PROPERTIES.SPEED);
        this.totalDurability = +(CONSTANT_PROPERTIES.DURABILITY + this.durability * 0.1 * CONSTANT_PROPERTIES.DURABILITY);
        if (this.fuel + this.lowFuelConsumption + this.durability + this.speed > 12) {
            throw Error("Превышен лимит распределяемых очков");
        }
    }
}

class CivilianCar extends DefaultCar {
    constructor(fuel = 2, lowFuelConsumption = 2, durability = 2, speed = 4, name = 'Unknown Car',) {
        super(fuel, lowFuelConsumption, durability, speed, name,);
        if (this.fuel < 2 || this.lowFuelConsumption < 2 || this.durability < 2 || this.speed < 4) {
            throw Error("Невозможно уменьшить кол-во предустановленных очков");
        }
    }
}

class SportCar extends DefaultCar {
    constructor(fuel = 2, lowFuelConsumption = 1, durability = 1, speed = 6, name = 'Unknown Car',) {
        super(fuel, lowFuelConsumption, durability, speed, name,);
        if (this.fuel < 2 || this.lowFuelConsumption < 1 || this.durability < 1 || this.speed < 6) {
            throw Error("Невозможно уменьшить кол-во предустановленных очков");
        }
    }
}

class MilitaryCar extends DefaultCar {
    constructor(fuel = 2, lowFuelConsumption = 2, durability = 4, speed = 2, name = 'Unknown Car',) {
        super(fuel, lowFuelConsumption, durability, speed, name,);
        if (this.fuel < 2 || this.lowFuelConsumption < 2 || this.durability < 4 || this.speed < 2) {
            throw Error("Невозможно уменьшить кол-во предустановленных очков");
        }
    }
}

let whichCars = '';

const createCar = (typeOfCar, firstCustom, firstValue, secondCustom, secondValue) => {
    let car = {};
    switch (typeOfCar) {
        case 'Sport': {
            switch (firstCustom) {
                case 'fuel': {
                    switch (secondCustom) {
                        case 'lowFuelConsumption' : {
                            car = new SportCar(2 + firstValue, 1 + secondValue, 1, 6, 'User car');
                            break;
                        }
                        case 'durability' : {
                            car = new SportCar(2 + firstValue, 1, 1 + secondValue, 6, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new SportCar(2 + firstValue, 1, 1, 6 + secondValue, 'User car');
                            break;
                        }
                        case 'fuel': {
                            car = new SportCar(2 + firstValue + secondValue, 1, 1, 6, 'User car');
                            break;
                        }
                        case '': {
                            car = new SportCar(2 + firstValue, 1, 1, 6, 'User car');
                            break
                        }
                    }
                    break;
                }
                case 'lowFuelConsumption': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new SportCar(2 + secondValue, 1 + firstValue, 1, 6, 'User car');
                            break;
                        }
                        case 'durability' : {
                            car = new SportCar(2, 1 + firstValue, 1 + secondValue, 6, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new SportCar(2, 1 + firstValue, 1, 6 + secondValue, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new SportCar(2, 1 + firstValue + secondValue, 1, 6, 'User car');
                            break;
                        }
                        case '' : {
                            car = new SportCar(2, 1 + firstValue, 1, 6, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case 'durability': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new SportCar(2 + secondValue, 1, 1 + firstValue, 6, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new SportCar(2, 1 + secondValue, 1 + firstValue, 6, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new SportCar(2, 1, 1 + firstValue, 6 + secondValue, 'User car');
                            break;
                        }
                        case 'durability' : {
                            car = new SportCar(2, 1, 1 + firstValue + secondValue, 6, 'User car');
                            break;
                        }
                        case '' : {
                            car = new SportCar(2, 1, 1 + firstValue, 6, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case 'speed': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new SportCar(2 + secondValue, 1, 1, 6 + firstValue, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new SportCar(2, 1 + secondValue, 1, 6 + firstValue, 'User car');
                            break;
                        }
                        case 'durability': {
                            car = new SportCar(2, 1, 1 + secondValue, 6 + firstValue, 'User car');
                            break;
                        }
                        case 'speed' : {
                            car = new SportCar(2, 1, 1, 6 + firstValue + secondValue, 'User car');
                            break;
                        }
                        case '' : {
                            car = new SportCar(2, 1, 1, 6 + firstValue, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case '': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new SportCar(2 + secondValue, 1, 1, 6, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new SportCar(2, 1 + secondValue, 1, 6, 'User car');
                            break;
                        }
                        case 'durability': {
                            car = new SportCar(2, 1, 1 + secondValue, 6, 'User car');
                            break;
                        }
                        case 'speed' : {
                            car = new SportCar(2, 1, 1, 6 + secondValue, 'User car');
                            break;
                        }
                        case '' : {
                            car = new SportCar(2, 1, 1, 6, 'User car');
                            break;
                        }
                    }
                    break;
                }
            }
            break;
        }
        case 'Civilian': {
            switch (firstCustom) {
                case 'fuel': {
                    switch (secondCustom) {
                        case 'lowFuelConsumption' : {
                            car = new CivilianCar(2 + firstValue, 2 + secondValue, 2, 4, 'User car');
                            break;
                        }
                        case 'durability' : {
                            car = new CivilianCar(2 + firstValue, 2, 2 + secondValue, 4, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new CivilianCar(2 + firstValue, 2, 2, 4 + secondValue, 'User car');
                            break;
                        }
                        case 'fuel' : {
                            car = new CivilianCar(2 + firstValue + secondValue, 2, 2, 4, 'User car');
                            break;
                        }
                        case '' : {
                            car = new CivilianCar(2 + firstValue, 2, 2, 4, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case 'lowFuelConsumption': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new CivilianCar(2 + secondValue, 2 + firstValue, 2, 4, 'User car');
                            break;
                        }
                        case 'durability' : {
                            car = new CivilianCar(2, 2 + firstValue, 2 + secondValue, 4, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new CivilianCar(2, 2 + firstValue, 2, 4 + secondValue, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new CivilianCar(2, 2 + firstValue + secondValue, 2, 4, 'User car');
                            break;
                        }
                        case '' : {
                            car = new CivilianCar(2, 2 + firstValue, 2, 4, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case 'durability': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new CivilianCar(2 + secondValue, 2, 2 + firstValue, 4, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new CivilianCar(2, 2 + secondValue, 2 + firstValue, 4, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new CivilianCar(2, 2, 2 + firstValue, 4 + secondValue, 'User car');
                            break;
                        }
                        case 'durability' : {
                            car = new CivilianCar(2, 2, 2 + firstValue + secondValue, 4, 'User car');
                            break;
                        }
                        case '' : {
                            car = new CivilianCar(2, 2, 2 + firstValue, 4, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case 'speed': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new CivilianCar(2 + secondValue, 2, 2, 4 + firstValue, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new CivilianCar(2, 2 + secondValue, 2, 4 + firstValue, 'User car');
                            break;
                        }
                        case 'durability': {
                            car = new CivilianCar(2, 2, 2 + secondValue, 4 + firstValue, 'User car');
                            break;
                        }
                        case 'speed' : {
                            car = new CivilianCar(2, 2, 2, 4 + firstValue + secondValue, 'User car');
                            break;
                        }
                        case '' : {
                            car = new CivilianCar(2, 2, 2, 4 + firstValue, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case '': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new CivilianCar(2 + secondValue, 2, 2, 4, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new CivilianCar(2, 2 + secondValue, 2, 4, 'User car');
                            break;
                        }
                        case 'durability': {
                            car = new CivilianCar(2, 2, 2 + secondValue, 4, 'User car');
                            break;
                        }
                        case 'speed' : {
                            car = new CivilianCar(2, 2, 2, 4 + secondValue, 'User car');
                            break;
                        }
                        case '' : {
                            car = new CivilianCar(2, 2, 2, 4, 'User car');
                            break;
                        }
                    }
                    break;
                }
            }
            break;
        }
        case 'Military': {
            switch (firstCustom) {
                case 'fuel': {
                    switch (secondCustom) {
                        case 'lowFuelConsumption' : {
                            car = new MilitaryCar(2 + firstValue, 2 + secondValue, 4, 2, 'User car');
                            break;
                        }
                        case 'durability' : {
                            car = new MilitaryCar(2 + firstValue, 2, 4 + secondValue, 2, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new MilitaryCar(2 + firstValue, 2, 4, 2 + secondValue, 'User car');
                            break;
                        }
                        case 'fuel' : {
                            car = new MilitaryCar(2 + firstValue + secondValue, 2, 4, 2, 'User car');
                            break;
                        }
                        case '' : {
                            car = new MilitaryCar(2 + firstValue, 2, 4, 2, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case 'lowFuelConsumption': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new MilitaryCar(2 + secondValue, 2 + firstValue, 4, 2, 'User car');
                            break;
                        }
                        case 'durability' : {
                            car = new MilitaryCar(2, 2 + firstValue, 4 + secondValue, 2, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new MilitaryCar(2, 2 + firstValue, 4, 2 + secondValue, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new MilitaryCar(2, 2 + firstValue + secondValue, 4, 2, 'User car');
                            break;
                        }
                        case '' : {
                            car = new MilitaryCar(2, 2 + firstValue, 4, 2, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case 'durability': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new MilitaryCar(2 + secondValue, 2, 4 + firstValue, 2, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new MilitaryCar(2, 2 + secondValue, 4 + firstValue, 2, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new MilitaryCar(2, 2, 4 + firstValue, 2 + secondValue, 'User car');
                            break;
                        }
                        case 'durability': {
                            car = new MilitaryCar(2, 2, 4 + firstValue + secondValue, 2, 'User car');
                            break;
                        }
                        case '': {
                            car = new MilitaryCar(2, 2, 4 + firstValue, 2, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case 'speed': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new MilitaryCar(2 + secondValue, 2, 4, 2 + firstValue, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new MilitaryCar(2, 2 + secondValue, 4, 2 + firstValue, 'User car');
                            break;
                        }
                        case 'durability': {
                            car = new MilitaryCar(2, 2, 4 + secondValue, 2 + firstValue, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new MilitaryCar(2, 2, 4, 2 + firstValue + secondValue, 'User car');
                            break;
                        }
                        case '': {
                            car = new MilitaryCar(2, 2, 4, 2 + firstValue, 'User car');
                            break;
                        }
                    }
                    break;
                }
                case '': {
                    switch (secondCustom) {
                        case 'fuel' : {
                            car = new MilitaryCar(2 + secondValue, 2, 4, 2, 'User car');
                            break;
                        }
                        case 'lowFuelConsumption' : {
                            car = new MilitaryCar(2, 2 + secondValue, 4, 2, 'User car');
                            break;
                        }
                        case 'durability': {
                            car = new MilitaryCar(2, 2, 4 + secondValue, 2, 'User car');
                            break;
                        }
                        case 'speed': {
                            car = new MilitaryCar(2, 2, 4, 2 + secondValue, 'User car');
                            break;
                        }
                        case '': {
                            car = new MilitaryCar(2, 2, 4, 2, 'User car');
                            break;
                        }
                    }
                    break;
                }
            }
            break;
        }
        default: {
            throw Error('Введите верное значение типа автомобиля: Civilian, Sport или Military');
        }
    }
    return car;
};

const createUserCar = (typeOfCar, firstCustom, firstValue, secondCustom, secondValue) => {
    whichCars = typeOfCar;
    return createCar(typeOfCar, firstCustom, firstValue, secondCustom, secondValue);
};

const createEnemiesCars = (numberOfEnemies) => {
    const typeOfCars = whichCars;
    if (numberOfEnemies < 1 || !Number.isInteger(numberOfEnemies)) {
        throw Error('Количество участников должно быть числом, большим нуля.')
    }

    const cars = [];

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    for (let i = 0; i < numberOfEnemies; i++) {
        const features = [
            'fuel', 'lowFuelConsumption', 'durability', 'speed',
        ];

        let firstCustom = features[getRandomNumber(0, 4)];
        let secondCustom = features[getRandomNumber(0, 4)];

        let firstValue = 0;
        let secondValue = 0;

        function checkForRules() {
            firstValue = getRandomNumber(0, 3);
            secondValue = getRandomNumber(0, 3);
            if (firstValue + secondValue > 2) {
                checkForRules(firstValue, secondValue);
            }
        }

        checkForRules();

        cars[i] = createCar(typeOfCars, firstCustom, firstValue, secondCustom, secondValue);
    }
    return cars;
};

const compare = (array) => {
    const maxes = {
        maxSpeed: 0,
        maxDurability: 0,
        maxRange: 0
    };

    const cars = [];

    const comparedArray = JSON.parse(JSON.stringify(array));

    for (let i = 0; i < comparedArray.length; i++) {
        maxes.maxSpeed = (comparedArray[i].totalSpeed > maxes.maxSpeed) ? comparedArray[i].totalSpeed : maxes.maxSpeed;
        maxes.maxDurability = (comparedArray[i].totalDurability > maxes.maxDurability) ? comparedArray[i].totalDurability : maxes.maxDurability;
        maxes.maxRange = (comparedArray[i].totalRange > maxes.maxRange) ? comparedArray[i].totalRange : maxes.maxRange;
    }

    for (let i = 0; i < comparedArray.length; i++) {
        if (i > 0) {
            cars[i] = {
                powerReserve: null,
                durability: null,
                speed: null,
                name: `Car ${[i]}`,
            };
        } else {
            cars[i] = {
                powerReserve: null,
                durability: null,
                speed: null,
                name: `Ваша машина`,
            };
        }

        cars[i].powerReserve = `${Math.round((comparedArray[i].totalRange * 100) / maxes.maxRange)}%`;
        cars[i].durability = `${Math.round((comparedArray[i].totalDurability * 100) / maxes.maxDurability)}%`;
        cars[i].speed = `${Math.round((comparedArray[i].totalSpeed * 100) / maxes.maxSpeed)}%`;
    }
    return cars;
};

document.querySelector('.selected-type-of-car').addEventListener('click', () => {
    let radio = document.querySelectorAll('.i-1');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            whichCars = radio[i].value;
            break;
        }
    }
    document.querySelector('.out-1').innerHTML = `Вы выбрали ${whichCars} автомобиль.`;
});

let firstCustom = '';
let secondCustom = '';

document.querySelector('.selected-feature-of-car-1').addEventListener('click', () => {
    let radio = document.querySelectorAll('.i-2');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            firstCustom = radio[i].value;
            if (firstCustom) {
                document.querySelector('.out-2').innerHTML = `Вы выбрали ${firstCustom}.`;
            }
            break;
        }
    }

});

document.querySelector('.selected-feature-of-car-2').addEventListener('click', () => {
    let radio = document.querySelectorAll('.i-3');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            secondCustom = radio[i].value;
            if (secondCustom) {
                document.querySelector('.out-3').innerHTML = `Вы выбрали ${secondCustom}.`;
            }
            break;
        }
    }
});

let firstValue = 0;
let secondValue = 0;
let usersCar = null;
let hasSettings = false;

document.querySelector('.selected-feature-of-car').addEventListener('click', () => {
    if (!whichCars) {
        alert('Выберите тип автомобиля перед его улучшением');
    }
    if (!!firstCustom && !!firstCustom) {
        firstValue = 1;
        secondValue = 1;
        document.querySelector('.out-30').innerHTML = `Вы увеличили ${firstCustom} на ${firstValue} и ${secondCustom} на ${secondValue}.`;
    }
    if (!firstCustom) {
        firstValue = 0;
        if (!!secondCustom) {
            secondValue = 2;
            document.querySelector('.out-30').innerHTML = `Вы увеличили ${secondCustom} на ${secondValue}.`;
        }
    }
    if (!secondCustom) {
        secondValue = 0;
        if (!!firstCustom) {
            firstValue = 2;
            document.querySelector('.out-30').innerHTML = `Вы увеличили ${firstCustom} на ${firstValue}.`;
        } else {
            document.querySelector('.out-30').innerHTML = `Вы не увеличили никакие характеристики.`;
        }
    }
    hasSettings = true;
    usersCar = createUserCar(whichCars, firstCustom, firstValue, secondCustom, secondValue);
    usersCar.name = 'Ваш автомобиль';
});

let numberOfEnemies = 0;
let hasEnemies = false;
document.querySelector('.selected-number-of-enemies').addEventListener('click', () => {
    if (!hasSettings) {
        alert('Примените улучшение автомобиля перед выбором количества соперников')
    }
    numberOfEnemies = document.querySelector('.i-4').value;
    const enemies = createEnemiesCars(+numberOfEnemies);
    const arr = [usersCar, ...enemies];
    const res = compare(arr);
    document.querySelector('.out-4').innerHTML = `Вы выбрали ${numberOfEnemies} противников. Ниже представлена сравнительная характеристика Вашего автомобиля с автомобилями соперников.`;
    if (!hasEnemies) {
        hasEnemies = true;
        let b = document.getElementById("body");
        res.forEach(e => b.innerHTML += `
        <fieldset> 
            <legend>${e.name}</legend>  
            <div>
                Прочность: ${e.durability}
            </div> 
                Запас хода: ${e.powerReserve} 
            <div>
                Скорость: ${e.speed}
            </div> 
        </fieldset>`)
    }
});
