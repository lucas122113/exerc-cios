//1° questão
      let alterado = false;

  function alterarTitulo() {
    const titulo = document.getElementById("tituloPrincipal");

    if (alterado) {
      titulo.textContent = "Título Original";
    } else {
      titulo.textContent = "Novo Título";
    }

    alterado = !alterado;
  }
//2° questão
   let corAzul = false;
  function trocarCorFundo() {
      if (corAzul) {
        document.body.style.backgroundColor = "white";
        corAzul = false;
      } else {
        document.body.style.backgroundColor = "lightblue";
        corAzul = true;
      }
  }
//3° questão
    function mudarParagrafo() {
      document.getElementById("paragrafoAzul").style.color = "blue";
    }
//4° questão
    function mensagem() {
      alert("Bem-vindo ao JavaScript!");
    }
//5° questão
    function mostrarTexto() {
      let texto = document.getElementById("entradaTexto").value;
      document.getElementById("resultadoTexto").textContent = texto;
    }
//6° questão
    let tamanhoFonte = 16;

    function aumentarFonte() {
      tamanhoFonte += 2;
      document.getElementById("textoFonte").style.fontSize = tamanhoFonte + "px";
    }

    function diminuirFonte() {
      tamanhoFonte -= 2;
      document.getElementById("textoFonte").style.fontSize = tamanhoFonte + "px";
    }
//7° questão
    function trocarImagem() {
      document.getElementById("imagemTroca").src = "https://picsum.photos/201";
    }
//8° questão
    let contador = 0;

    function aumentarContador() {
      contador++;
      document.getElementById("contador").textContent = contador;
    }

    function diminuirContador() {
      contador--;
      document.getElementById("contador").textContent = contador;
    }
//9° questão
    function toggleTexto() {
      let texto = document.getElementById("textoToggle");

      if (texto.style.display === "none") {
        texto.style.display = "block";
      } else {
        texto.style.display = "none";
      }
    }
//10° questão
    function corAleatoria() {
      let cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.getElementById("tituloAleatorio").style.color = cor;
    }
//11° questão
    function alterarMensagem() {
      document.getElementById("mensagemId").textContent = "Mensagem alterada";
    }
//12° questão
    function alterarParagrafos() {
      let paragrafos = document.getElementsByClassName("paragrafo");

      for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.color = "red";
      }
    }
//13° questão
    function alterarCaixas() {
      let caixas = document.getElementsByClassName("caixa");

      for (let i = 0; i < caixas.length; i++) {
        caixas[i].style.backgroundColor = "green";
      }
    }
//14° questão
    function usarQuerySelector() {
      document.querySelector(".tituloQuery").textContent = "Alterado com QuerySelector";
    }
//15° questão
    function alterarLista() {
      let itens = document.querySelectorAll("li");

      itens.forEach(function(item) {
        item.style.color = "green";
      });
    }
//16° questão
    function adicionarItem() {
      let texto = document.getElementById("novoItem").value;

      let li = document.createElement("li");
      li.textContent = texto;

      document.getElementById("listaItens").appendChild(li);
    }
//17° questão
    function removerItem() {
      let lista = document.getElementById("listaItens");

      if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
      }
    }
//18° questão
    function adicionarTarefa() {
      let texto = document.getElementById("tarefa").value;

      let li = document.createElement("li");
      li.textContent = texto;

      let botao = document.createElement("button");
      botao.textContent = "Remover";

      botao.onclick = function() {
        li.remove();
      };

      li.appendChild(botao);
      document.getElementById("listaTarefas").appendChild(li);
    }
//19° questão
    function duplicarElemento() {
      let elemento = document.getElementById("duplicarTexto");
      let copia = elemento.cloneNode(true);

      document.body.appendChild(copia);
    }
//20° questão
    function criarParagrafo() {
      let p = document.createElement("p");
      p.textContent = "Novo parágrafo criado";

      document.body.appendChild(p);
    }
//21° questão
    let quadrado = document.getElementById("quadrado");

    quadrado.addEventListener("mouseover", function() {
      quadrado.style.backgroundColor = "blue";
    });

    document.getElementById("campoTecla").addEventListener("keydown", function(event) {
      console.log(event.key);
    });

    document.getElementById("textarea").addEventListener("input", function() {
      document.getElementById("contadorCaracteres").textContent = this.value.length;
    });

    document.getElementById("formularioSimples").addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Formulário enviado sem recarregar!");
    });

    document.getElementById("areaMouse").addEventListener("mousemove", function(event) {
      document.getElementById("posicaoMouse").textContent =
        "X: " + event.clientX + " | Y: " + event.clientY;
    });
//22° questão
    function calcular(operacao) {
      let n1 = Number(document.getElementById("n1").value);
      let n2 = Number(document.getElementById("n2").value);
      let resultado;

      if (operacao === "+") resultado = n1 + n2;
      if (operacao === "-") resultado = n1 - n2;
      if (operacao === "*") resultado = n1 * n2;
      if (operacao === "/") result = n1 / n2;

      document.getElementById("resultadoCalc").textContent = resultado;
    }
//23° questão
    function trocarTema() {
      document.body.classList.toggle("escuro");
    }

    let segundos = 0;
    let intervalo;
//24° questão
    function iniciarCronometro() {
      intervalo = setInterval(function() {
        segundos++;
        document.getElementById("tempo").textContent = segundos;
      }, 1000);
    }
//25° questão
    function pausarCronometro() {
      clearInterval(intervalo);
    }
//26° questão
    function resetarCronometro() {
      segundos = 0;
      document.getElementById("tempo").textContent = segundos;
    }
//27° questão
    let imagens = [
      "https://picsum.photos/300?1",
      "https://picsum.photos/300?2",
      "https://picsum.photos/300?3"
    ];
//28° questão
    let indice = 0;
    document.getElementById("galeria").src = imagens[indice];
//29° questão
    function proximaImagem() {
      indice++;

      if (indice >= imagens.length) {
        indice = 0;
      }

      document.getElementById("galeria").src = imagens[indice];
    }
//30° questão
    function imagemAnterior() {
      indice--;

      if (indice < 0) {
        indice = imagens.length - 1;
      }

      document.getElementById("galeria").src = imagens[indice];
    }

    document.getElementById("formularioCompleto").addEventListener("submit", function(event) {

      event.preventDefault();

      let nome = document.getElementById("nome");
      let email = document.getElementById("email");
      let senha = document.getElementById("senha");

      let valido = true;

      nome.classList.remove("erro");
      email.classList.remove("erro");
      senha.classList.remove("erro");

      if (nome.value === "") {
        nome.classList.add("erro");
        valido = false;
      }

      if (email.value === "") {
        email.classList.add("erro");
        valido = false;
      }

      if (senha.value === "") {
        senha.classList.add("erro");
        valido = false;
      }

      if (valido) {
        document.getElementById("mensagemFormulario").textContent =
          "Formulário enviado com sucesso!";
      } else {
        document.getElementById("mensagemFormulario").textContent =
          "Preencha todos os campos.";
      }

    });