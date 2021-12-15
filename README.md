Za inštalacijo vseh potrebnih modulov `npm install`.
Vsi moduli so zapisani v datoteki package.json.

Za avtomatsko generiranje nove komponente `ng generate component #component-name#` ali `ng g component #component-name#`.
Ustvari direktorij z imenom komponente in 4 datoteke: logični del (.ts), izgled (.html), stili (.less) in testi (.spec)*.
*testov ne uporabljamo, zato se to datoteko lahko izbriše
Doda referenco na novo komponento v app.module.ts.

V terminalu `ng serve` zažene aplikacijo.
Aplikacija dela na url naslovu http://localhost:4200/