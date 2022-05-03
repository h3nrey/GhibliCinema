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


const movieLinks = [
    {
        id:"2baf70d1-42bb-4437-b551-e5fed5a87abe",
        videoSource: "https://www.youtube.com/embed/8ykEy-yPBFc" //castle of the sky
    },
    {
        id:"nausicaID",
        videoSource: "https://drive.google.com/file/d/1m97vHyNRtBo9jvuCQsb3mOmFscu-7ScY/preview"
    },
    {
        id:"58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        videoSource: "https://www.youtube.com/embed/92a7Hj0ijLs",
        videoTitle: "My Neighbor Totoro"
    },
    {
        id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
        videoSource: "https://www.youtube.com/embed/4vPeTSRd580", //grave of the fireflys
        videoTitle: "Grave of the fireflys"
    }, 
    {
        id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
        videoSource: "https://www.youtube.com/embed/4bG17OYs-GA",
        videoTitle: "Kiki's delivery service"
    },
    {
        id: "4e236f34-b981-41c3-8c65-f8c9000b94e7",
        videoSource: "https://www.youtube.com/embed/OfkQlZArxw0",
        videoTitle: "Only Yesterday"
    },
    {
        id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
        videoSource: "https://www.youtube.com/embed/awEC-aLDzjs",
        videoTitle: "Porco Rosso",
    },
    {
        id:"Ocean wavaes id",
        videoSource: "https://www.youtube.com/embed/tfkHiHjrqa8",
        videoTitle: "Ocean Waves"
    },
    {
        id: "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
        videoSource: "https://www.youtube.com/embed/_7cowIHjCD4",
        videoTitle: "Pom Poko",
    },
    {
        id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        videoSource: "https://www.youtube.com/embed/4OiMOHRDs14",
        videoTitle: "Mononoke Princess"
    },
    {
        id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
        videoSource: "https://www.youtube.com/embed/0pVkiod6V0U",
        videoTitle: "Whisper Of the Heart",
    },
    {
        id: "45204234-adfd-45cb-a505-a8e7a676b114",
        videoSource: "https://www.youtube.com/embed/1C9ujuCPlnY",
        videoTitle: "My Neighbors The Yamadas",
    },
    {
        id: "dc2e6bd1-8156-4886-adff-b39e6043af0c",
        videoSource: "https://www.youtube.com/embed/ByXuk9QqQkk",
        videoTitle: "Spirited Away",
    },
    {
        id: "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
        videoSource: "https://www.youtube.com/embed/iwROgK94zcM",
        videoTitle: "Howl's Moving Castle"
    },
    {
        id: "112c1e67-726f-40b1-ac17-6974127bb9b9",
        videoSource: "https://www.youtube.com/embed/8hxYx3Jq3kI",
        videoTitle: "Tales of Earthsea",
    },
    {
        id: "758bf02e-3122-46e0-884e-67cf83df1786",
        videoSource: "https://www.youtube.com/embed/CsR3KVgBzSM",
        videoTitle: "Ponyo"
    },
    {
        id: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
        videoSource: "https://www.youtube.com/embed/9CtIXPhPo0g",
        videoTitle: "Arriety"
    },
    {
        id: "45db04e4-304a-4933-9823-33f389e8d74d",
        videoSource: "https://www.youtube.com/embed/9nzpk_Br6yo",
        videoTitle: "From Up On Poppy Hill"
    },
    {
        id: "67405111-37a5-438f-81cc-4666af60c800",
        videoSource: "https://www.youtube.com/embed/RzSpDgiF5y8",
        videoTitle: "The Wind Rises"
    },
    {
        id: "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
        videoSource: "https://www.youtube.com/embed/W71mtorCZDw",
        videoTitle: "The Tale Of The Princess Kaguya"
    },
    {
        id: "5fdfb320-2a02-49a7-94ff-5ca418cae602",
        videoSource: "https://www.youtube.com/embed/jjmrxqcQdYg",
        videoTitle: "when Marnie Was There"
    },
    {
        id: "90b72513-afd4-4570-84de-a56c312fdf81",
        videoSource: "https://www.youtube.com/embed/Gp-H_YOcYTM",
        videoTitle: "The Cat Returns"
    },
    {
        id: "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500",
        videoSource: "https://www.youtube.com/embed/Sw7BggqBpTk",
        videoTitle: "The Red Turtle"
    },
    {
        id: "790e0028-a31c-4626-a694-86b7a8cada40",
        videoSource: "https://www.youtube.com/embed/_PfhotgXEeQ",
        videoTitle: "Erwing the witch"
    }
]

module.exports = movieLinks;
