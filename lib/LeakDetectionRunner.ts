// Currently implemented with gitleaks, but may change in future.

import { TargetDirectory } from './TargetDirectory'
import { RunResult } from './RunResult';

export class LeakDetectionRunner {

    static run(target: TargetDirectory): void {
        console.log('Leak Detection');
        console.log('------------------');

        const command: string = `gitleaks --verbose --redact --pretty`;
        const result = RunResult.from(command, target);
        
        console.log(result.stdout);
        console.log(result.stderr);
    }

}