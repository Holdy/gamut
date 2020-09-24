"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunResult = void 0;
const child_process = require('child_process');
class RunResult {
    static from(command, cwd) {
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
exports.RunResult = RunResult;
//# sourceMappingURL=RunResult.js.map