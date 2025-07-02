import { ComponentRef, ElementRef, InjectionToken, Type, ViewContainerRef } from "@angular/core";
import { ComponentFactoryResolver } from "@angular/core";
import { ApplicationRef } from "@angular/core";
import { Injector } from "@angular/core";
import { SmpCompData } from "../models/public";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class SmpDomService {
    private _componentFactoryResolver;
    private _appRef;
    private _injector;
    private _refs;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _appRef: ApplicationRef, _injector: Injector);
    appendComp<T = any>(component: Type<T>, key?: string, target?: string | HTMLElement | ElementRef, injector?: Injector, hook?: Observable<void | number>): ComponentRef<T>;
    appendComps(compsData: SmpCompData[], injector?: Injector, hook?: Observable<void | number>): void;
    createInjector<T = any>(token: InjectionToken<T>, value: T, viewContainerRef?: ViewContainerRef): Injector;
    removeComp(key: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SmpDomService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SmpDomService>;
}
