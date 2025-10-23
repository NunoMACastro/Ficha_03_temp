/**
 * @file src/app.js
 * @description Configuração da aplicação Express (EJS, estáticos, rotas, 404, handler de erros).
 * Estrutura pensada para padrões MVC e didática para os alunos.
 */

import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

// __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rotas (garante que os ficheiros de rotas também passam a ESM e usam extensão .js)
import homeRoutes from "./routes/homeRoutes.js";
//import detalhesRoutes from "./routes/detalhesRoutes.js";
import ligaRoutes from "./routes/ligaRoutes.js";

// Importa middlewaresw
import { layoutLocals } from "./middlewares/layoutLocals.js";

const app = express();

// Middlewares globais
app.use(layoutLocals);

/* ---------------------------------------------------------------------------
   1) Motor de templates (EJS)
--------------------------------------------------------------------------- */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* ---------------------------------------------------------------------------
   2) Ficheiros estáticos (public/)
--------------------------------------------------------------------------- */
app.use(express.static(path.join(__dirname, "..", "public")));

/* ---------------------------------------------------------------------------
   3) Middlewares base (quando precisares de forms: urlencoded)
   (Nesta ficha ainda não precisamos de JSON; fica de exemplo para mais tarde.)
--------------------------------------------------------------------------- */
app.use(express.urlencoded({ extended: true }));

/* ---------------------------------------------------------------------------
   5) Rotas
--------------------------------------------------------------------------- */
app.use("/", homeRoutes);
//app.use("/detalhes", detalhesRoutes);
app.use("/liga", ligaRoutes);

// 404 e erro...
app.use((req, res) =>
    res.status(404).render("404", {
        url: req.originalUrl,
    })
);

app.use((err, _req, res, _next) => {
    res.status(500).render("500", {
        erro: err?.message ?? "Erro interno do servidor",
    });
});

export default app;
