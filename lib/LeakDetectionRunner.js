"use strict";
// Currently implemented with gitleaks, but may change in future.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeakDetectionRunner = void 0;
const RunResult_1 = require("./RunResult");
class LeakDetectionRunner {
    static run(target) {
        console.log('Leak Detection');
        console.log('------------------');
        const command = `gitleaks --verbose --redact --pretty`;
        const result = RunResult_1.RunResult.from(command, target);
        console.log(result.stdout);
        console.log(result.stderr);
    }
}
exports.LeakDetectionRunner = LeakDetectionRunner;
//# sourceMappingURL=LeakDetectionRunner.js.map