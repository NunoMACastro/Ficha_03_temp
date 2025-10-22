import personagens from "../data/personagensData.js";

export function home(req, res, next) {
    try {
        res.render("index", {
            titulo: "HeroDex - Catálogo de Heróis e Vilões",
            personagens,
        });
    } catch (err) {
        next(err);
    }
}
