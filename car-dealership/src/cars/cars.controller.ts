import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly _carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this._carsService.findAll();
  }
  @Get(':id')
  getCarById(@Param('id') id: string) {
    const car = this._carsService.findOneById(+id);
    if (!car) return { error: 'car not found' };

    return {
      car,
    };
  }
}
