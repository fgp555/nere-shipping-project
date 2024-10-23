import { SeederService } from './seeder/seeder.service';
export declare class AppModule {
    private readonly seederService;
    constructor(seederService: SeederService);
    runSeeders(): Promise<void>;
}
