import { Container } from './Containers.entity';
import { DetailsShipment } from './DetailsShipment.entity';
export declare class RelevantTimes {
    id: number;
    date: Date;
    containers: Container;
    qtyOfPkgs: number;
    start: string;
    complete: string;
    timeUsedToSurvey: string;
    detailsShipment: DetailsShipment;
}
