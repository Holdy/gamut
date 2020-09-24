import { string } from "yargs";
import { TargetDirectory } from './TargetDirectory';

const child_process = require('child_process');

export class RunResult {

    stderr:string;
    stdout: string;
    exit_code: number;

    public static from(command: string, cwd:TargetDirectory): RunResult {
        const result = new RunResult();

        try {
            const options = { cwd: cwd.value };
            result.stdout = child_process.execSync(command, options).toString();
            result.stderr = '';
            result.exit_code = 0;
        } 
        catch (error) {
            result.stderr = error.stderr.toString();
            result.stdout = error.stdout.toString();
            result.exit_code = error.status;
        }
        return result; 
    }
}