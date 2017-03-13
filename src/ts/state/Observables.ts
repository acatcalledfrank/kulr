import {Subject} from "@reactivex/rxjs";

export const activeID: Subject<string> = new Subject();

export const observableHue: Subject<number> = new Subject();
export const observableSaturation: Subject<number> = new Subject();
export const observableLightness: Subject<number> = new Subject();