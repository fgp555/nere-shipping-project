import { DetailsShipment } from './DetailsShipment.entity';
import { DescriptionsGroup } from './DescriptionsGroup.entity';
export declare class UnstuffingContainer {
    id: number;
    descriptionsGroup: DescriptionsGroup[];
    detailsShipment: DetailsShipment;
    note: string;
}
