import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

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

    @Get() // isso vai indiciar que ao fazer uma peticao get a essa rota, o metodo getAllCars sera chamado 127.0.0.1:3000/cars
    getAllCars(){
        return this.cars
    }

    @Get(':id')
    getCarById(@Param('id') id: string){
        return this.cars.find(car => car.id === parseInt(id));
    }
}
