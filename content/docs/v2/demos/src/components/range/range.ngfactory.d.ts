/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './range';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
export declare class Wrapper_Range {
    _eventHandler: Function;
    context: import0.Range;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    _expr_3: any;
    _expr_4: any;
    _expr_5: any;
    _expr_6: any;
    _expr_7: any;
    _expr_8: any;
    _expr_9: any;
    _expr_10: any;
    _expr_11: any;
    _expr_12: any;
    subscription0: any;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_color(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_mode(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_min(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_max(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_step(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_snaps(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_pin(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_debounce(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_dualKnobs(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_disabled(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any, emit0: boolean): void;
}
export declare class Wrapper_RangeKnob {
    _eventHandler: Function;
    context: import0.RangeKnob;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    _expr_3: any;
    _expr_4: any;
    _expr_5: any;
    _expr_6: any;
    _expr_7: any;
    constructor(p0: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_upper(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare const RangeNgFactory: import8.ComponentFactory<import0.Range>;
export declare class View_Range0 extends import2.AppView<import0.Range> {
    _viewQuery_bar_0: import15.QueryList<any>;
    _viewQuery_slider_1: import15.QueryList<any>;
    _viewQuery_RangeKnob_2: import15.QueryList<any>;
    _el_0: any;
    _anchor_1: any;
    _vc_1: import16.ViewContainer;
    _TemplateRef_1_5: any;
    _NgFor_1_6: import17.Wrapper_NgFor;
    _el_2: any;
    _el_3: any;
    _el_4: any;
    compView_4: import2.AppView<import0.RangeKnob>;
    _RangeKnob_4_3: Wrapper_RangeKnob;
    _anchor_5: any;
    _vc_5: import16.ViewContainer;
    _TemplateRef_5_5: any;
    _NgIf_5_6: import18.Wrapper_NgIf;
    _expr_17: any;
    _expr_18: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import8.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    createEmbeddedViewInternal(nodeIndex: number): import2.AppView<any>;
}
export declare const RangeKnobNgFactory: import8.ComponentFactory<import0.RangeKnob>;
export declare class View_RangeKnob0 extends import2.AppView<import0.RangeKnob> {
    _anchor_0: any;
    _vc_0: import16.ViewContainer;
    _TemplateRef_0_5: any;
    _NgIf_0_6: import18.Wrapper_NgIf;
    _el_1: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import8.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    createEmbeddedViewInternal(nodeIndex: number): import2.AppView<any>;
}