import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'BMW',
            model: '320',
            year: 2020
        },
        {
            id: uuid(),
            brand: 'Mercedes',
            model: 'Citan',
            year: 2021
        },
        {
            id: uuid(),
            brand: 'Audi',
            model: 'A4',
            year: 2022
        }
    ]

    findAll(){
        return this.cars;
    }

    findOneById(id: string){
        const car = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }
}
