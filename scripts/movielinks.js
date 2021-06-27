const tittlebutton = document.querySelector('#titulo');
const movietittle = document.querySelector('#titlemovieholder');
const movie = document.querySelector('iframe#movie');

const links = ["https://drive.google.com/file/d/1m97vHyNRtBo9jvuCQsb3mOmFscu-7ScY/preview",
                 "https://drive.google.com/file/d/1m22wvIkJtH6x5K4hCry6Oj8MX3TZ9VHl/preview", 
                 "https://drive.google.com/file/d/1mDVaZavX-d4cwy6VUUAjHJUwxOE1WEUC/preview",
                 "https://drive.google.com/file/d/1itoU5jayNTVnBkHFEL6YvyNuI_8ki048/preview",
                 "https://drive.google.com/file/d/1m4LnAS0B8yEFu0qbAXnnSYW2LsFPAZHn/preview",
                 "https://drive.google.com/file/d/1mGVO3acfdZNWbL2Wi8X06L_nA7uGN5NV/preview",
                 "https://drive.google.com/file/d/1mLdN57LdawzHZ6WRUxVegvit3wNqLs8k/preview",
                 "https://drive.google.com/file/d/1mVVyeFKr0ZmxFPXhnyIic3pZYql1nWqg/preview",
                 "https://drive.google.com/file/d/1mWu87jFGClPWbfTIcG-ytHZhe_CF8Tcx/preview",
                 "https://drive.google.com/file/d/1mZ2enMzTVuSNwAfX9ka6CEDdQbxxOIjf/preview",
                 "https://drive.google.com/file/d/1m4UivUNzRn7KCdR_hlKwTkBXh9wKTSBT/preview",
                 "https://drive.google.com/file/d/1mdXk6j7mZBDFxj35Dzkwz4W7kBSlMhtd/preview",
                 "https://drive.google.com/file/d/1mZq55drkNs0zThx5SSUK8sYUimn9jm8O/preview",
                 "https://drive.google.com/file/d/1mcYpWh2T993Y658Uu9oYgRlUx6U3Jy1O/preview",
                 "https://drive.google.com/file/d/1mh3go2YR4UrM3DgMVsOwstfKPMqGB8CS/preview",
                 "https://drive.google.com/file/d/1mmU13t3_9pE6XLIRSCdUOe4QGqqJOzSh/preview",
                 "https://drive.google.com/file/d/1n0Zb3uI47xtqr8lYVDBJ1DL9Vt1aiRtq/preview",
                 "https://drive.google.com/file/d/1mmm-JrdQVRBW1JB1Bylk6gjSMXJQMvqd/preview",
                 "https://drive.google.com/file/d/1mp-SI7w1dIol2iwk5E03Rv-0MmuKaUUr/preview",
                 "https://drive.google.com/file/d/1mpl4vk-mQud5CPSx7HrlZ_QMZt5CDFAq/preview",
                 "https://drive.google.com/file/d/1muZlV7OOFRIb2w_MBlTVjTATCYttGeWi/preview",
                 "https://drive.google.com/file/d/1mva5rPl6iXu-wio2uR90ntznomjvRgwc/preview"
                ]



function changeLink() {
    switch (movietittle.textContent) {
        case "Nausicaä do vale do vento":
            movie.src = links[0];
            break;
        case "O Castelo do Céu":
            movie.src = links[1];
            break;
        case "Meu Amigo Totoro":
            movie.src = links[2];
            break;
        case "Túmulo dos Vagalumes":
            movie.src = links[3];
            break;
        case "O Serviço de Entregas da Kiki":
            movie.src = links[4];
            break;
        case "Memórias de Ontem":
            movie.src = links[5];
            break;
        case "Porco Rosso: O Último Herói Romântico":
            movie.src = links[6];
            break;  
        case "Eu Posso Ouvir o Oceano":
            movie.src = links[7];
            break; 
        case "PomPoko: A Grande Batalha dos Guaxinins":
            movie.src = links[8];
            break; 
        case "Sussurros do Coração":
            movie.src = links[9];
            break; 
        case "Princesa Mononoke":
            movie.src = links[10];
            break; 
        case "Meus Vizinhos os Yamadas":
            movie.src = links[11];
            break; 
        case "A Viagem de Chihiro":
            movie.src = links[12];
            break; 
        case "O Reino dos Gatos":
            movie.src = links[13];
            break; 
        case "O Castelo Animado":
            movie.src = links[14];
            break;
        case "Contos de Terramar":
            movie.src = links[15];
            break;  
        case "Ponyo: uma Amizade que Veio do Mar":
            movie.src = links[16];
            break;  
        case "O Mundo dos Pequeninos":
            movie.src = links[17];
            break;  
        case "Da Colina Kukoriko":
            movie.src = links[18];
            break;  
        case "Vidas ao Vento":
            movie.src = links[19];
            break;  
        case "O Conto da Princesa Kaguya":
            movie.src = links[20];
            break;  
        case "As Memórias de Marnie":
            movie.src = links[21];
            break;  
            
        default:
            break;
    }
    alert("mudou")
}

changeLink();
