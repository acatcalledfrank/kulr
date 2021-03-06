import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/buffer';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export const activeID: Subject<string> = new Subject();

export const observableHue: BehaviorSubject<number> = new BehaviorSubject(0);
export const observableSaturation: BehaviorSubject<number> = new BehaviorSubject(0);
export const observableLightness: BehaviorSubject<number> = new BehaviorSubject(0);