import { Repository } from 'typeorm';
import { DetailsShipment } from '../../entities/DetailsShipment.entity';
export declare class DetailsShipmentService {
    private readonly detailsShipmentRepository;
    constructor(detailsShipmentRepository: Repository<DetailsShipment>);
    createDetailsShipment(data: Partial<DetailsShipment>): Promise<DetailsShipment>;
    findAllDetailsShipments(): Promise<DetailsShipment[]>;
    findDetailsShipmentById(id: number): Promise<DetailsShipment>;
    updateDetailsShipment(id: number, data: Partial<DetailsShipment>): Promise<DetailsShipment>;
    deleteDetailsShipment(id: number): Promise<void>;
}
