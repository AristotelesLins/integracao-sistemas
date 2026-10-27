import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IntegracaoEntity } from "./entities/integracao.entity";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(IntegracaoEntity)
    private integracaoRepository: Repository<IntegracaoEntity>
  ) {}

  async criarIntegracao(origem: string, destino: string, dados: any): Promise<IntegracaoEntity> {

    const novaIntegracao = this.integracaoRepository.create({
      sistemaOrigem: origem,
      sistemaDestino: destino,
      payload: dados,
    });
    return await this.integracaoRepository.save(novaIntegracao);
  }

async listarIntegracoes(): Promise<IntegracaoEntity[]> {
    return await this.integracaoRepository.find();
  }
}
