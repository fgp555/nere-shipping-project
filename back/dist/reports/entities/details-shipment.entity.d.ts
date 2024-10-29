import { Report } from './report.entity';
export declare class DetailsShipment {
    id: number;
    vessel: string;
    voyage: string;
    mbl_code: string;
    pol: string;
    shipper: string;
    pod: string;
    consignee: string;
    qty_of_pkgs: number;
    goods: string;
    gross_weight: string;
    report: Report;
}
