import User from "./models/User";
import Car from "./models/Car";
import Moto from "./models/Moto";
import Veicolo from "./models/Veicolo";
import usePrompt from "prompt-sync";

const prompt = usePrompt();

let name: string = prompt("come ti chiami? ");

console.log("ti chiami nome: " + name);


let bots: Array<Veicolo> = []