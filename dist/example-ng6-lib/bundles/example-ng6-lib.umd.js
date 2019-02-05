(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('example-ng6-lib', ['exports', '@angular/core'], factory) :
    (factory((global['example-ng6-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExampleNg6LibService = /** @class */ (function () {
        function ExampleNg6LibService() {
        }
        ExampleNg6LibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ExampleNg6LibService.ctorParameters = function () { return []; };
        /** @nocollapse */ ExampleNg6LibService.ngInjectableDef = i0.defineInjectable({ factory: function ExampleNg6LibService_Factory() { return new ExampleNg6LibService(); }, token: ExampleNg6LibService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.ExampleNg6LibService = ExampleNg6LibService;
    exports.ExampleNg6LibComponent = ExampleNg6LibComponent;
    exports.ExampleNg6LibModule = ExampleNg6LibModule;
    exports.FooComponent = FooComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=example-ng6-lib.umd.js.map