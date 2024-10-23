import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DetailsShipmentService } from './details-shipment.service';
import { DetailsShipment } from '../../entities/DetailsShipment.entity';

@Controller('details-shipments')
export class DetailsShipmentController {
  constructor(private readonly detailsShipmentService: DetailsShipmentService) {}

  @Post()
  async create(@Body() createDetailsShipmentDto: Partial<DetailsShipment>): Promise<DetailsShipment> {
    return this.detailsShipmentService.createDetailsShipment(createDetailsShipmentDto);
  }

  @Get()
  async findAll(): Promise<DetailsShipment[]> {
    return this.detailsShipmentService.findAllDetailsShipments();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<DetailsShipment> {
    return this.detailsShipmentService.findDetailsShipmentById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDetailsShipmentDto: Partial<DetailsShipment>): Promise<DetailsShipment> {
    return this.detailsShipmentService.updateDetailsShipment(id, updateDetailsShipmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.detailsShipmentService.deleteDetailsShipment(id);
  }
}
