import { Containers } from './Containers.entity';
import { DetailsShipment } from './DetailsShipment.entity';
export declare class RelevantTimes {
    id: number;
    date: Date;
    container: Containers;
    qtyOfPkgs: number;
    start: string;
    complete: string;
    timeUsedToSurvey: string;
    detailsShipment: DetailsShipment;
}
