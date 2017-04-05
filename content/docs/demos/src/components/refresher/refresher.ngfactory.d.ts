/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './refresher';
import * as import2 from '@angular/core/src/linker/view';
export declare class Wrapper_Refresher {
    _eventHandler: Function;
    context: import0.Refresher;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    _expr_3: any;
    _expr_4: any;
    _expr_5: any;
    _expr_6: any;
    subscription0: any;
    subscription1: any;
    subscription2: any;
    constructor(p0: any, p1: any, p2: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_pullMin(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_pullMax(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_closeDuration(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_snapbackDuration(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_enabled(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any, emit0: boolean, emit1: boolean, emit2: boolean): void;
}