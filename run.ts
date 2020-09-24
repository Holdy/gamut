import { LeakDetectionRunner } from './lib/LeakDetectionRunner';
import { TargetDirectory } from './lib/TargetDirectory';

const cwd = process.cwd();

console.log(`Running Gamut @ ${cwd}`);
console.log(``);

LeakDetectionRunner.run(TargetDirectory.of(cwd));