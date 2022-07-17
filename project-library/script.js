//-------------------------------------------//
let garage = [
]

function Car(brand, model, year, color){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.horn = function(){
        console.log('beep beep mother fucker')
    }
    this.addToGarage = function(){
        garage.push(this);
    };

    this.addToGarage();

}

const car1 = new Car('buick', 'station wagon', 1983, 'wood')
const car2 = new Car('volkswagon', 'beetle', 1996, 'orange')
const car3 = new Car('honda', 'civic', 2020, 'blue')
const car4 = new Car('dodge', 'durango', 1999, 'black')
const car5 = new Car('audi', 's7', 1999, 'silver')



function showCars(){
    for(car of garage) {
        document.querySelector('#wrap').innerHTML
        += '<article>'+
        `<h3>${car.brand}</h3>`+
        `<p>model: ${car.model} year: ${car.year} color: ${car.color}</p>`+
        `</article>`;
    }
}
showCars();