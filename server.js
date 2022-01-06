//imports
const express = require("express");
const app = express();
const data = require("./moviedatabase")
//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + "public/css"));
app.use('/assets', express.static(__dirname + "public/assets"));
app.use('/script', express.static(__dirname + "/public/scripts"));

//setup view engine
app.set("view engine", "ejs");

// const moviesData = [
//     {
//         id: 1,
//         tittle:"Nausicaä do Vale do Vento",
//         director:"Hayao Miyazaki",
//         verticalCover: "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1984-Nausica%C3%A4-do-Vale-do-Vento.jpg?w=279&ssl=1",
//         horizontalCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEM0_IWRjgaLl2JTBiDNX6B-FcCAp2l5J4A&usqp=CAU",
//         synopsis: "Após os Sete Dias de Fogo, uma guerra que destruiu a civilização humana e a maior parte do ecossistema da Terra, surge uma floresta que exala gases venenosos. Apenas insetos e um ser conhecido como Ohmu vivem por lá. Nausicaä, filha do rei do Vale do Vento, tem o estranho poder de conseguir sentir o que a floresta sente e se vê obrigada a sair em uma jornada para tentar evitar outra guerra devastadora.",
//     },
//     {
//         id: 2,
//         tittle:"O castelo do céu",
//         director:"Hayao Miyazaki",
//         verticalCover: "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1986-O-Castelo-no-C%C3%A9u.jpg?w=279&ssl=1",
//         horizontalCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEM0_IWRjgaLl2JTBiDNX6B-FcCAp2l5J4A&usqp=CAU",
//         synopsis: "Sheeta cai misteriosamente do céu nos braços de Pazu, um garoto que vive e trabalha em uma pequena cidade nas montanhas. Este encontro leva ambos a uma série de aventuras causadas pela perseguição de piratas do ar e do exército a Sheeta, que resulta numa busca pela verdadeira identidade dela e por Laputa, um misterioso castelo no céu.",
//     },
//     {
//         id: 3,
//         tittle:"Meu amigo totoro",
//         director:"Hayao Miyazaki",
//         verticalCover: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1988-Meu-Amigo-Totoro.jpg?w=279&ssl=1",
//         horizontalCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEM0_IWRjgaLl2JTBiDNX6B-FcCAp2l5J4A&usqp=CAU",
//         synopsis: "Duas meninas se mudam com o pai para o interior do Japão, com o objetivo de ficar perto da mãe, que está internada em um hospital. Lá, elas viverão muitas aventuras ao lado de um simpático espírito protetor da floresta chamado Totoro, que vive em uma canforeira gigante.",
//     },
//     {
//         id: 4,
//         tittle:"Túmulo dos Vagalumes",
//         director:"Isao Takahata",
//         verticalCover: "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/t%C3%BAmulo-dos-vagalumes-dvd-vers%C3%A1til.jpg?w=830&ssl=1",
//         horizontalCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEM0_IWRjgaLl2JTBiDNX6B-FcCAp2l5J4A&usqp=CAU",
//         synopsis: "Os irmãos Setsuko e Seita vivem no Japão em meio a Segunda Guerra. Após a morte da mãe num bombardeio americano e a convocação do pai para a Guerra, eles vão morar com alguns parentes. Insatisfeitos, saem da cidade e acabam num abrigo isolado na floresta, onde lutam contra a fome e as doenças e se divertem com as luzes dos vagalumes.",
//     },
//     {
//         id: 5,
//         tittle:"O Serviço de Entregas da Kiki",
//         director:"Hayao miyazaki",
//         verticalCover: "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1989-O-Servi%C3%A7o-de-Entregas-da-Kiki.jpg?w=279&ssl=1",
//         horizontalCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEM0_IWRjgaLl2JTBiDNX6B-FcCAp2l5J4A&usqp=CAU",
//         synopsis: "Ao completar 13 anos, seguindo a tradição de todas as bruxas, Kiki deve se mudar para uma cidade na qual não haja nenhuma bruxa e passar lá um ano morando sozinha em uma espécie de “estágio”. Após achar uma bela cidade à beira mar, Kiki e seu gatinho Jiji tentam se adaptar à nova vida.",
//     },
//     {
//         id: 6,
//         tittle:"Memórias de ontem",
//         director:"Isao Takahata",
//         verticalCover: "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Mem%C3%B3rias-de-Ontem.jpg?w=279&ssl=1",
//         horizontalCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEM0_IWRjgaLl2JTBiDNX6B-FcCAp2l5J4A&usqp=CAU",
//         synopsis: "Taeko é uma mulher solteira de 27 anos que se dedica apenas ao trabalho. Ela sai de sua nativa Tóquio pela primeira vez e viaja a Yamagata para visitar a família da irmã durante a colheita anual de açafrão-bastardo. Ao longo da viagem, ela começa a questionar se sua vida estressante é o que desejava quando jovem.",
//     },
//     {
//         id: 7,
//         tittle:"Porco Rosso",
//         director:"Hayao Miyazaki",
//         verticalCover: "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1992-Porco-Rosso.jpg?w=279&ssl=1",
//         horizontalCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEM0_IWRjgaLl2JTBiDNX6B-FcCAp2l5J4A&usqp=CAU",
//         synopsis: "Costa do Mar Adriático, início dos anos 30. Marco Porcellino, mais conhecido como Porco Rosso, é um aviador caçador de recompensas que luta contra piratas aéreos. Cansados de serem derrotados por Porco, os piratas se unem e contratam um piloto americano para duelar com ele.",
//     },
//     {
//         id: 8,
//         tittle:"Eu posso Ouvir o oceano",
//         director:"Tomomi Mochizuki",
//         verticalCover: "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Eu-Posso-Ouvir-o-Oceano.jpg?w=279&ssl=1",
//         horizontalCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEM0_IWRjgaLl2JTBiDNX6B-FcCAp2l5J4A&usqp=CAU",
//         synopsis: "Após o divórcio dos pais de Rikako, uma estudante de Tóquio, é transferida para um colégio de Kochi, uma cidade litorânea remota da capital. Ela é inteligente, se dedica muito aos estudos e aos esportes. Mas não consegue se adaptar à vida social da escola. No mesmo colégio estão Taku Morisaki e Yutaka Matsuno, que sempre foram melhores amigos, no entanto, Rikako ficará entre os dois.",
//     },
//     {
//         id: 9,
//         tittle:"PomPoko: A Grande Batalha dos Guaxinins",
//         director:"Isao Takahata",
//         verticalCover: "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Pom-Poko.jpg?w=279&ssl=1",
//         horizontalCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEM0_IWRjgaLl2JTBiDNX6B-FcCAp2l5J4A&usqp=CAU",
//         synopsis: "Os guaxinins das colinas de Tama estão sendo expulsos de suas casas pelo rápido desenvolvimento de casas e shoppings. À medida que fica mais difícil encontrar comida e abrigo, eles decidem se unir e revidar.",
//     },
//     {
//         id: 10,
//         tittle:"Sussurros do Coração",
//         director:"Yoshifumi Kondo",
//         verticalCover: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Sussurros-do-Cora%C3%A7%C3%A3o.jpg?w=279&ssl=1",
//         horizontalCover: "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/Sussurros-do-Cora%C3%A7%C3%A3o-poster-japon%C3%AAs.jpg?w=353&ssl=1",
//         synopsis: "Shizuku é uma estudante que sonha em ser uma escritora e decide, durante o verão, ler vinte livros. Mas, curiosamente, todas as edições que ela pegou na biblioteca já haviam sido lidas por um tal de Seiji Amasawa.",
//     },
//     {
//         id: 11,
//         tittle:"Mononoke Hime",
//         director:"Hayao Miyazaki",
//         verticalCover: "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1997-Princesa-Mononoke.jpg?w=279&ssl=1",
//         horizontalCover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEM0_IWRjgaLl2JTBiDNX6B-FcCAp2l5J4A&usqp=CAU",
//         synopsis: "Após enfrentar um deus javali enfurecido, o príncipe Ashitaka é amaldiçoado com um mal que pode matá-lo. Para encontrar a cura, ele decide viajar para longe e acaba se envolvendo numa batalha entre os deuses animais da floresta e os moradores de uma vila de mineiros, que aos poucos estão destruindo a floresta.",
//     },
//     {
//         id: 12,
//         tittle:"Meus Vizinhos Yamanadas",
//         director:"Isao Takahata",
//         verticalCover: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Meus-Vizinhos-os-Yamadas-1.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "O filme mostra o dia-a-dia da família Yamada. A história é dividida em quadros curtos, cada um focando algum ponto interessante do cotidiano da família, mais ou menos como se vê nas tirinhas de jornal. Trata de problemas que vemos em nossos próprios lares, como a exigência dos pais para que o filho adolescente estude mais, a mãe que não quer ser tratada como uma empregada, o pai que chega cansado demais do trabalho e tem que acordar cedo para uma reunião de negócios, o adolescente passando por crises existenciais, os pensamentos inocentes da criança.",
//     },
//     {
//         id: 13,
//         tittle:"A Viagem de Chihiro",
//         director:"Hayao Miyazaki",
//         verticalCover: "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2001-A-Viagem-de-Chihiro.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "Chihiro é uma garota de 10 anos que descobre um mundo secreto de espíritos estranhos, criaturas e feitiçaria. Quando seus pais são misteriosamente transformados, ela deve recorrer à coragem que nunca soube que tinha para se libertar e devolver sua família ao mundo exterior.",
//     },
//     {
//         id: 14,
//         tittle:"O reino dos gatos",
//         director:"Hiroyuki Morita",
//         verticalCover: "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/O-Reino-dos-Gatos.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "Essa é a história de Haru, uma garota muito preguiçosa que todos os dias chega atrasada na escola. Um belo dia, voltando para casa, salva um misterioso gato de ser atropelado. Na mesma noite, a menina recebe a visita do Rei dos Gatos que a convida para conhecer o seu reino, um lugar mágico, diferente de tudo, onde os bichos falam e se comportam como gente. Haru não sabe, mas ela será obrigada a se casar com o Príncipe Lune. E mais: ela vai se transformar em uma gatinha muito simpática.",
//     },
//     {
//         id: 15,
//         tittle:"O Castelo Animado",
//         director:"Hayao Miyazaki",
//         verticalCover: "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2004-O-Castelo-Animado.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "Uma bruxa lança uma terrível maldição sobre a jovem Sophie, transformando-a numa velha de 90 anos. Desesperada, ela embarca numa odisseia na qual acaba parando no castelo animado, onde reside um misterioso feiticeiro chamado Howl que poderá ajudá-la a reverter o feitiço.",
//     },
//     {
//         id: 16,
//         tittle:"Contos de Terramar",
//         director:"Goro Miyazaki",
//         verticalCover: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Contos-de-Terramar.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "Algo estranho caminha sobre a terra. O reino está se deteriorando. Pessoas estão começando a agir diferente e a ver dragões, que não deveriam entrar no mundo dos humanos. Diante desses estranhos eventos, Ged, um poderoso arquimago, está investigando a causa. Durante sua jornada, ele conhece o Príncipe Arren, um adolescente perturbado. Enquanto Arren parece apenas um garoto tímido, ele tem um grave lado negro, que lhe concede força, um ódio implacável e que não tem misericórdia, principalmente quando se trata de proteger Theru, uma garota órfã. Para os oportunistas essa é uma ocasião perfeita, e a bruxa Cob decide usar Theru como isca contra Arren, e somente Ged poderá ajudá-lo a superar seus medos e salvar Theru.",
//     },
//     {
//         id: 17,
//         tittle:"Ponyo – Uma Amizade Que Veio do Mar",
//         director:"Hayao Miyazaki",
//         verticalCover: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2008-Ponyo.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "Certa manhã, quando brinca na praia, o pequeno Sosuke encontra um peixe vermelho preso num frasco de doce. Sosuke liberta o peixinho do frasco, a quem dá o nome de Ponyo, e promete protegê-lo para sempre. Mas o pai de Ponyo, um feiticeiro que vive no fundo do mar, força o pequeno peixe a regressar às profundezas. Decidida a tornar-se humana, Ponyo foge para reencontrar Sosuke e espalha acidentalmente uma poção mágica pelo oceano, transformando as suas irmãs em ondas gigantes que ameaçam inundar a aldeia de Sosuke. O amor e a responsabilidade, o oceano e a vida, num mundo fantástico onde a magia também faz parte das coisas naturais do dia-a-dia.",
//     },
//     {
//         id: 18,
//         tittle:"O Mundo Dos Pequeninos",
//         director:"Hiromasa Yonebayashi",
//         verticalCover: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/O-Mundo-dos-Pequeninos.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "Nos subúrbios de Tóquio, sob o assoalho de uma casa velha, Arrietty vive em seu minúsculo mundo com a família, fazendo de tudo para manter em segredo a existência de todos. Sobrevivendo como pequenos ladrões, eles conhecem as regras para que nunca sejam percebidos pelos verdadeiros – e grandes – donos da casa. Para isso, procuram manter a desconfiança deles em cima dos gatos e ratos e tomam todos os cuidados possíveis para evitar de serem vistos. Contudo, quando um jovem rapaz se hospeda na casa, a pequenina Arrietty acredita que poderá manter uma amizade com ele, apesar da diferença de tamanhos.",
//     },
//     {
//         id: 19,
//         tittle:"Da Colina kokuriko",
//         director:"Goro Miyazaki",
//         verticalCover: "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Da-Colina-Kokuriko.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "Yokohama, 1963. O Japão está se recuperando da devastação da Segunda Guerra Mundial e se preparando para sediar as Olimpíadas. Neste cenário de esperança e mudança, uma amizade começa a florescer entre os estudantes do ensino médio Umi e Shun. Mas um segredo oculto do passado surge para lançar uma sombra sobre o futuro e separá-los.",
//     },
//     {
//         id: 20,
//         tittle:"Vidas ao Vento",
//         director:"Hayao Miyazaki",
//         verticalCover: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2013-Vidas-ao-Vento.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "A animação conta a vida do designer de aviões Jiro Horikoshi e os principais acontecimentos históricos que afetaram sua trajetória. O jovem Jiro sonha em voar e desenhar lindos aviões, inspirado pelo designer aeronáutico italiano Caproni. Não podendo tornar-se piloto por ter miopia desde a infância, Jiro entra na divisão de aviões de uma grande empresa de engenharia japonesa em 1927. Ele conhece e se apaixona por Naoko, desfruta de sua amizade com o colega Honjo e traz grandes inovações para o mundo da aviação.",
//     },
//     {
//         id: 21,
//         tittle:"O Conto da Princesa Kaguya",
//         director:"Isao Takahata",
//         verticalCover: "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/O-Conto-da-Princesa-kaguya.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "Esta animação é baseada no popular conto japonês “O Conto do Cortador de Bambu”. Kaguya era um minúsculo bebê quando foi encontrada dentro de um tronco de bambu brilhante. Passado o tempo, ela se transforma em uma bela jovem que passa a ser cobiçada por 5 nobres, dentre eles, o próprio Imperador. Mas nenhum deles é o que ela realmente quer. A moça envia seus pretendentes em tarefas aparentemente impossíveis para tentar evitar o casamento com um estranho que não ama. Mas Kaguya terá que enfrentar seu destino e punição por suas escolhas.",
//     },
//     {
//         id: 22,
//         tittle:"As Memórias de Marnie",
//         director:"Hiromasa Yonebayashi",
//         verticalCover: "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/As-Mem%C3%B3rias-de-Marnie.jpg?w=279&ssl=1",
//         horizontalCover:"",
//         synopsis: "Anna é uma menina tímida e doce de 12 anos que só consegue se expressar através dos seus desenhos. Por conta de seus ataques de asma, ela é enviada para passar um tempo com os tios que moram no campo, para poder respirar ar puro. Durante seus passeios pela cidade, ela conhece uma menina loira de cabelos longos chamada Marnie, com quem faz uma amizade instantaneamente. As duas tornam-se melhores amigas e passam a dividir segredos e passatempos. Mas Anna vai descobrindo aos poucos que Marnie não é bem quem ela aparenta ser e ela começa a investigar o mistério que cerca a nova amiga.",
//     },
// ]
app.get("/", (req,res) => {
    res.render("index", {movies:data});
})

for (let index = 0; index < data.length; index++) {       
    app.get(`/movie/${index}`, (req,res) => {
        res.render("moviePage", {movie:data[index-1]});
    })
}

for (let index = 0; index < data.length; index++) {       
    app.get(`/watch/${index}`, (req,res) => {
        res.render("movieWatch", {movie:data[index-1]});
    })
}



app.listen(8000);
console.log("rodando");