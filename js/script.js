class Calcolatrice {
    constructor(counter) {
        this.counter = counter;
    }

    increase() {
        return ++this.counter;
    }
    decrease() {
        return --this.counter;
    }
    reset() {
        return this.counter = 0;
    }
    get() {
        return this.counter;
    }

    set(counter) {

    }

}

class GestioneInterfacciaCalcolatrice {
    constructor(value, container) {
        this.value = value;
        this.container = container;
        this.calcolatrice = new Calcolatrice(0);
    }
    resetView() {
        value.style.color = "#808080";
        this.container.style.boxShadow = "2px 5px 5px 5px #808080";
    }

    changeColorView(color) {
        value.style.color = color;
        this.container.style.boxShadow = `2px 5px 5px 5px ${color}`;
    }

    get() {
        return this.calcolatrice.get();
    }

    increase() {
        return this.calcolatrice.increase();
    }

    decrease() {
        return this.calcolatrice.decrease();
    }

    reset() {
        return this.calcolatrice.reset();
    }
    set(counter) {

    }

    updateDisplayIncrease() {
        this.value.innerHTML = calcolatrice.increase();
        if (calcolatrice.get() > 0) {
            calcolatrice.changeColorView("green")
        }
        if (calcolatrice.get() === 0) {
            calcolatrice.resetView();
        }
    }

    updateDisplayDecrease() {
        this.value.innerHTML = calcolatrice.decrease();
        if (calcolatrice.get() < 0) {
            calcolatrice.changeColorView("red");
        }
        if (calcolatrice.get() === 0) {
            calcolatrice.resetView();
        }
    }

    updateDisplayReset() {
        this.value.innerHTML = calcolatrice.reset();
        calcolatrice.resetView();
    }
}

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const container = document.querySelector(".container");


const calcolatrice = new GestioneInterfacciaCalcolatrice(value, container);

btns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        const action = event.currentTarget.classList;
        if (action.contains("decrease")) {
            calcolatrice.updateDisplayDecrease();
        } else if (action.contains("increase")) {
            calcolatrice.updateDisplayIncrease();
        } else {
            calcolatrice.updateDisplayReset();
        }
    })
})