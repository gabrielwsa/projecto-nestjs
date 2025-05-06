import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

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

    create(payload: CreateCarDto){
        const newCar = { id: uuid(), ...payload };
        this.cars.push(newCar);
        return newCar;
    }


    update(id: string, payload: UpdateCarDto){
        let carDB = this.findOneById(id);
        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDB = {...carDB, ...payload}
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    delete(id: string){
        this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        return this.cars;
    }

}
