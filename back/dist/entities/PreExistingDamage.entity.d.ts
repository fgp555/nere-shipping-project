import { Description } from './Description.entity';
import { DetailsShipment } from './DetailsShipment.entity';
export declare class PreExistingDamage {
    id: number;
    blNo: string;
    consignee: string;
    marks: string;
    qtyOfPkgs: number;
    goods: string;
    remarks: string;
    damageDescription: Description;
    detailsShipment: DetailsShipment;
}
