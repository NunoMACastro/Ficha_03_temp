/**
 * @file index.js
 * @description Ficheiro de arranque do servidor Express (modo ES Modules).
 * Carrega a app e inicia o servidor HTTP.
 */

import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});
