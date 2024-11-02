import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
  } from 'typeorm';
import { T4UnstuffingEntity } from '../t4_unstuffing/entities/t4_unstuffing.entity';
  
  @Entity('image_groups')
  export class ImageGroupEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    group_name: string;
  
    @Column('json') // Cambia a json para almacenar arrays
    images: string[];
  
    @Column('json') // Cambia a json para almacenar arrays
    images_notes: string[];
  
    @ManyToOne(() => T4UnstuffingEntity, (report) => report.images_groups)
    unstuffing: T4UnstuffingEntity;
  }
  