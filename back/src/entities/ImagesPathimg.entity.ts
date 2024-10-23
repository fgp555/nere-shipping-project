import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ImagesGroup } from './ImagesGroup.entity';

@Entity('t8_images_pathimg_entity')
export class ImagesPathimg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  path: string;

  @Column()
  description: string;

  @ManyToOne(() => ImagesGroup, (group) => group.imagesPathimg)
  imagesGroup: ImagesGroup;
}
