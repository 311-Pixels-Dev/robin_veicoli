class User {
	private name: string
	private surname: string
	private email: string

	constructor(name: string, cognome: string) {
		this.name = name;
		this.surname = cognome
		this.email = this.name + "_" + this.surname + "@" + "gmail.com";
	}

	getName(): string {
		return this.name;
	}

	getEmail(): string {
		return this.email;
	}

	setName(name: string): void {
		if(name === "") return;
		this.name = name;
	}
}

export default User;