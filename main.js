function escolhaSigno() {

    var nomeSigno = document.getElementById("zodiac-name");
    var signo = document.getElementById("signos").value;
    var img = document.getElementById("img-zodiac");
    var caracteristicas = document.getElementById("sub-title");
    var texto;

    var nameElemento = document.getElementById("name1").innerText = "Elemento";
    var nameRitmo = document.getElementById("name2").innerText = "Ritmo";
    var nameRegente = document.getElementById('name3').innerText = "Regente";

    var elemento = document.getElementById("element");
    var ritmo = document.getElementById("item1");
    var regente = document.getElementById("item2");

    switch(signo) {
        case "Áries":
            nomeSigno.innerHTML = "Áries";
            caracteristicas.innerText ="\u0022Espontaneidade, coragem e energia.\u0022";

            texto = "Áries costuma viver no agora; além de possuir um grande prazer em existir, ação e decisão também podem ser algumas de suas marcas. A liderança é uma característica forte no signo, que pode ser usada para o empreendedorismo.";
            img.src='img/aries.png';

            //Características dos signos //
            elemento.innerText = "Ar";
            elemento.style.backgroundColor = "#fca151"
            
            ritmo.innerText ="Cardinal";
            ritmo.style.backgroundColor = "#ff99ee";

            regente.innerText ="Marte";
            regente.style.backgroundColor = "#fffc99";
        break

        case "Touro": 
            nomeSigno.innerHTML = "Touro";
            caracteristicas.innerText ="\u0022Persistência e teimosia.\u0022";

            texto ="Touro costuma não abrir mão do que traz conforto e bem-estar, mas pode ter a possessividade em evidência. O signo preza pela beleza física e pela gula. A satisfação de Touro vem do contato com todos os cinco sentidos.";
            img.src='https://cdn-icons-png.flaticon.com/512/3184/3184911.png';
            
            //Características dos signos //
        
            document.getElementById("element").innerText = "Terra";
            document.getElementById("element").style.backgroundColor = "#96ffa2"
            
            ritmo.innerText ="Fixo";
            ritmo.style.backgroundColor = "#ff99ee";

            regente.innerText ="Vênus"; 
            regente.style.backgroundColor = "#fffc99";
        break


        case "Gêmeos":
            nomeSigno.innerHTML = "Gêmeos"
            caracteristicas.innerText ="\u0022Curiosidade, inteligência e liberdade\u0022";

            texto = "Gêmeos costuma apreciar novas ideias, novos lugares e novas pessoas. Gêmeos tem carisma de sobra e tende a fazer amigos com muita facilidade. A superficialidade e a inconsequência também podem ser algumas das marcas do signo.";
            img.src='https://cdn-icons-png.flaticon.com/512/3184/3184903.png';

            //Características dos signos //
            elemento.innerText = "Ar";
            elemento.style.backgroundColor = "#fca151"

            regente.innerText ="Mercúrio"; 
            regente.style.backgroundColor = "#fffc99";
            
            ritmo.innerText ="Mutável";
            ritmo.style.backgroundColor = "#ff99ee";
        break

        case "Câncer":
            nomeSigno.innerHTML = "Câncer"
            caracteristicas.innerText ="\u0022Sensibilidade, carinho e família.\u0022";

            texto = "Câncer costuma buscar o que lhe traz segurança. O signo é maternal e emotivo e tem uma proximidade com o apego ao passado. Câncer costuma ter a intuição acentuada, sentir as coisas no ar e captar tudo logo no primeiro olhar.";
            img.src = "https://cdn-icons-png.flaticon.com/512/1885/1885449.png";

            //Características dos signos //
            elemento.innerText = "Agua";
            elemento.style.backgroundColor = "#96afff"
            
            ritmo.innerText ="Cardinal";
            ritmo.style.backgroundColor = "#ff99ee";

            regente.style.backgroundColor = "#fffc99";
            regente.innerText ="Lua";
        break

        case "Leão":
            nomeSigno.innerHTML = "Leão";
            caracteristicas.innerText ="\u0022Criatividade, autoestima e nobreza.\u0022";

            texto = "Leão costuma amar plateias e aplausos. O signo tem a coragem e o humor como marcas registradas, mas também o orgulho e o autoritarismo. Leão geralmente valoriza as oportunidades e aproveita cada momento, sabe amar e ter generosidade.";
            img.src = "https://cdn-icons-png.flaticon.com/512/1885/1885485.png";
    
            //Características dos signos //
            elemento.innerText = "Fogo";
            elemento.style.backgroundColor = "#ff9696"
            
            ritmo.innerText ="Fixo";
            ritmo.style.backgroundColor = "#ff99ee";

            regente.innerText ="Sol"; 
            regente.style.backgroundColor = "#fffc99";
        break

        case "Virgem":
            nomeSigno.innerHTML = "Virgem";
            caracteristicas.innerText ="\u0022Objetividade, humanidade e organização.\u0022";

            texto = "Virgem costuma buscar constantemente a perfeição, tudo sempre poderia estar um pouco melhor. Signo observador, que costuma identificar o detalhe que ninguém mais percebe. Virgem tem praticidade e organização, mas também pode ser frio e cético.";
            img.src = "https://cdn-icons-png.flaticon.com/512/3184/3184899.png";            

            //Características dos signos //
            elemento.innerText = "Terra";
            elemento.style.backgroundColor = "#96ffa2"
            
            ritmo.innerText ="Mutável";
            ritmo.style.backgroundColor = "#ff99ee";

            regente.style.backgroundColor = "#fffc99";
            regente.innerText ="Mercúrio"; 
        break


        case "Libra":
            texto = "Libra costuma buscar sempre o equilíbrio e conviver com a indecisão. Regido por Vênus, o signo tem uma aproximação natural com as artes. Libra costuma ter ética, mas também pode ter vaidade em excesso e comportamentos considerados de “mau gosto”.";
            img.src = "https://cdn-icons-png.flaticon.com/512/1885/1885383.png";            

            nomeSigno.innerHTML = "Libra";
            caracteristicas.innerText ="\u0022Vaidade, empatia e diplomacia.\u0022";

            //Características dos signos //
            elemento.innerText = "Ar";
            elemento.style.backgroundColor = "#fca151"
            
            ritmo.innerText ="Cardinal";
            ritmo.style.backgroundColor = "#ff99ee";

            regente.innerText ="Vênus"; 
            regente.style.backgroundColor = "#fffc99";
        break


        case "Escorpião":

            texto = "Escorpião costuma ter muita perspicácia, não é a toa que são naturalmente detetives. O sexto sentido do signo alerta para possíveis “perigos” logo de cara. Escorpião tem uma capacidade de regeneração única, mas também pode ter muitos ciúmes.";
            img.src = "https://cdn-icons-png.flaticon.com/512/3184/3184914.png";            

            nomeSigno.innerHTML = "Escorpião"
            caracteristicas.innerText ="\u0022Intensidade, mistério e intuição.\u0022";
            
            //Características dos signos //
            elemento.innerText = "Agua";
            elemento.style.backgroundColor = "#96afff"
            
            ritmo.innerText ="Fixo";
            ritmo.style.backgroundColor = "#ff99ee";

            regente.style.backgroundColor = "#fffc99";
            regente.innerText ="Marte e Plutão"; 
        break

        case "Sagitário":

            texto = "Sagitário costuma ser viajante, sua casa é o mundo inteiro. O signo viaja muito também em sua própria mente. Não tente aprisionar Sagitário de nenhuma forma, ele não aceita limites. Otimista e jovial, pode ter exageros e uma dose de deboche.";
            img.src = "https://cdn-icons-png.flaticon.com/512/3184/3184917.png";            

            nomeSigno.innerHTML = "Sagitário"
            caracteristicas.innerText ="\u0022Otimismo, liberdade e movimento.\u0022";

            //Características dos signos //
            elemento.innerText = "Fogo";
            elemento.style.backgroundColor = "#ff9696"
            
            ritmo.innerText ="Mutável";
            ritmo.style.backgroundColor = "#ff99ee";

            regente.innerText ="Júpiter"; 
            regente.style.backgroundColor = "#fffc99";
        break

        case "Capricórnio":

            texto = "Capricórnio costuma ter seus propósitos e metas bem definidos. Signo de praticidade que segue as regras do jogo tem total noção dos seus limites. Capricórnio é maduro e bem humorado, mas também pode ser frio nas relações e um tanto pessimista.";
            img.src = "https://cdn-icons-png.flaticon.com/512/3184/3184905.png";            

            nomeSigno.innerHTML = "Capricórnio";
            caracteristicas.innerText ="\u0022Responsabilidade, ambição e persistência.\u0022";

            //Características dos signos //
            elemento.innerText = "Terra";
            elemento.style.backgroundColor = "#96ffa2"
            
            ritmo.innerText ="Cardinal";
            ritmo.style.backgroundColor = "#ff99ee";

            regente.innerText ="Saturno"; 
            regente.style.backgroundColor = "#fffc99";
        break

        case "Aquário":

            texto = "Aquário costuma ter a amizade como cartão de visita e ter uma conexão intensa com a liberdade. Signo idealista, tende a dar preferência aos diálogos racionais. Aquário é solidário e humano, também pode ser radical e bem “do contra”.";
            img.src = "https://cdn-icons-png.flaticon.com/512/1885/1885360.png";            

            nomeSigno.innerHTML = "Aquário";
            caracteristicas.innerText = "\u0022Inovação, originalidade e independência.\u0022";

            //Características dos signos //
            elemento.innerText = "Ar";
            elemento.style.backgroundColor = "#fca151"
            
            regente.style.backgroundColor = "#fffc99";
            ritmo.innerText ="Fixo";
            regente.innerText ="Saturno/Urano"; 
            ritmo.style.backgroundColor = "#ff99ee";
        break
    
        case "Peixes":
            texto = "Peixes costuma entender tudo sem precisar de muitas palavras, possuem uma sensibilidade superior. Signo compassivo e inspirador, Peixes tende a ter uma forte conexão com a espiritualidade, mas pode se iludir com certa facilidade.";
            img.src = "https://cdn-icons-png.flaticon.com/512/1885/1885470.png";    

            nomeSigno.innerHTML = "Peixes";
            caracteristicas.innerText ="\u0022Solidariedade, intuição e desapego.\u0022";

            //Características dos signos //
            elemento.innerText = "Agua";
            elemento.style.backgroundColor = "#96afff"
            
            ritmo.innerText ="Mutável";
            ritmo.style.backgroundColor = "#ff99ee";

            regente.innerText ="Júpiter/Netuno"; 
            regente.style.backgroundColor = "#fffc99";
        break
    
        default:
        texto = "Escolha um signo existente";
    }

    document.getElementById("frase").innerHTML = texto;
}