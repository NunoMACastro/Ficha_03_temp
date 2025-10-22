/**
 * @file src/data/personagensData.js
 * @description Base de dados estática de personagens do HeroDex.
 * Cada personagem tem: id, nome, tipo, descrição, imagem e rating.
 */

const personagens = [
    {
        id: 1,
        nome: "Spider-Man",
        tipo: "Herói",
        descricao: "Peter Parker combate o crime com agilidade aracnídea.",
        imagem: "/images/herois/spiderman.jpg",
        rating: 4.6,
    },
    {
        id: 2,
        nome: "Joker",
        tipo: "Vilão",
        descricao: "O arqui-inimigo do Batman, mestre do caos e da anarquia.",
        imagem: "/images/viloes/joker.jpg",
        rating: 4.4,
    },
    {
        id: 3,
        nome: "Black Panther",
        tipo: "Herói",
        descricao: "Rei de Wakanda, combina tradição com tecnologia de ponta.",
        imagem: "/images/herois/blackpanther.jpg",
        rating: 4.5,
    },
    {
        id: 4,
        nome: "Thanos",
        tipo: "Vilão",
        descricao:
            "O Titã que eliminou metade do universo com um estalar de dedos.",
        imagem: "/images/viloes/thanos.jpg",
        rating: 4.9,
    },
    {
        id: 5,
        nome: "Batman",
        tipo: "Herói",
        descricao: "O Cavaleiro das Trevas, vigilante de Gotham.",
        imagem: "/images/herois/batman.jpg",
        rating: 4.5,
    },
    {
        id: 6,
        nome: "Ultron",
        tipo: "Vilão",
        descricao:
            "IA criada por Tony Stark que se voltou contra a humanidade.",
        imagem: "/images/viloes/ultron.jpg",
        rating: 4.7,
    },
    {
        id: 7,
        nome: "Iron Man",
        tipo: "Herói",
        descricao: "Tony Stark, génio bilionário num fato de alta tecnologia.",
        imagem: "/images/herois/ironman.jpg",
        rating: 4.4,
    },
    {
        id: 8,
        nome: "Bane",
        tipo: "Vilão",
        descricao:
            "Inimigo de Batman com força sobre-humana e mente estratégica.",
        imagem: "/images/viloes/bane.jpg",
        rating: 4.6,
    },
    {
        id: 9,
        nome: "Flash",
        tipo: "Herói",
        descricao: "O homem mais rápido do mundo, mestre da velocidade.",
        imagem: "/images/herois/flash.jpg",
        rating: 4.5,
    },
    {
        id: 10,
        nome: "Loki",
        tipo: "Vilão",
        descricao:
            "Deus da trapaça e irmão de Thor, imprevisível e manipulador.",
        imagem: "/images/viloes/loki.jpg",
        rating: 4.7,
    },
    {
        id: 11,
        nome: "Captain America",
        tipo: "Herói",
        descricao: "Soldado da Segunda Guerra Mundial com escudo invencível.",
        imagem: "/images/herois/captainamerica.jpg",
        rating: 4.4,
    },
    {
        id: 12,
        nome: "Darkseid",
        tipo: "Vilão",
        descricao: "Lorde de Apokolips, procura a Equação Anti-Vida.",
        imagem: "/images/viloes/darkseid.jpg",
        rating: 4.9,
    },
];

export default personagens;
