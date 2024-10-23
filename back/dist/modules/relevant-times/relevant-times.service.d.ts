import { Repository } from 'typeorm';
import { RelevantTimes } from '../../entities/RelevantTimes.entity';
export declare class RelevantTimesService {
    private readonly relevantTimesRepository;
    constructor(relevantTimesRepository: Repository<RelevantTimes>);
    createRelevantTimes(data: Partial<RelevantTimes>): Promise<RelevantTimes>;
    findAllRelevantTimes(): Promise<RelevantTimes[]>;
    findRelevantTimesById(id: number): Promise<RelevantTimes>;
    updateRelevantTimes(id: number, data: Partial<RelevantTimes>): Promise<RelevantTimes>;
    deleteRelevantTimes(id: number): Promise<void>;
}
