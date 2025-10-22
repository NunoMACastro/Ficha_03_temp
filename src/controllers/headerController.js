/**
 * @file src/controllers/headerController.js
 * @description Dados para o header (título e “batalha do dia”).
 * Versão ES Modules, simples e didática.
 */

import personagens from "../data/personagensData.js";

/**
 * Escolhe N elementos aleatórios sem repetição.
 * @param {Array} lista
 * @param {number} n
 * @returns {Array}
 */
function escolherAleatorios(lista, n) {
    const copia = [...lista];
    const resultado = [];
    while (resultado.length < n && copia.length > 0) {
        const idx = Math.floor(Math.random() * copia.length);
        resultado.push(copia.splice(idx, 1)[0]);
    }
    return resultado;
}

/**
 * Gera uma “batalha” simples entre um herói e um vilão.
 * @returns {{heroi?: any, vilao?: any, resultado: string}}
 */
function gerarBatalha() {
    const herois = personagens.filter((p) => String(p.tipo) === "Herói");
    const viloes = personagens.filter((p) => String(p.tipo) === "Vilão");

    // Salvaguarda: se faltar herói ou vilão, evita erros no header
    if (herois.length === 0 || viloes.length === 0) {
        return { resultado: "Sem dados suficientes para a batalha." };
    }

    const heroi = escolherAleatorios(herois, 1)[0];
    const vilao = escolherAleatorios(viloes, 1)[0];

    const ratingHeroi = Number(heroi.rating);
    const ratingVilao = Number(vilao.rating);

    let vencedor;
    if (ratingHeroi > ratingVilao) {
        vencedor = heroi.nome;
    } else if (ratingVilao > ratingHeroi) {
        vencedor = vilao.nome;
    } else {
        vencedor = "Empate";
    }

    const diferenca = Math.abs(ratingHeroi - ratingVilao);
    let resultado;

    if (diferenca === 0) {
        resultado = "Foi um empate feroz!";
    } else if (diferenca < 0.3) {
        resultado = `Vitória muito renhida para ${vencedor}.`;
    } else if (diferenca < 0.7) {
        resultado = `${vencedor} venceu com dificuldade.`;
    } else {
        resultado = `${vencedor} venceu com facilidade.`;
    }

    return { heroi, vilao, resultado };
}

/**
 * Dados para o header (usado em várias páginas).
 */
export function getDadosHeader() {
    return {
        titulo: "HeroDex",
        batalha: gerarBatalha(),
    };
}
