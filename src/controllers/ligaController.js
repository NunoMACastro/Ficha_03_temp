import personagens from "../data/personagensData.js";

export function herois(req, res, next) {
    try {
        const lista = personagens.filter(
            (p) => p.tipo === "Herói" && p.rating >= 4.0
        );

        res.render("liga", {
            titulo: "Liga dos heróis",
            personagens: lista,
        });
    } catch (err) {
        next(err);
    }
}

export function viloes(req, res, next) {
    try {
        const lista = personagens.filter(
            (p) => p.tipo === "Vilão" && p.rating >= 4.0
        );

        res.render("liga", {
            titulo: "Liga dos vilões",
            personagens: lista,
        });
    } catch (err) {
        next(err);
    }
}
