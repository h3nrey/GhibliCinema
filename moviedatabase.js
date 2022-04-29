const axios = require("axios")
const baseURL = "https://ghibliapi.herokuapp.com"

const othersMovies = [
    {
        id: '0',
        title:"Nausicaä do Vale do Vento",
        director:"Hayao Miyazaki",
        image: "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1984-Nausica%C3%A4-do-Vale-do-Vento.jpg?w=279&ssl=1",
        movie_banner: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/AAAABZ1I2w6a77rYzWaiZ1LGKyqCaiLQBflEj3Hj-RXRycj40jw7r6fG4jsurl6tM5-VOmLpzXVA1u-jSroSwPA78kDuoKs.jpg?w=512&ssl=1",
        description: "Após os Sete Dias de Fogo, uma guerra que destruiu a civilização humana e a maior parte do ecossistema da Terra, surge uma floresta que exala gases venenosos. Apenas insetos e um ser conhecido como Ohmu vivem por lá. Nausicaä, filha do rei do Vale do Vento, tem o estranho poder de conseguir sentir o que a floresta sente e se vê obrigada a sair em uma jornada para tentar evitar outra guerra devastadora.",
    },
    {
        id: '1',
        title:"Eu posso Ouvir o oceano",
        director:"Tomomi Mochizuki",
        image: "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Eu-Posso-Ouvir-o-Oceano.jpg?w=279&ssl=1",
        movie_banner: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/Eu-posso-ouvir-o-oceano-netflix.jpg?w=512&ssl=1",
        description: "Após o divórcio dos pais de Rikako, uma estudante de Tóquio, é transferida para um colégio de Kochi, uma cidade litorânea remota da capital. Ela é inteligente, se dedica muito aos estudos e aos esportes. Mas não consegue se adaptar à vida social da escola. No mesmo colégio estão Taku Morisaki e Yutaka Matsuno, que sempre foram melhores amigos, no entanto, Rikako ficará entre os dois.",
    },
]

module.exports = JSON.parse(JSON.stringify(othersMovies));
