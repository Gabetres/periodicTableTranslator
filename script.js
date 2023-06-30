const tabelaPeriodica = [
    { elemento: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1 },
    { elemento: 'Hélio', simbolo: 'He', numeroAtomico: 2 },
    { elemento: 'Lítio', simbolo: 'Li', numeroAtomico: 3 },
    { elemento: 'Berílio', simbolo: 'Be', numeroAtomico: 4 },
    { elemento: 'Boro', simbolo: 'B', numeroAtomico: 5 },
    { elemento: 'Carbono', simbolo: 'C', numeroAtomico: 6 },
    { elemento: 'Nitrogênio', simbolo: 'N', numeroAtomico: 7 },
    { elemento: 'Oxigênio', simbolo: 'O', numeroAtomico: 8 },
    { elemento: 'Flúor', simbolo: 'F', numeroAtomico: 9 },
    { elemento: 'Neônio', simbolo: 'Ne', numeroAtomico: 10 },
    { elemento: 'Sódio', simbolo: 'Na', numeroAtomico: 11 },
    { elemento: 'Magnésio', simbolo: 'Mg', numeroAtomico: 12 },
    { elemento: 'Alumínio', simbolo: 'Al', numeroAtomico: 13 },
    { elemento: 'Silício', simbolo: 'Si', numeroAtomico: 14 },
    { elemento: 'Fósforo', simbolo: 'P', numeroAtomico: 15 },
    { elemento: 'Enxofre', simbolo: 'S', numeroAtomico: 16 },
    { elemento: 'Cloro', simbolo: 'Cl', numeroAtomico: 17 },
    { elemento: 'Argônio', simbolo: 'Ar', numeroAtomico: 18 },
    { elemento: 'Potássio', simbolo: 'K', numeroAtomico: 19 },
    { elemento: 'Cálcio', simbolo: 'Ca', numeroAtomico: 20 },
    { elemento: 'Escândio', simbolo: 'Sc', numeroAtomico: 21 },
    { elemento: 'Titânio', simbolo: 'Ti', numeroAtomico: 22 },
    { elemento: 'Vanádio', simbolo: 'V', numeroAtomico: 23 },
    { elemento: 'Crômio', simbolo: 'Cr', numeroAtomico: 24 },
    { elemento: 'Manganês', simbolo: 'Mn', numeroAtomico: 25 },
    { elemento: 'Ferro', simbolo: 'Fe', numeroAtomico: 26 },
    { elemento: 'Cobalto', simbolo: 'Co', numeroAtomico: 27 },
    { elemento: 'Níquel', simbolo: 'Ni', numeroAtomico: 28 },
    { elemento: 'Cobre', simbolo: 'Cu', numeroAtomico: 29 },
    { elemento: 'Zinco', simbolo: 'Zn', numeroAtomico: 30 },
    { elemento: 'Gálio', simbolo: 'Ga', numeroAtomico: 31 },
    { elemento: 'Germânio', simbolo: 'Ge', numeroAtomico: 32 },
    { elemento: 'Arsênio', simbolo: 'As', numeroAtomico: 33 },
    { elemento: 'Selênio', simbolo: 'Se', numeroAtomico: 34 },
    { elemento: 'Bromo', simbolo: 'Br', numeroAtomico: 35 },
    { elemento: 'Criptônio', simbolo: 'Kr', numeroAtomico: 36 },
    { elemento: 'Rubídio', simbolo: 'Rb', numeroAtomico: 37 },
    { elemento: 'Estrôncio', simbolo: 'Sr', numeroAtomico: 38 },
    { elemento: 'Ítrio', simbolo: 'Y', numeroAtomico: 39 },
    { elemento: 'Zircônio', simbolo: 'Zr', numeroAtomico: 40 },
    { elemento: 'Nióbio', simbolo: 'Nb', numeroAtomico: 41 },
    { elemento: 'Molibdênio', simbolo: 'Mo', numeroAtomico: 42 },
    { elemento: 'Tecnécio', simbolo: 'Tc', numeroAtomico: 43 },
    { elemento: 'Rutênio', simbolo: 'Ru', numeroAtomico: 44 },
    { elemento: 'Ródio', simbolo: 'Rh', numeroAtomico: 45 },
    { elemento: 'Paládio', simbolo: 'Pd', numeroAtomico: 46 },
    { elemento: 'Prata', simbolo: 'Ag', numeroAtomico: 47 },
    { elemento: 'Cádmio', simbolo: 'Cd', numeroAtomico: 48 },
    { elemento: 'Índio', simbolo: 'In', numeroAtomico: 49 },
    { elemento: 'Estanho', simbolo: 'Sn', numeroAtomico: 50 },
    { elemento: 'Antimônio', simbolo: 'Sb', numeroAtomico: 51 },
    { elemento: 'Telúrio', simbolo: 'Te', numeroAtomico: 52 },
    { elemento: 'Iodo', simbolo: 'I', numeroAtomico: 53 },
    { elemento: 'Xenônio', simbolo: 'Xe', numeroAtomico: 54 },
    { elemento: 'Césio', simbolo: 'Cs', numeroAtomico: 55 },
    { elemento: 'Bário', simbolo: 'Ba', numeroAtomico: 56 },
    { elemento: 'Lantânio', simbolo: 'La', numeroAtomico: 57 },
    { elemento: 'Cério', simbolo: 'Ce', numeroAtomico: 58 },
    { elemento: 'Praseodímio', simbolo: 'Pr', numeroAtomico: 59 },
    { elemento: 'Neodímio', simbolo: 'Nd', numeroAtomico: 60 },
    { elemento: 'Promécio', simbolo: 'Pm', numeroAtomico: 61 },
    { elemento: 'Samário', simbolo: 'Sm', numeroAtomico: 62 },
    { elemento: 'Európio', simbolo: 'Eu', numeroAtomico: 63 },
    { elemento: 'Gadolínio', simbolo: 'Gd', numeroAtomico: 64 },
    { elemento: 'Térbio', simbolo: 'Tb', numeroAtomico: 65 },
    { elemento: 'Disprósio', simbolo: 'Dy', numeroAtomico: 66 },
    { elemento: 'Hólmio', simbolo: 'Ho', numeroAtomico: 67 },
    { elemento: 'Érbio', simbolo: 'Er', numeroAtomico: 68 },
    { elemento: 'Túlio', simbolo: 'Tm', numeroAtomico: 69 },
    { elemento: 'Itérbio', simbolo: 'Yb', numeroAtomico: 70 },
    { elemento: 'Lutécio', simbolo: 'Lu', numeroAtomico: 71 },
    { elemento: 'Háfnio', simbolo: 'Hf', numeroAtomico: 72 },
    { elemento: 'Tântalo', simbolo: 'Ta', numeroAtomico: 73 },
    { elemento: 'Tungstênio', simbolo: 'W', numeroAtomico: 74 },
    { elemento: 'Rênio', simbolo: 'Re', numeroAtomico: 75 },
    { elemento: 'Ósmio', simbolo: 'Os', numeroAtomico: 76 },
    { elemento: 'Irídio', simbolo: 'Ir', numeroAtomico: 77 },
    { elemento: 'Platina', simbolo: 'Pt', numeroAtomico: 78 },
    { elemento: 'Ouro', simbolo: 'Au', numeroAtomico: 79 },
    { elemento: 'Mercúrio', simbolo: 'Hg', numeroAtomico: 80 },
    { elemento: 'Tálio', simbolo: 'Tl', numeroAtomico: 81 },
    { elemento: 'Chumbo', simbolo: 'Pb', numeroAtomico: 82 },
    { elemento: 'Bismuto', simbolo: 'Bi', numeroAtomico: 83 },
    { elemento: 'Polônio', simbolo: 'Po', numeroAtomico: 84 },
    { elemento: 'Astato', simbolo: 'At', numeroAtomico: 85 },
    { elemento: 'Rádon', simbolo: 'Rn', numeroAtomico: 86 },
    { elemento: 'Frâncio', simbolo: 'Fr', numeroAtomico: 87 },
    { elemento: 'Rádio', simbolo: 'Ra', numeroAtomico: 88 },
    { elemento: 'Actínio', simbolo: 'Ac', numeroAtomico: 89 },
    { elemento: 'Tório', simbolo: 'Th', numeroAtomico: 90 },
    { elemento: 'Protactínio', simbolo: 'Pa', numeroAtomico: 91 },
    { elemento: 'Urânio', simbolo: 'U', numeroAtomico: 92 },
    { elemento: 'Neptúnio', simbolo: 'Np', numeroAtomico: 93 },
    { elemento: 'Plutônio', simbolo: 'Pu', numeroAtomico: 94 },
    { elemento: 'Amerício', simbolo: 'Am', numeroAtomico: 95 },
    { elemento: 'Cúrio', simbolo: 'Cm', numeroAtomico: 96 },
    { elemento: 'Berquélio', simbolo: 'Bk', numeroAtomico: 97 },
    { elemento: 'Califórnio', simbolo: 'Cf', numeroAtomico: 98 },
    { elemento: 'Einstênio', simbolo: 'Es', numeroAtomico: 99 },
    { elemento: 'Férmio', simbolo: 'Fm', numeroAtomico: 100 },
    { elemento: 'Mendelévio', simbolo: 'Md', numeroAtomico: 101 },
    { elemento: 'Nobélio', simbolo: 'No', numeroAtomico: 102 },
    { elemento: 'Laurêncio', simbolo: 'Lr', numeroAtomico: 103 },
    { elemento: 'Rutherfórdio', simbolo: 'Rf', numeroAtomico: 104 },
    { elemento: 'Dúbnio', simbolo: 'Db', numeroAtomico: 105 },
    { elemento: 'Seabórgio', simbolo: 'Sg', numeroAtomico: 106 },
    { elemento: 'Bóhrio', simbolo: 'Bh', numeroAtomico: 107 },
    { elemento: 'Hássio', simbolo: 'Hs', numeroAtomico: 108 },
    { elemento: 'Meitnério', simbolo: 'Mt', numeroAtomico: 109 },
    { elemento: 'Darmstádio', simbolo: 'Ds', numeroAtomico: 110 },
    { elemento: 'Roentgênio', simbolo: 'Rg', numeroAtomico: 111 },
    { elemento: 'Copernício', simbolo: 'Cn', numeroAtomico: 112 },
    { elemento: 'Nihônio', simbolo: 'Nh', numeroAtomico: 113 },
    { elemento: 'Fleróvio', simbolo: 'Fl', numeroAtomico: 114 },
    { elemento: 'Moscóvio', simbolo: 'Mc', numeroAtomico: 115 },
    { elemento: 'Livermório', simbolo: 'Lv', numeroAtomico: 116 },
    { elemento: 'Tennesso', simbolo: 'Ts', numeroAtomico: 117 },
    { elemento: 'Oganessônio', simbolo: 'Og', numeroAtomico: 118 }
  ];

   // Obtenha a referência para a caixa de entrada de texto
   const caixaTexto = document.getElementById("caixaTexto");

   // Capture o evento de pressionar a tecla "Enter"
   caixaTexto.addEventListener("keydown", function(event) {
     if (event.key === "Enter") {
       // Obtenha o valor digitado na caixa de texto
       const valor = caixaTexto.value;

       // Verifique se o valor digitado é um número
       if (!isNaN(valor)) {
         // Busque o elemento correspondente pelo número atômico
         const elemento = tabelaPeriodica.find(function(item) {
           return item.numeroAtomico === parseInt(valor, 10);
         });

         // Verifique se o elemento foi encontrado
         if (elemento) {
           // Exiba os detalhes do elemento encontrado

          let elem = document.querySelector("#elemento");
          elem.innerHTML = elemento.elemento
          elem.style.backgroundColor = "#ffa73c";

          let simb = document.querySelector("#simbolo")
          simb.innerHTML = elemento.simbolo
          simb.style.backgroundColor = "#973cff";

          let numatomic = document.querySelector("#numeroatomico")
          numatomic.innerHTML = elemento.numeroAtomico
          numatomic.style.backgroundColor = "#ff3c53";

          let error = document.querySelector("#erro")
          error.innerHTML = " "

/*            console.log("Elemento:", elemento.elemento);
           console.log("Símbolo:", elemento.simbolo);
           console.log("Número atômico:", elemento.numeroAtomico); */
         } else {
           // Caso contrário, exiba uma mensagem de erro
           let error = document.querySelector("#erro")
           error.innerHTML = "Digite um valor valido"
         }
       } else {
         // Busque o elemento correspondente pelo símbolo ou nome
         const elemento = tabelaPeriodica.find(function(item) {
           return (
             item.simbolo.toLowerCase() === valor.toLowerCase() ||
             item.elemento.toLowerCase() === valor.toLowerCase()
           );
         });

         // Verifique se o elemento foi encontrado
         if (elemento) {
           // Exiba os detalhes do elemento encontrado

           let elem = document.querySelector("#elemento");
           elem.innerHTML = elemento.elemento
           elem.style.backgroundColor = "#ffa73c";
 
           let simb = document.querySelector("#simbolo")
           simb.innerHTML = elemento.simbolo
           simb.style.backgroundColor = "#973cff";
 
           let numatomic = document.querySelector("#numeroatomico")
           numatomic.innerHTML = elemento.numeroAtomico
           numatomic.style.backgroundColor = "#ff3c53";

/*            console.log("Elemento:", elemento.elemento);
           console.log("Símbolo:", elemento.simbolo);
           console.log("Número atômico:", elemento.numeroAtomico); */

           let error = document.querySelector("#erro")
           error.innerHTML = " "
         } else {
           // Caso contrário, exiba uma mensagem de erro
           let error = document.querySelector("#erro")
           error.innerHTML = "Digite um valor valido"
         }
       }

       // Limpe a caixa de texto
       caixaTexto.value = "";
     }
   });

