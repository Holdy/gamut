import { SupertypeBase      } from './SupertypeBase';

export class TargetDirectory extends SupertypeBase<string>  {
 
 
    static of(path: string): TargetDirectory {
        return new TargetDirectory(path);
    }

}