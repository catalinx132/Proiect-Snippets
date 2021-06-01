// Conținutul fișierului pentru mediul curent le va suprascrie în timpul compilării.
// Sistemul de construire implicit este mediul dev care utilizează `environment.ts`, dar dacă da
// `ng build --env = prod` atunci va fi folosit în schimb` environment.prod.ts`.
// Lista cu care hărți env la care fișier poate fi găsit în `.angular-cli.json`.

export const environment = {
  production: false
};
