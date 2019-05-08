import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export declare class LoaderService {
    status: BehaviorSubject<boolean>;
    display: (value: boolean) => void;
}
