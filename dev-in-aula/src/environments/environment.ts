// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* Este ambiente traz informações de configuração JSON 
que informam ao compilador quais dados utilizar enquanto
utiliza ng serve e ng build.
*/

export const environment = {
  production: false,
  API_Path: 'http://localhost:3000/livros',
};
