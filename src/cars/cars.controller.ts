import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get() // isso vai indiciar que ao fazer uma peticao get a essa rota, o metodo getAllCars sera chamado 127.0.0.1:3000/cars
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number){
        return this.carsService.findOneById(id);
    }
}
