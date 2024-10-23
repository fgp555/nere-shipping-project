import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn, Column } from 'typeorm';
import { DetailsShipment } from './DetailsShipment.entity';
import { DescriptionsGroup } from './DescriptionsGroup.entity';

@Entity('t4_unstuffing_container_entity')
export class UnstuffingContainer {
  @PrimaryGeneratedColumn()
  id: number;

  // Cambiamos la relación a @ManyToMany para permitir múltiples grupos de descripciones
  @ManyToMany(
    () => DescriptionsGroup, 
    (group) => group.unstuffingContainers, {
    eager: true,
    cascade: true,
  })
  @JoinTable({
    name: 'unstuffing_container_descriptions_group', // Tabla intermedia
    joinColumn: { name: 'unstuffing_container_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'descriptions_group_id', referencedColumnName: 'id' },
  })
  descriptionsGroup: DescriptionsGroup[];

  @ManyToOne(() => DetailsShipment, (details) => details.unstuffingContainers, {
    eager: true,
  })
  @JoinColumn({ name: 'details_shipment_id' })
  detailsShipment: DetailsShipment;

  @Column({ type: 'text' })
  note: string;
}
