import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CreateRent } from '../../../application/use-cases/create-rent';
import { UpdateReturnedRent } from '../../../application/use-cases/update-returned-rent';
import { CreateRentValidator } from '../validators/create-return.validator';
import { UpdateReturnedRentValidator } from '../validators/update-returned-rent.validator';

@Controller('rents')
export class RentController {
  constructor(
    private createRent: CreateRent,
    private updateReturnedRent: UpdateReturnedRent
  ) {}

  @Post('/')
  post(@Body() body: CreateRentValidator) {
    return this.createRent.execute(body);
  }

  @Put('/returned/:id')
  updateReturned(
    @Param('id') id: number,
    @Body() body: UpdateReturnedRentValidator
  ) {
    return this.updateReturnedRent.execute(id, body);
  }
}
