import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'BMW',
            model: '320',
            year: 2020
        },
        {
            id: 2,
            brand: 'Mercedes',
            model: 'Citan',
            year: 2021
        },
        {
            id: 3,
            brand: 'Audi',
            model: 'A4',
            year: 2022
        }
    ]

    findAll(){
        return this.cars;
    }

    findOneById(id: number){
        return this.cars.find(car => car.id === id);
    }
}
