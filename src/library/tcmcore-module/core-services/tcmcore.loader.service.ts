/*
  Vipul Dhaigude        2017-01-25    Created
*/


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    display = (value: boolean) => {
        this.status.next(value);
    }
}
