import { T4UnstuffingService } from './t4_unstuffing.service';
import { CreateT4UnstuffingDto } from './dto/create-t4_unstuffing.dto';
import { UpdateT4UnstuffingDto } from './dto/update-t4_unstuffing.dto';
export declare class T4UnstuffingController {
    private readonly t4UnstuffingService;
    constructor(t4UnstuffingService: T4UnstuffingService);
    create(createT4UnstuffingDto: CreateT4UnstuffingDto, files: Express.Multer.File[]): Promise<import("./entities/t4_unstuffing.entity").T4UnstuffingEntity>;
    findAll(): Promise<import("./entities/t4_unstuffing.entity").T4UnstuffingEntity[]>;
    findOne(id: string): string;
    update(id: string, updateT4UnstuffingDto: UpdateT4UnstuffingDto): string;
    remove(id: string): string;
}
