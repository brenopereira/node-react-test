import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCopy } from '../../../application/use-cases/create-copy';
import { DeleteCopy } from '../../../application/use-cases/delete-copy';
import { ListCopy } from '../../../application/use-cases/list-copy';
import { ShowCopy } from '../../../application/use-cases/show-copy';
import { UpdateCopy } from '../../../application/use-cases/update-copy';
import { CreateCopyValidator } from '../validators/create-copy.validator';
import { UpdateCopyValidator } from '../validators/update-copy.validator';

@Controller('copies')
export class CopyController {
  constructor(
    private createCopy: CreateCopy,
    private listCopy: ListCopy,
    private deleteCopy: DeleteCopy,
    private showCopy: ShowCopy,
    private updateCopy: UpdateCopy
  ) {}

  @Get('/')
  index() {
    return this.listCopy.execute();
  }

  @Get('/:id')
  show(@Param('id') id: number) {
    return this.showCopy.execute(id);
  }

  @Post('/')
  store(@Body() body: CreateCopyValidator) {
    return this.createCopy.execute(body);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() body: UpdateCopyValidator) {
    return this.updateCopy.execute(id, body);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.deleteCopy.execute({ id });
  }
}
