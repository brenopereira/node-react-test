import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateClient } from '../../../application/use-cases/create-client';
import { DeleteClient } from '../../../application/use-cases/delete-client';
import { ListClients } from '../../../application/use-cases/list-clients';
import { ShowClient } from '../../../application/use-cases/show-client';
import { UpdateClient } from '../../../application/use-cases/update-client';
import { CreateClientValidator } from '../validators/create-client.validator';
import { UpdateClientValidator } from '../validators/update-client.validator';

@Controller('clients')
export class ClientController {
  constructor(
    private listClients: ListClients,
    private createClient: CreateClient,
    private deleteClient: DeleteClient,
    private updateClient: UpdateClient,
    private showClient: ShowClient
  ) {}

  @Get('/')
  index() {
    return this.listClients.execute();
  }

  @Get('/:id')
  show(@Param('id') id: number) {
    return this.showClient.execute(id);
  }

  @Post('/')
  store(@Body() body: CreateClientValidator) {
    return this.createClient.execute(body);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() body: UpdateClientValidator) {
    return this.updateClient.execute(id, body);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.deleteClient.execute({ id });
  }
}
