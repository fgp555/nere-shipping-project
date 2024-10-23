// back/src/modules/final-report/final-report.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageEntity } from 'src/modules/image/entity-dtos/image.entity';
import { PreDamageEntity } from './entity-dtos/5pre-damage.entity';

@Injectable()
export class PreDamageService {
  constructor(
    @InjectRepository(PreDamageEntity)
    private finalReportRepository: Repository<PreDamageEntity>,

    @InjectRepository(ImageEntity)
    private imageRepository: Repository<ImageEntity>,
  ) {}

  findAll(): Promise<PreDamageEntity[]> {
    return this.finalReportRepository.find({ relations: ['images'] });
  }

  // Método para obtener un reporte final por MBL
  findByMBL(mbl: string): Promise<PreDamageEntity | undefined> {
    return this.finalReportRepository.findOne({
      where: { mbl },
      relations: ['images'],
    });
  }

  // Método para obtener todos los reportes finales por MBL
  findAllByMBL(mbl: string): Promise<PreDamageEntity[]> {
    return this.finalReportRepository.find({
      where: { mbl },
      relations: ['images'],
    });
  }

  findOne(id: number): Promise<PreDamageEntity> {
    return this.finalReportRepository.findOne({
      where: { id },
      relations: ['images'],
    });
  }

  async create(
    finalReport: PreDamageEntity,
    images: Express.Multer.File[],
  ): Promise<PreDamageEntity> {
    // Procesar y guardar las imágenes
    const savedImages = await this.saveImages(images);

    finalReport.images = savedImages;
    return this.finalReportRepository.save(finalReport);
  }

  async update(
    id: number,
    finalReport: PreDamageEntity,
    images: Express.Multer.File[],
  ): Promise<PreDamageEntity> {
    console.log('id', id, 'finalReport', finalReport, 'images', images);

    const existingReport = await this.finalReportRepository.findOne({
      where: { id },
      relations: ['images'],
    });

    if (!existingReport) {
      throw new Error('FinalReport not found');
    }

    if (images && images.length > 0) {
      // Eliminar las imágenes antiguas
      await this.imageRepository.delete({ finalReport: existingReport });

      // Guardar las nuevas imágenes
      const savedImages = await this.saveImages(images);
      finalReport.images = savedImages;
    } else {
      finalReport.images = existingReport.images; // Mantener las imágenes antiguas si no se suben nuevas
    }

    // Actualiza los campos del finalReportEntity excepto la relación OneToMany
    await this.finalReportRepository.save({
      ...existingReport,
      ...finalReport,
    });

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.finalReportRepository.delete(id);
  }

  // Helper para guardar imágenes
  private async saveImages(
    files: Express.Multer.File[],
  ): Promise<ImageEntity[]> {
    const imageEntities: ImageEntity[] = files.map((file) => {
      const image = new ImageEntity();
      image.path = file.path; // Guardar la ruta del archivo subido
      return image;
    });
    return this.imageRepository.save(imageEntities);
  }
}
