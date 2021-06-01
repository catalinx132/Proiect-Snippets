// Acest fișier este necesar de karma.conf.js și încarcă recursiv toate fișierele .spec și framework

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Din păcate, nu există nici o tastare pentru variabila `__karma__`. Declarați-o ca oricare.
declare const __karma__: any;
declare const require: any;

// Împiedicați Karma să funcționeze prematur.
__karma__.loaded = function () {};

// Mai întâi, inițializați mediul de testare angulară.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Apoi găsim toate testele.
const context = require.context('./', true, /\.spec\.ts$/);
// Și încărcați modulele.
context.keys().map(context);
// În cele din urmă, porniți Karma pentru a rula testele.
__karma__.start();
