/**
 * @file src/middlewares/layoutLocals.js
 * @description Middleware que prepara variáveis globais para as views (EJS):
 * - header: dados do header (inclui "batalha do dia")
 * - footer: dados do footer (quote aleatória)
 * - tituloPadrao: fallback para a tag <title>
 *
 * Coloca tudo em res.locals, ficando disponível em TODAS as views/partials.
 * Versão ES Modules.
 */

import { getDadosHeader } from "../controllers/headerController.js";
import { getDadosFooter } from "../controllers/footerController.js";

/**
 * Injeta dados de layout em res.locals para serem usados nas EJS.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {Function} next
 */
export function layoutLocals(req, res, next) {
    try {
        // Dados “globais” para o layout (header/footer)
        res.locals.header = getDadosHeader();
        res.locals.footer = getDadosFooter();

        // Título por omissão (podes usar nas views: <%= titulo || tituloPadrao %>)
        res.locals.tituloPadrao = "HeroDex";

        next();
    } catch (err) {
        next(err);
    }
}
