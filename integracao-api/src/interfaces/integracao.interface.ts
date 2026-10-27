export interface Integracao {
    id: string;
    sistemaOrigem: string;
    sistemaDestino: string;
    status: 'PENDENTE' | 'CONCLUIDO' | 'ERRO';
    payload: any;
    dataCriacao: Date;
}