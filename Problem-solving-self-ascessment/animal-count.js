function animalCount(miles) {
    const animalDenceFirst10Miles = 10;
    const animalDenceSecond10Miles = 50;
    const animalDenceThird10Miles = 100;
    if (miles <= 10) {
        const first10Miles = miles * animalDenceFirst10Miles;
        return first10Miles;
    }
    else if (miles <= 20) {
        const first10Miles = 10 * animalDenceFirst10Miles;
        const rest = miles - 10;
        const second10Mile = rest * animalDenceSecond10Miles;
        const secondTotalAnimalDense = first10Miles + second10Mile;
        return secondTotalAnimalDense;
    }
    else {
        const first10Miles = 10 * animalDenceFirst10Miles;
        const second10Miles = 10 * animalDenceSecond10Miles;
        const restMiles = miles - 20;
        const third10Mile = restMiles * animalDenceThird10Miles;
        const totalAnimalDense = first10Miles + second10Miles + third10Mile;
        return totalAnimalDense;
    }

}

const animalDencity = animalCount(32);
console.log(animalDencity);