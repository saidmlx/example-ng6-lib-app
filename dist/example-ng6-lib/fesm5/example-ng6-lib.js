import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExampleNg6LibService = /** @class */ (function () {
    function ExampleNg6LibService() {
    }
    ExampleNg6LibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ExampleNg6LibService.ctorParameters = function () { return []; };
    /** @nocollapse */ ExampleNg6LibService.ngInjectableDef = defineInjectable({ factory: function ExampleNg6LibService_Factory() { return new ExampleNg6LibService(); }, token: ExampleNg6LibService, providedIn: "root" });
    return ExampleNg6LibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExampleNg6LibComponent = /** @class */ (function () {
    function ExampleNg6LibComponent() {
    }
    /**
     * @return {?}
     */
    ExampleNg6LibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ExampleNg6LibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sml-example-ng6-lib',
                    template: "\n    <p>\n      example-ng6-lib works!\n    </p>\n    <sml-foo></sml-foo>\n  "
                }] }
    ];
    /** @nocollapse */
    ExampleNg6LibComponent.ctorParameters = function () { return []; };
    return ExampleNg6LibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooComponent = /** @class */ (function () {
    function FooComponent() {
    }
    /**
     * @return {?}
     */
    FooComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FooComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sml-foo',
                    template: "<p>\n  foo works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FooComponent.ctorParameters = function () { return []; };
    return FooComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExampleNg6LibModule = /** @class */ (function () {
    function ExampleNg6LibModule() {
    }
    ExampleNg6LibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ExampleNg6LibComponent, FooComponent],
                    imports: [],
                    exports: [ExampleNg6LibComponent]
                },] }
    ];
    return ExampleNg6LibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ExampleNg6LibService, ExampleNg6LibComponent, ExampleNg6LibModule, FooComponent };

//# sourceMappingURL=example-ng6-lib.js.map