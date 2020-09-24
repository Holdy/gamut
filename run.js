"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LeakDetectionRunner_1 = require("./lib/LeakDetectionRunner");
const TargetDirectory_1 = require("./lib/TargetDirectory");
const cwd = process.cwd();
console.log(`Running Gamut @ ${cwd}`);
console.log(``);
LeakDetectionRunner_1.LeakDetectionRunner.run(TargetDirectory_1.TargetDirectory.of(cwd));
//# sourceMappingURL=run.js.map