import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe) // isso vai validar o payload de todos os metodos que estao nesse controller
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get() // isso vai indiciar que ao fazer uma peticao get a essa rota, o metodo getAllCars sera chamado 127.0.0.1:3000/cars
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id') // isso vai indiciar que ao fazer uma peticao get a essa rota, o metodo getCarById sera chamado 127.0.0.1:3000/cars/:id
    //! podemos criar um pipe de uuid em especifico para a versao que esteja usando criando uma instancia de ParseUUIDPipe
    //! exemplo: new ParseUUIDPipe({ version: '4' })
    getCarById(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.findOneById(id);
    }
    
    @Post()
    // @UsePipes(ValidationPipe) // Isso vai validar somente o payload do metodo createCar POST
    createCar(@Body() payload: CreateCarDto){
        return payload;
    }

    @Patch(':id')
    updateCar(@Body() payload: any){
        return payload;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return id;
    }
}
