export interface ILancamento {
    id?: number;
    dataHoraInsercao?: Date;
    dataLancamento: Date;
    tipoLancamento: string;
    valorBrl: number;
}