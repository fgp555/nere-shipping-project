import { ReportEntity } from './report.entity';
export declare class HeaderEntity {
    id: number;
    header_name: string;
    header_address: string;
    header_mobile: string;
    header_email: string;
    report_date: string;
    cliente_senores: string;
    cliente_empresa: string;
    cliente_deposito: string;
    cliente_postal: string;
    operador_area: string;
    operador_responsables1: string;
    operador_responsables2: string;
    report_mv: string;
    containers_reporte: string;
    containers_leyenda: string;
    containers_code: string[];
    containers_descripcion: string;
    containers_destino: string;
    report_description: string;
    report_note: string;
    report: ReportEntity;
}
