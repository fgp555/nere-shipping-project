// src/entities/DescriptionsGroup.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Description } from './Description.entity';

@Entity('t10_descriptions_group_entity')
export class DescriptionsGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @OneToMany(()=> Description, 
  (description) => description.descriptionsGroups, {
    eager: true
  })
  descriptions: Description[];
}
