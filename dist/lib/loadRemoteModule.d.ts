import { Fetcher } from "../models";
export interface CreateLoadRemoteModuleOptions {
    requires?: any;
    fetcher?: Fetcher;
}
interface LoadRemoteModule {
    (url: string): Promise<any>;
}
interface CreateLoadRemoteModule {
    (options?: CreateLoadRemoteModuleOptions): LoadRemoteModule;
}
export declare const loadModuleSource: (url: any, fetcher: any) => any;
export declare const activateModule: (moduleSource: any, requires: any) => {};
export declare const createLoadRemoteModule: CreateLoadRemoteModule;
export {};
