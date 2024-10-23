import { Container as Container } from './Containers.entity';
import { DetailsShipment } from './DetailsShipment.entity';
export declare class Report {
    id: number;
    headerName: string;
    headerAddress: string;
    headerMobile: string;
    headerEmail: string;
    reportDate: Date;
    clienteSenores: string;
    clienteEmpresa: string;
    clienteDeposito: string;
    clientePostal: string;
    operadorArea: string;
    operadorResponsables1: string;
    operadorResponsables2: string;
    reportMv: string;
    containersReporte: string;
    containersLeyenda: string;
    containersDescripcion: string;
    containersDestino: string;
    reportDescription: string;
    reportNote: string;
    containers: Container[];
    detailsShipment: DetailsShipment;
}
