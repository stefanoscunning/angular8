// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName: "dev",
  clientName: "Starrate",
  base:{
    url: "/",
    site: "http://localhost:4200"
  },
  api:{
    url: "http://localhost:52350"
  },
  tflApi: {
    url: "http://localhost:64537"
  },
  metOfficeApi: {
    url: "http://localhost:56841"
  },
  signal:{
    url:"/"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
