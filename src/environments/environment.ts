// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://gateway.marvel.com/v1/public/',
  apiKey: '6d0971140ee4fdcf5c563b22d3527507',
  settings: {
    appErrorPrefix: '[Marvel Error] ',
    appTitle: 'Marvel',
    version: '0.0.1',
    charactersLimit: 20
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
