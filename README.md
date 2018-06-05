# Schemaläggningsstöd för kirurgi
## Körinstruktioner
Dessa steg beskriver hur applikationen kan köras.
Webbklienten är färdigbyggd så dessa steg beskriver hur man kör servern.
### MySQL
Ladda ner och installera en MySQL-server. Om du kör windows kan detta göras genom: https://dev.mysql.com/downloads/installer/

Det ska gå att köra standard-inställningar vid installationen, kom ihåg vilket lösenord du valde till senare.
### Node.js
Installera Node.js 8.X.X från https://nodejs.org/en/
### Node.js-bibliotek
Öppna ett konsol-fönster och navigera till "Server"-mappen. Kör sedan kommandot "npm install".
För att senare kunna lägga in testdata i databasen kör även: "npm install sequelize-cli -g".
### Initiering av databasen
Öppna filen "Server/init_dev_database.js" och lägg till ditt MySQL-lösen på rad 2, från "const PASSWORD = '';" till const PASSWORD = '<ditt MySQL-lösen>';

Öppna även "Server/src/config/config.json" och lägg till ditt MySQL-lösen på rad 4, från '"password": "",' till '"password": "<ditt MySQL-lösen>",'.

I ditt konsol-fönster, navigera till "Server"-mappen och kör "node init_dev_database.js".
### Generering av testdata
Navigera till "Server/src"-mappen i ditt konsol-fönster och kör "sequelize db:seed:all".

För att generera om testdatan (ifall operationsdatum t.ex. börjar gå ut) kan den tas bort med "sequelize db:seed:undo:all" för att sedan generas igen enligt ovan.
### Starta servern
Gå nu in i "Server"-mappen och kör kommandot "npm run start" vilket bör starta servern. Öppna sedan en webbläsare och gå till addressen "localhost:4900". Du bör nu komma till inloggningsskärmen och kan logga in med användarnamn: "testname" och lösenordet "testpass".

# Bygga klienten
Detta krävs ej för att köra applikationen men krävs om du vill göra ändringar i den.

## Node.js-bibliotek
Öppna konsol-fönster och navigera till "Client"-mappen. Kör sedan "npm install".

Nu kan klienten byggas med "npm run build" för att bygga i produktionsläge (tar längre tid men mer optimerat), eller "npm run start" för att starta automatisk byggning som bygger om så fort den detekterar en ändring i en fil.
