import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetailsShipment } from '../../entities/DetailsShipment.entity';

@Injectable()
export class DetailsShipmentService {
  constructor(
    @InjectRepository(DetailsShipment)
    private readonly detailsShipmentRepository: Repository<DetailsShipment>,
  ) {}

  async createDetailsShipment(data: Partial<DetailsShipment>): Promise<DetailsShipment> {
    const detailsShipment = this.detailsShipmentRepository.create(data);
    return this.detailsShipmentRepository.save(detailsShipment);
  }

  async findAllDetailsShipments(): Promise<DetailsShipment[]> {
    return this.detailsShipmentRepository.find();
  }

  async findDetailsShipmentById(id: number): Promise<DetailsShipment> {
    return this.detailsShipmentRepository.findOne({ where: { id } });
  }

  async updateDetailsShipment(id: number, data: Partial<DetailsShipment>): Promise<DetailsShipment> {
    await this.detailsShipmentRepository.update(id, data);
    return this.detailsShipmentRepository.findOne({ where: { id } });
  }

  async deleteDetailsShipment(id: number): Promise<void> {
    await this.detailsShipmentRepository.delete(id);
  }
}
