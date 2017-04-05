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
import * as import0 from './item';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/query_list';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../util/form';
import * as import10 from '../../config/config';
import * as import11 from '@angular/core/src/linker/element_ref';
import * as import12 from './item-reorder';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '../label/label.ngfactory';
import * as import18 from '../label/label';
import * as import19 from './item-reorder.ngfactory';
export var Wrapper_Item = (function () {
    function Wrapper_Item(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.Item(p0, p1, p2, p3, p4);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_Item.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Item.prototype.ngOnDestroy = function () {
    };
    Wrapper_Item.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Item.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Item.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Item.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Item.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Item.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Item;
}());
export var Wrapper_ItemContent = (function () {
    function Wrapper_ItemContent() {
        this._changed = false;
        this.context = new import0.ItemContent();
    }
    Wrapper_ItemContent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ItemContent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ItemContent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ItemContent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ItemContent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ItemContent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ItemContent;
}());
export var Wrapper_ItemDivider = (function () {
    function Wrapper_ItemDivider(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.ItemDivider(p0, p1, p2, p3);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_ItemDivider.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ItemDivider.prototype.ngOnDestroy = function () {
    };
    Wrapper_ItemDivider.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_ItemDivider.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_ItemDivider.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ItemDivider.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ItemDivider.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ItemDivider.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ItemDivider;
}());
export var Wrapper_ItemGroup = (function () {
    function Wrapper_ItemGroup() {
        this._changed = false;
        this.context = new import0.ItemGroup();
    }
    Wrapper_ItemGroup.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ItemGroup.prototype.ngOnDestroy = function () {
    };
    Wrapper_ItemGroup.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ItemGroup.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ItemGroup.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ItemGroup.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ItemGroup;
}());
var renderType_Item_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_Item_Host0 = (function (_super) {
    __extends(View_Item_Host0, _super);
    function View_Item_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Item_Host0, renderType_Item_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_Item_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ion-list-header', new import3.InlineArray2(2, 'class', 'item'), rootSelector, null);
        this.compView_0 = new View_Item0(this.viewUtils, this, 0, this._el_0);
        this._Item_0_3 = new Wrapper_Item(this.injectorGet(import9.Form, this.parentIndex), this.injectorGet(import10.Config, this.parentIndex), new import11.ElementRef(this._el_0), this.renderer, this.injectorGet(import12.ItemReorder, this.parentIndex, null));
        this._query_Label_0_0 = new import6.QueryList();
        this._query_Button_0_1 = new import6.QueryList();
        this._query_Icon_0_2 = new import6.QueryList();
        this._query_Label_0_0.reset([]);
        this._Item_0_3.context.contentLabel = this._query_Label_0_0.first;
        this.compView_0.create(this._Item_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._Item_0_3.context);
    };
    View_Item_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Item) && (0 === requestNodeIndex))) {
            return this._Item_0_3.context;
        }
        return notFoundResult;
    };
    View_Item_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_3.context._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_3.context._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_3.context.ngAfterContentInit();
            }
        }
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Item_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_Item_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Item_Host0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 0) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 1))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 2))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 3))) { }
        if (((nodeIndex == 0) && (ngContentIndex == 4))) { }
    };
    return View_Item_Host0;
}(import2.AppView));
export var ItemNgFactory = new import8.ComponentFactory('ion-list-header,ion-item,[ion-item],ion-item-divider', View_Item_Host0, import0.Item);
var styles_Item = [];
var renderType_Item = import3.createRenderComponentType('', 5, import5.ViewEncapsulation.None, styles_Item, {});
export var View_Item0 = (function (_super) {
    __extends(View_Item0, _super);
    function View_Item0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Item0, renderType_Item, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckOnce);
    }
    View_Item0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_Label_0 = new import6.QueryList();
        this.projectNodes(parentRenderNode, 0);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'item-inner'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'input-wrapper'), null);
        this.projectNodes(this._el_1, 1);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_2 = new import13.ViewContainer(2, 1, this, this._anchor_2);
        this._TemplateRef_2_5 = new import15.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import14.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this.projectNodes(this._el_1, 3);
        this.projectNodes(this._el_0, 4);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_3 = new import13.ViewContainer(3, 0, this, this._anchor_3);
        this._TemplateRef_3_5 = new import15.TemplateRef_(this, 3, this._anchor_3);
        this._NgIf_3_6 = new import14.Wrapper_NgIf(this._vc_3.vcRef, this._TemplateRef_3_5);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'button-effect'), null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._anchor_2,
            this._anchor_3,
            this._el_4
        ]), null);
        return null;
    };
    View_Item0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import16.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        if (((token === import15.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import16.NgIf) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6.context;
        }
        return notFoundResult;
    };
    View_Item0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context._viewLabel;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        var currVal_3_0_0 = this.context._shouldHaveReorder;
        this._NgIf_3_6.check_ngIf(currVal_3_0_0, throwOnChange, false);
        this._NgIf_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._viewQuery_Label_0.dirty) {
                this._viewQuery_Label_0.reset([this._vc_2.mapNestedViews(View_Item1, function (nestedView) {
                        return [nestedView._Label_0_3.context];
                    })]);
                this.context.viewLabel = this._viewQuery_Label_0.first;
            }
        }
    };
    View_Item0.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._vc_3.destroyNestedViews();
    };
    View_Item0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_Item1(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        if ((nodeIndex == 3)) {
            return new View_Item2(this.viewUtils, this, 3, this._anchor_3, this._vc_3);
        }
        return null;
    };
    return View_Item0;
}(import2.AppView));
var View_Item1 = (function (_super) {
    __extends(View_Item1, _super);
    function View_Item1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Item1, renderType_Item, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_Item1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'ion-label', import3.EMPTY_INLINE_ARRAY, null);
        this._Label_0_3 = new import17.Wrapper_Label(this.parentView.parentView.injectorGet(import10.Config, this.parentView.parentIndex), new import11.ElementRef(this._el_0), this.renderer, null, null, null, null);
        this.projectNodes(this._el_0, 2);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_Item1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.Label) && (0 === requestNodeIndex))) {
            return this._Label_0_3.context;
        }
        return notFoundResult;
    };
    View_Item1.prototype.detectChangesInternal = function (throwOnChange) {
        this._Label_0_3.ngDoCheck(this, this._el_0, throwOnChange);
    };
    View_Item1.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_Label_0.setDirty();
    };
    View_Item1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Item1;
}(import2.AppView));
var View_Item2 = (function (_super) {
    __extends(View_Item2, _super);
    function View_Item2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Item2, renderType_Item, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_Item2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'ion-reorder', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import19.View_Reorder0(this.viewUtils, this, 0, this._el_0);
        this._Reorder_0_3 = new import19.Wrapper_Reorder(this.parentView.parentView.injectorGet(import0.Item, this.parentView.parentIndex), new import11.ElementRef(this._el_0));
        this.compView_0.create(this._Reorder_0_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return null;
    };
    View_Item2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.Reorder) && (0 === requestNodeIndex))) {
            return this._Reorder_0_3.context;
        }
        return notFoundResult;
    };
    View_Item2.prototype.detectChangesInternal = function (throwOnChange) {
        this._Reorder_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Item2.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_Item2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Item2.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._Reorder_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_Item2;
}(import2.AppView));
//# sourceMappingURL=item.ngfactory.js.map