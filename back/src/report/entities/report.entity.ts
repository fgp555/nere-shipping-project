import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
  } from 'typeorm';
  import { ImageGroupEntity } from './image-group.entity';
  
  @Entity('reports')
  export class ReportEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('json') // Cambia a json para almacenar el array
    notes: string[];
  
    @Column('text')
    foot_note: string;
  
    @OneToMany(() => ImageGroupEntity, (imageGroup) => imageGroup.report, {
      cascade: true,
      eager: true,
    })
    images_groups: ImageGroupEntity[];
  }
  