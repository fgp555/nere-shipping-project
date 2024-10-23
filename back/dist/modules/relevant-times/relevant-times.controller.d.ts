import { RelevantTimesService } from './relevant-times.service';
import { RelevantTimes } from '../../entities/RelevantTimes.entity';
export declare class RelevantTimesController {
    private readonly relevantTimesService;
    constructor(relevantTimesService: RelevantTimesService);
    create(createRelevantTimesDto: Partial<RelevantTimes>): Promise<RelevantTimes>;
    findAll(): Promise<RelevantTimes[]>;
    findOne(id: number): Promise<RelevantTimes>;
    update(id: number, updateRelevantTimesDto: Partial<RelevantTimes>): Promise<RelevantTimes>;
    remove(id: number): Promise<void>;
}
