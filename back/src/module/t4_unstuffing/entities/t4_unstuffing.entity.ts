// back/src/module/t4_unstuffing/entities/t4_unstuffing.entity.ts

import { ImageGroupEntity } from 'src/module/image/image-group.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('T4Unstuffing')
export class T4UnstuffingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json') // Cambia a json para almacenar el array
  notes: string[];

  @Column('text')
  foot_note: string;

  @OneToMany(() => ImageGroupEntity, (imageGroup) => imageGroup.unstuffing, {
    cascade: true,
    eager: true,
  })
  images_groups: ImageGroupEntity[];
}
