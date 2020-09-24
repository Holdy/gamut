"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetDirectory = void 0;
const SupertypeBase_1 = require("./SupertypeBase");
class TargetDirectory extends SupertypeBase_1.SupertypeBase {
    static of(path) {
        return new TargetDirectory(path);
    }
}
exports.TargetDirectory = TargetDirectory;
//# sourceMappingURL=TargetDirectory.js.map