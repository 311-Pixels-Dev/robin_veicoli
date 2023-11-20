import Veicolo from "./Veicolo";

class Moto implements Veicolo {
	name: string;
	model: string;
	color: string;

	constructor(name: string) {
		this.name = name
	}

	start(): void {
		console.log("MOTO: avvio " + this.name)
	}

}

export default Moto;