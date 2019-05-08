/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
  Vipul Dhaigude        2017-01-01    Created
*/
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PageSettings } from '../../tcmcore-objects/tcmcore.domain.objects';
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(themeService, userSettings, dialogRef, data) {
        this.themeService = themeService;
        this.userSettings = userSettings;
        this.dialogRef = dialogRef;
        this.data = data;
        this.globalSettings = null;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SettingsComponent.prototype.changeLanguage = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.globalSettings.PageData.filter((function (ctrl) { return ctrl.ControlId === 'Lang'; }))[0].ControlData = this.selectedLang;
        this.userSettings.UpdatePageSettings("Global", this.globalSettings);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SettingsComponent.prototype.changeTheme = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.globalSettings.PageData.filter((function (ctrl) { return ctrl.ControlId === 'Theme'; }))[0].ControlData = event.value;
        this.userSettings.UpdatePageSettings("Global", this.globalSettings);
        this.themeService.change(event.value);
    };
    /**
     * @return {?}
     */
    SettingsComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @return {?}
     */
    SettingsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedLang = 'sv-SE';
        this.selectedTheme = 'primary';
        this.globalSettings = this.userSettings.GetUserSettingsForPage("Global");
        if (!this.globalSettings) {
            this.globalSettings = new PageSettings();
            this.globalSettings.PageId = 'Global';
        }
        var /** @type {?} */ lang = this.globalSettings.PageData.filter(function (ctrl) { return ctrl.ControlId === 'Lang'; })[0];
        if (lang) {
            this.selectedLang = lang.ControlData;
        }
        else {
            this.globalSettings.PageData.push({ ControlId: 'Lang', ControlData: this.selectedLang });
            this.userSettings.UpdatePageSettings("Global", this.globalSettings);
        }
        ;
        var /** @type {?} */ theme = this.globalSettings.PageData.filter(function (ctrl) { return ctrl.ControlId === 'Theme'; })[0];
        if (theme) {
            this.selectedTheme = theme.ControlData;
        }
        else {
            this.globalSettings.PageData.push({ ControlId: 'Theme', ControlData: this.selectedTheme });
            this.userSettings.UpdatePageSettings("Global", this.globalSettings);
        }
    };
    SettingsComponent.decorators = [
        { type: Component, args: [{ selector: 'settings-cmp',
                    template: "<div mat-dialog-title>Settings</div> <mat-dialog-content> <div class=\"p-md\"> <div class=\"row text-center\"> <div class=\"col-md-3\"> <mat-form-field> <mat-select (change)=\"changeTheme($event)\" placeholder=\"{{'Themes'}}\" [(value)]=\"selectedTheme\" name=\"theme\"> <mat-option value=\"primary\"> Purple </mat-option> <mat-option value=\"info\"> Blue </mat-option> <mat-option value=\"success\"> Green </mat-option> <mat-option value=\"warning\"> Orange </mat-option> <mat-option value=\"danger\"> Red </mat-option> </mat-select> </mat-form-field> </div> <div class=\"col-md-3\"> <button mat-button>Clear cache</button> </div> </div> </div> </mat-dialog-content> <div class=\"dialog-bottom\"> <button class=\"btn-dialog\" (click)=\"onClose()\">Close</button> </div> "
                },] },
    ];
    /** @nocollapse */
    SettingsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['IThemeService',] },] },
        { type: undefined, decorators: [{ type: Inject, args: ['IUserSettingsService',] },] },
        { type: MatDialogRef, },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] },] },
    ]; };
    return SettingsComponent;
}());
export { SettingsComponent };
function SettingsComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SettingsComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SettingsComponent.ctorParameters;
    /** @type {?} */
    SettingsComponent.prototype.globalSettings;
    /** @type {?} */
    SettingsComponent.prototype.selectedLang;
    /** @type {?} */
    SettingsComponent.prototype.selectedTheme;
    /** @type {?} */
    SettingsComponent.prototype.themeService;
    /** @type {?} */
    SettingsComponent.prototype.userSettings;
    /** @type {?} */
    SettingsComponent.prototype.dialogRef;
    /** @type {?} */
    SettingsComponent.prototype.data;
}
