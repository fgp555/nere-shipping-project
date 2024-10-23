import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { CreateUnstuffingContainerDto } from './dto/create-unstuffing-container.dto';
import { UnstuffingContainer } from 'src/entities/UnstuffingContainer.entity';

@Injectable()
export class UnstuffingContainerService {
  constructor(
    @InjectRepository(UnstuffingContainer)
    private unstuffingContainerRepository: Repository<UnstuffingContainer>,
  ) {}

  findAll(): Promise<UnstuffingContainer[]> {
    return this.unstuffingContainerRepository.find();
  }

  findOne(id: number): Promise<UnstuffingContainer> {
    return this.unstuffingContainerRepository.findOne({
      where: { id },
      relations: ['descriptions', 'detailsShipment'],
    });
  }

  create(createUnstuffingContainerDto: any){
    const unstuffingContainer = this.unstuffingContainerRepository.create(createUnstuffingContainerDto);
    return this.unstuffingContainerRepository.save(unstuffingContainer);
  }
}
