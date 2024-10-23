import { DetailsShipmentService } from './details-shipment.service';
import { DetailsShipment } from '../../entities/DetailsShipment.entity';
export declare class DetailsShipmentController {
    private readonly detailsShipmentService;
    constructor(detailsShipmentService: DetailsShipmentService);
    create(createDetailsShipmentDto: Partial<DetailsShipment>): Promise<DetailsShipment>;
    findAll(): Promise<DetailsShipment[]>;
    findOne(id: number): Promise<DetailsShipment>;
    update(id: number, updateDetailsShipmentDto: Partial<DetailsShipment>): Promise<DetailsShipment>;
    remove(id: number): Promise<void>;
}
