import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity('integracoes')
export class IntegracaoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

    @Column()
    sistemaOrigem: string;

    @Column()
    sistemaDestino: string;

    @Column({ default: 'PENDENTE' })
    status: string;

    @Column({ type: 'jsonb', nullable: true })
    payload: any;

    @CreateDateColumn()
    dataCriacao: Date;
}