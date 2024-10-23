import { DetailsShipment } from './DetailsShipment.entity';
import { DescriptionsGroup } from './DescriptionsGroup.entity';
export declare class PreExistingDamage {
    id: number;
    blNo: string;
    consignee: string;
    marks: string;
    qtyOfPkgs: number;
    goods: string;
    remarks: string;
    descriptionsGroup: DescriptionsGroup[];
    detailsShipment: DetailsShipment;
}
