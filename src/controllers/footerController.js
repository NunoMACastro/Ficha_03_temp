/**
 * @file src/controllers/footerController.js
 * @description Fornece uma citação aleatória para o footer da aplicação HeroDex.
 * Versão ES Modules (import/export).
 */

import quotes from "../data/quotesData.js";

/**
 * Escolhe um elemento aleatório de uma lista.
 * @param {Array} lista - Array de itens (strings ou objetos)
 * @returns {any} Um elemento aleatório da lista
 */
function escolherAleatorio(lista) {
    const idx = Math.floor(Math.random() * lista.length);
    return lista[idx];
}

/**
 * Retorna os dados necessários para o footer (uma citação aleatória).
 * @returns {{quote: any}}
 */
export function getDadosFooter() {
    return {
        quote: escolherAleatorio(quotes),
    };
}
