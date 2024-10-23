import { Containers } from './Containers.entity';
import { DetailsShipment } from './DetailsShipment.entity';
export declare class SecuringSeals {
    id: number;
    container: Containers;
    type: string;
    wwasSafetySeals: string;
    argentineanCustomsSeal: string;
    others: string;
    detailsShipment: DetailsShipment;
}
