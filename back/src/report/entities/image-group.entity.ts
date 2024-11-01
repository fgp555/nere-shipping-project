import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
  } from 'typeorm';
  import { ReportEntity } from './report.entity';
  
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
  
    @ManyToOne(() => ReportEntity, (report) => report.images_groups)
    report: ReportEntity;
  }
  