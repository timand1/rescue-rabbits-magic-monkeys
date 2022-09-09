export interface Animal {
	name: string;
    image: string;
	species: string;
    age: string;
    gender: string;
    breed: string;
    date: string;
    about: string;
    location: string;
    diseases: string;
    vaccinationer: string;
    children: string;
    animalId: number;
};

export interface User {
	fullName: string;
    email: string;
	adress: string;
    zipcode: number;
    about: string;
    extra: string;
    userId: number;
};

export interface Adopted {
    animalId: number;
    userId: number;
};