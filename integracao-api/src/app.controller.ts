import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('integracoes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  listarTodas() {
    return this.appService.listarIntegracoes();
  }

  @Post()
  criarNova(

    @Body('origem') origem: string,
    @Body('destino') destino: string,
    @Body('dados') dados: any
  ) {
    return this.appService.criarIntegracao(origem, destino, dados);
  }
}
