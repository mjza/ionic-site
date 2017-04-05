/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './spinner';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../config/config';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import16 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import17 from '@angular/common/src/directives/ng_style';
export var Wrapper_Spinner = (function () {
    function Wrapper_Spinner(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.Spinner(p0, p1, p2);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
    }
    Wrapper_Spinner.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Spinner.prototype.ngOnDestroy = function () {
    };
    Wrapper_Spinner.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Spinner.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Spinner.prototype.check_name = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.name = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_Spinner.prototype.check_duration = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.duration = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_Spinner.prototype.check_paused = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.paused = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_Spinner.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Spinner.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_5 = this.context._paused;
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'spinner-paused', currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    Wrapper_Spinner.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Spinner.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Spinner;
}());
var renderType_Spinner_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_Spinner_Host0 = (function (_super) {
    __extends(View_Spinner_Host0, _super);
    function View_Spinner_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Spinner_Host0, renderType_Spinner_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_Spinner_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ion-spinner', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Spinner0(this.viewUtils, this, 0, this._el_0);
        this._Spinner_0_3 = new Wrapper_Spinner(this.injectorGet(import8.Config, this.parentIndex), new import9.ElementRef(this._el_0), this.renderer);
        this.compView_0.create(this._Spinner_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Spinner_0_3.context);
    };
    View_Spinner_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Spinner) && (0 === requestNodeIndex))) {
            return this._Spinner_0_3.context;
        }
        return notFoundResult;
    };
    View_Spinner_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Spinner_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this._Spinner_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Spinner_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_Spinner_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Spinner_Host0;
}(import2.AppView));
export var SpinnerNgFactory = new import7.ComponentFactory('ion-spinner', View_Spinner_Host0, import0.Spinner);
var styles_Spinner = [];
var renderType_Spinner = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_Spinner, {});
export var View_Spinner0 = (function (_super) {
    __extends(View_Spinner0, _super);
    function View_Spinner0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Spinner0, renderType_Spinner, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckOnce);
    }
    View_Spinner0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import10.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import12.TemplateRef_(this, 0, this._anchor_0);
        this._NgFor_0_6 = new import11.Wrapper_NgFor(this._vc_0.vcRef, this._TemplateRef_0_5, this.parentView.injectorGet(import13.IterableDiffers, this.parentIndex), this.ref);
        this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_1 = new import10.ViewContainer(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import12.TemplateRef_(this, 1, this._anchor_1);
        this._NgFor_1_6 = new import11.Wrapper_NgFor(this._vc_1.vcRef, this._TemplateRef_1_5, this.parentView.injectorGet(import13.IterableDiffers, this.parentIndex), this.ref);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._anchor_1
        ]), null);
        return null;
    };
    View_Spinner0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import14.NgFor) && (0 === requestNodeIndex))) {
            return this._NgFor_0_6.context;
        }
        if (((token === import12.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import14.NgFor) && (1 === requestNodeIndex))) {
            return this._NgFor_1_6.context;
        }
        return notFoundResult;
    };
    View_Spinner0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context._c;
        this._NgFor_0_6.check_ngForOf(currVal_0_0_0, throwOnChange, false);
        this._NgFor_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        var currVal_1_0_0 = this.context._l;
        this._NgFor_1_6.check_ngForOf(currVal_1_0_0, throwOnChange, false);
        this._NgFor_1_6.ngDoCheck(this, this._anchor_1, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
    };
    View_Spinner0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_1.destroyNestedViews();
    };
    View_Spinner0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_Spinner1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        if ((nodeIndex == 1)) {
            return new View_Spinner2(this.viewUtils, this, 1, this._anchor_1, this._vc_1);
        }
        return null;
    };
    return View_Spinner0;
}(import2.AppView));
var View_Spinner1 = (function (_super) {
    __extends(View_Spinner1, _super);
    function View_Spinner1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Spinner1, renderType_Spinner, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_3 = import1.UNINITIALIZED;
    }
    View_Spinner1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, ':svg:svg', new import3.InlineArray2(2, 'viewBox', '0 0 64 64'), null);
        this._NgStyle_0_3 = new import15.Wrapper_NgStyle(this.parentView.injectorGet(import16.KeyValueDiffers, this.parentIndex), new import9.ElementRef(this._el_0), this.renderer);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, ':svg:circle', new import3.InlineArray2(2, 'transform', 'translate(32,32)'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), null);
        return null;
    };
    View_Spinner1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgStyle_0_3.context;
        }
        return notFoundResult;
    };
    View_Spinner1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit.style;
        this._NgStyle_0_3.check_ngStyle(currVal_0_0_0, throwOnChange, false);
        this._NgStyle_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_3 = this.context.$implicit.r;
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementAttribute(this._el_1, 'r', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
    };
    View_Spinner1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Spinner1;
}(import2.AppView));
var View_Spinner2 = (function (_super) {
    __extends(View_Spinner2, _super);
    function View_Spinner2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Spinner2, renderType_Spinner, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
    }
    View_Spinner2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, ':svg:svg', new import3.InlineArray2(2, 'viewBox', '0 0 64 64'), null);
        this._NgStyle_0_3 = new import15.Wrapper_NgStyle(this.parentView.injectorGet(import16.KeyValueDiffers, this.parentIndex), new import9.ElementRef(this._el_0), this.renderer);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, ':svg:line', new import3.InlineArray2(2, 'transform', 'translate(32,32)'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), null);
        return null;
    };
    View_Spinner2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgStyle_0_3.context;
        }
        return notFoundResult;
    };
    View_Spinner2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit.style;
        this._NgStyle_0_3.check_ngStyle(currVal_0_0_0, throwOnChange, false);
        this._NgStyle_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_3 = this.context.$implicit.y1;
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementAttribute(this._el_1, 'y1', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.$implicit.y2;
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementAttribute(this._el_1, 'y2', ((currVal_4 == null) ? null : currVal_4.toString()));
            this._expr_4 = currVal_4;
        }
    };
    View_Spinner2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Spinner2;
}(import2.AppView));
//# sourceMappingURL=spinner.ngfactory.js.map