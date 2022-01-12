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
    getCounter() {
        return this.counter;
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
    updateDisplayIncrease() {
        this.value.innerHTML = this.calcolatrice.increase();
        if (this.calcolatrice.getCounter() > 0) {
            this.changeColorView("green")
        }
        if (this.calcolatrice.getCounter() === 0) {
            this.resetView();
        }
    }

    updateDisplayDecrease() {
        this.value.innerHTML = this.calcolatrice.decrease();
        if (this.calcolatrice.getCounter() < 0) {
            this.changeColorView("red");
        }
        if (this.calcolatrice.getCounter() === 0) {
            this.resetView();
        }
    }

    updateDisplayReset() {
        this.value.innerHTML = this.calcolatrice.reset();
        this.resetView();
    }
}

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const container = document.querySelector(".mycontainer");


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



/*window.onload = function () {
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });
}*/

