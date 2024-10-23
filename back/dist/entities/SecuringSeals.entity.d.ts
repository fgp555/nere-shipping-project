import { Container } from './Containers.entity';
import { DetailsShipment } from './DetailsShipment.entity';
export declare class SecuringSeals {
    id: number;
    containers: Container[];
    type: string;
    wwasSafetySeals: string;
    argentineanCustomsSeal: string;
    others: string;
    detailsShipment: DetailsShipment;
}
