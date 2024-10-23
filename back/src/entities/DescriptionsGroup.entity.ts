// src/entities/DescriptionsGroup.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Description } from './Description.entity';

@Entity('t10_descriptions_group_entity')
export class DescriptionsGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Description, (description) => description.descriptionsGroups, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'description_id' })
  description: Description;

  @Column({ type: 'varchar', length: 255 })
  title: string;
}
