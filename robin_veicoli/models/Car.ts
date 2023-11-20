import Veicolo from "./Veicolo";

class Car implements Veicolo {
	name: string;
	model: string;
	color: string;

	constructor(name: string) {
		this.name = name;
	}

	start(): void {
		console.log("Car: starting...");
	}

	cambiaMarcia() {
		console.log("Inserisco nuova marcia");
	}

	clacson(){
		console.log("BEEP");
	}
}

export default Car;