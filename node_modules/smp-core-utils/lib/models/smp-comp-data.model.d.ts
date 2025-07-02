import { ComponentRef, ElementRef } from "@angular/core";
export interface SmpCompData<T = any> {
    comp: T;
    key?: string;
    target?: string | HTMLElement | ElementRef;
}
export interface SmpCompRefs<T = any> {
    [key: string]: ComponentRef<T>;
}
