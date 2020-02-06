// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

interface Require {
  context(arg1: string, arg2: boolean, arg3: RegExp): Object;
}

declare const require: Require;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context: Object = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
