function escolhaSigno() {

    var texto
    var signo = document.getElementById("signos").value;

    switch(signo) {

        case "Áries":
            texto = "Áries costuma viver no agora; além de possuir um grande prazer em existir, ação e decisão também podem ser algumas de suas marcas. A liderança é uma característica forte no signo, que pode ser usada para o empreendedorismo.";

            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/1885/1885499.png'>";
            document.getElementById("zodiac-name").innerHTML = "Áries";
            document.getElementById("sub-title").innerText ="\u0022Espontaneidade, coragem e energia.\u0022";
            document.getElementById("element").innerHTML = "<img src='img/ar.png'>";
        break

        case "Touro": 
            texto ="Touro costuma não abrir mão do que traz conforto e bem-estar, mas pode ter a possessividade em evidência. O signo preza pela beleza física e pela gula. A satisfação de Touro vem do contato com todos os cinco sentidos.";

            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/3184/3184911.png'>";
            document.getElementById("zodiac-name").innerHTML = "Touro";
            document.getElementById("sub-title").innerText ="\u0022Persistência e teimosia.\u0022";
            document.getElementById("element").innerHTML = "<img src='img/terra.png'>";
        break


        case "Gêmeos":
            texto = "Gêmeos costuma apreciar novas ideias, novos lugares e novas pessoas. Gêmeos tem carisma de sobra e tende a fazer amigos com muita facilidade. A superficialidade e a inconsequência também podem ser algumas das marcas do signo.";

            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/3184/3184903.png'>";
            document.getElementById("zodiac-name").innerHTML = "Gêmeos"
            document.getElementById("sub-title").innerText ="\u0022Curiosidade, inteligência e liberdade\u0022";
            document.getElementById("element").innerHTML = "<img src='img/ar.png'>";
        break

        case "Câncer":
            texto = "Câncer costuma buscar o que lhe traz segurança. O signo é maternal e emotivo e tem uma proximidade com o apego ao passado. Câncer costuma ter a intuição acentuada, sentir as coisas no ar e captar tudo logo no primeiro olhar.";

            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/1885/1885449.png'>";
            document.getElementById("zodiac-name").innerHTML = "Câncer"
            document.getElementById("sub-title").innerText ="\u0022Sensibilidade, carinho e família.\u0022";
            document.getElementById("element").innerHTML = "<img src='img/agua.png'>";
        break

        case "Leão":
            texto = "Leão costuma amar plateias e aplausos. O signo tem a coragem e o humor como marcas registradas, mas também o orgulho e o autoritarismo. Leão geralmente valoriza as oportunidades e aproveita cada momento, sabe amar e ter generosidade.";
    
            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/1885/1885485.png'>";
            document.getElementById("zodiac-name").innerHTML = "Leão";
            document.getElementById("sub-title").innerText ="\u0022Criatividade, autoestima e nobreza.\u0022";
            document.getElementById("element").innerHTML = "<img src='img/fogo.png'>";
            break

        case "Virgem":
            texto = "Virgem costuma buscar constantemente a perfeição, tudo sempre poderia estar um pouco melhor. Signo observador, que costuma identificar o detalhe que ninguém mais percebe. Virgem tem praticidade e organização, mas também pode ser frio e cético.";

            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/3184/3184899.png'>";
            document.getElementById("zodiac-name").innerHTML = "Virgem"
            document.getElementById("sub-title").innerText ="\u0022Objetividade, humanidade e organização.\u0022";
            document.getElementById("element").innerHTML = "<img src='img/terra.png'>";
        break


        case "Libra":
            texto = "Libra costuma buscar sempre o equilíbrio e conviver com a indecisão. Regido por Vênus, o signo tem uma aproximação natural com as artes. Libra costuma ter ética, mas também pode ter vaidade em excesso e comportamentos considerados de “mau gosto”.";

            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/1885/1885383.png'>"
            document.getElementById("zodiac-name").innerHTML = "Libra";
            document.getElementById("sub-title").innerText ="\u0022Vaidade, empatia e diplomacia.\u0022";
            document.getElementById("element").innerHTML = "<img src='img/ar.png'>";
        break


        case "Escorpião":
            texto = "Escorpião costuma ter muita perspicácia, não é a toa que são naturalmente detetives. O sexto sentido do signo alerta para possíveis “perigos” logo de cara. Escorpião tem uma capacidade de regeneração única, mas também pode ter muitos ciúmes.";

            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/3184/3184914.png'>"
            document.getElementById("zodiac-name").innerHTML = "Escorpião"
            document.getElementById("sub-title").innerText ="\u0022Intensidade, mistério e intuição.\u0022";
            document.getElementById("element").innerHTML = "<img src='img/agua.png'>";
        break

        case "Sagitário":
            texto = "Sagitário costuma ser viajante, sua casa é o mundo inteiro. O signo viaja muito também em sua própria mente. Não tente aprisionar Sagitário de nenhuma forma, ele não aceita limites. Otimista e jovial, pode ter exageros e uma dose de deboche.";

            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/3184/3184917.png'>"
            document.getElementById("zodiac-name").innerHTML = "Sagitário"
            document.getElementById("sub-title").innerText ="\u0022Otimismo, liberdade e movimento.\u0022";
            document.getElementById("element").innerHTML = "<img src='img/fogo.png'>";
        break

        case "Capricórnio":
            texto = "Capricórnio costuma ter seus propósitos e metas bem definidos. Signo de praticidade que segue as regras do jogo tem total noção dos seus limites. Capricórnio é maduro e bem humorado, mas também pode ser frio nas relações e um tanto pessimista.";

            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/3184/3184905.png'>";
            document.getElementById("zodiac-name").innerHTML = "Capricórnio";
            document.getElementById("sub-title").innerText ="\u0022Responsabilidade, ambição e persistência.\u0022";
            document.getElementById("element").innerHTML = "<img src='img/terra.png'>";
        break


        case "Aquário":
            texto = "Aquário costuma ter a amizade como cartão de visita e ter uma conexão intensa com a liberdade. Signo idealista, tende a dar preferência aos diálogos racionais. Aquário é solidário e humano, também pode ser radical e bem “do contra”.";
    
            document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/1885/1885360.png'>";
            document.getElementById("zodiac-name").innerHTML = "Aquário";
            document.getElementById("sub-title").innerText ="\u0022Inovação, originalidade e independência.\u0022";
            document.getElementById("element").innerHTML = "<img src='img/ar.png'>";
        break

    
            case "Peixes":
                texto = "Peixes costuma entender tudo sem precisar de muitas palavras, possuem uma sensibilidade superior. Signo compassivo e inspirador, Peixes tende a ter uma forte conexão com a espiritualidade, mas pode se iludir com certa facilidade.";
        
                document.getElementById("img-zodiac").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/1885/1885470.png'>";
                document.getElementById("zodiac-name").innerHTML = "Peixes";
                document.getElementById("sub-title").innerText ="\u0022Solidariedade, intuição e desapego.\u0022";
                document.getElementById("element").innerHTML = "<img src='img/agua.png'>";
            break
    

        default:
        texto = "Escolha um signo existente";
    }

    document.getElementById("frase").innerHTML = texto;
}