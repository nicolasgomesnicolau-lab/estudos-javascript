//cada section pra h1, div se tiver h2 com p(dai teria q ter section)
//nav pra abas
//ul dps li pra botoes com a href

//ul e li pra caso tenha varias imagens(slide ou opcoes com src=)
//img pra imagens nos sections

//dl, dt, dd pra FAQ

//ai pra login ou submit vc usa o form
//form vai ter label(class e conteudo) e o input(type, for, id, nome)
//e o buttom(type=submit) com conteudo de enviar
//ai vc da preventdefault no forms
//da listener('submit')
//e muda o conteudo no innerhtml do section
//pra pegar informacao é no input, no caso vc pega o id(#nome).value

//h2 e P nos section(div)

//href é exclusivamente pra dar destino pra pagina ou rota

let aviso = true
const rotas = {
  "/": `
  <section class="page-content">
    <h1>Home</h1>
  </section>
  `,
  "https://nicolasgomesnicolau-lab.github.io/Projetos-front-end-em-js-com-css-de-IA/projeto%201/assuntos": `
  <section class="page-content">
    <h1>Topicos</h1>
    <div class="assuntos">
      <section class="explicacao">
        <h2 class="subtitulo">Tópicos e Conteúdo</h2>
        <p>Núcleo central que organiza o conhecimento em três frentes: o roteiro sequencial com o passo a passo do que estudar</p>
        <p>a seção de definições com conceitos técnicos fixos, e as anotações livres vinculadas a cada assunto para salvar códigos e resumos.</p> 
      </section>
      <section class="adicionar-topico">
        <a class="ativo" id="addT" href="addTopico">adicionar assunto</a>
      </section>
      <section class="topicos-feitos"></section>
    </div>
  </section>
  `,
  "https://nicolasgomesnicolau-lab.github.io/Projetos-front-end-em-js-com-css-de-IA/projeto%201/prazos": `
  <section class="page-content">
    <h1>Prazos e Agendas</h1>
    <div class="prazos-evento">
      <section class="explicacao">
        <h2 class="subtitulo">Prazo e Agenda</h2>
        <p>Sistema focado em gerenciar eventos com data fixa ou janelas de prazo (início e fim)</p>
        <p>exibindo o tempo restante para o vencimento para priorizar demandas urgentes.</p>
      </section>
      <section class="marcar">
        <ul class="agenda">
          <li> <a class="agenda-opcao" id="prazo" href="prazo">adicionar prazo</a> </li>
          <li> <a class="agenda-opcao" id="evento" href="evento">adicionar evento</a> </li>
        </ul>
      </section>
      <h1>Agendas marcadas</h1>
      <section class="agendas-feita">
      </section>
    </div>
  </section>
  `,
  "https://nicolasgomesnicolau-lab.github.io/Projetos-front-end-em-js-com-css-de-IA/projeto%201/pomodoro": `
  <section class="page-content">
    <h1>Pomodoro</h1>
    <div class="pomodoro">
      <section class="explicacao">
        <h2 class="subtitulo">Técnica Pomodoro</h2>
        <p>Técnica para gerenciar o foco mental e evitar a exaustão através de ciclos intercalados</p>
        <p>oferecendo opções como o modo clássico (25m de foco / 5m de pausa)</p>
        <p>imersão (50m / 10m) ou ciclo longo (90m / 20m)</p>
        <p>reduzindo a procrastinação e melhorando a retenção.</p>
      </section>
      <section class="opcoes-pomodoro">
        <ul class="ciclos">
          <li> <a href="opcao1C">25m Foco</a> </li>
          <li> <a href="opcao2C">50m Foco</a> </li>
          <li> <a href="opcao3C">90m Foco</a> </li>
        </ul>
      </section>
    </div>
  </section>
  `,
  "404": `
    <div class="page-content">
      <h1>Página não encontrada</h1>
      <p>Ops! O endereço que você tentou acessar não existe.</p>
    </div>
  `
}

let logado = false
let usuarioValor = 0
const form_login = document.querySelector('.login')
const inputGmail = document.querySelector('#nome')
const inputSenha = document.querySelector('#senha')
const btnLogin = document.querySelector('.botao-login')
const Logou = document.querySelector('#logar')

const supakey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxY3J6bnBmdWlxYnJhaHFxYXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2MjE0NTYsImV4cCI6MjEwNDE5NzQ1Nn0.WDJFe0HG30cEafDMtk8VE33CUS16XzEXU96V058aWfY'
const supaURL = 'https://zqcrznpfuiqbrahqqauh.supabase.co'

const supa = supabase.createClient(supaURL, supakey)

async function login() {
  btnLogin.addEventListener('click', (e) => {
    //btnLogin.classList.add('ativo')
  })
  form_login.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (logado) {console.log('Bloqueado! Já está logado.')
      btnLogin.innerHTML = `
      <section class="ja-logado">
        <h2>Voce ja esta logado!</h2>
        <p>caso queira entrar em outra conta vc precisa sair desta antes</p>
      </section>
      `
      return
    }
    const email = inputGmail.value
    const senha = inputSenha.value
    const { data, error } = await supa.auth.signInWithPassword({
    email: email,
    password: senha,
  })
  if (error) {
    console.log("Erro no cadastro:", error.message)
    alert('Erro ao se cadastrar, verifique os valores digitados')
    return
    }
    logado = true
    console.log("Conta criada com sucesso!", data.user)
    alert("Cadastro realizado! Verifique seu e-mail se o Supabase exigir confirmação.")
    usuarioValor = `${inputGmail.value}, ${inputSenha.value}`
    localStorage.setItem('logado', 'usuarioLogado')
  })
}
login()

async function cadastrar() {
  const btnCadastrar = document.querySelector('.cadastrar')
  const sectionCadastr = `
  <section class="cadastrar-tela">
    <div class="botao-cadastrar" href="cadastrar">
      cadastre-se
      <form class="cadastrar-form" action="">
        <label>
          Gmail
          <input type="text" for="gmail" id="nome" name="gmail">
        </label>
        <label>
          senha
          <input type="text" for="senha" id="senha" name="senha">
        </label>
      <button type="submit" id="cadastrar">logar</button>
      </form>
    </div>
  </section>
  `
  const sectionMain = document.querySelector('#app')
  btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault()
    sectionMain.innerHTML = sectionCadastr
    const formCadastro = document.querySelector('.cadastrar-form')
    formCadastro.addEventListener('submit', async (e) => {
      e.preventDefault()
      const gmailCadastro = document.querySelector('#nome').value
      const SenhaCadastro = document.querySelector('#senha').value
      const {data, error} = await supa.auth.signUp({
        email: gmailCadastro,
        password: SenhaCadastro
      })
      if (error) {
        console.log('erro ao cadastrar', error)
        return
      }
      else {
        logado = true
        console.log("Conta criada com sucesso!", data.user)
        alert("Cadastro realizado! Verifique seu e-mail se o Supabase exigir confirmação.")
        usuarioValor = `${inputGmail.value}, ${inputSenha.value}`
      }
    })
  })
}

cadastrar()

async function dadosClientSupa(topicHtml) {
  const { data: { user }, error: authError } = await supa.auth.getUser()

  if (authError || !user) {
    console.error("Erro: Você precisa estar logado para salvar!")
    return}
  let userId = user.id
  let idTopic = topicHtml.id
  let topicoInt = topicHtml.outerHTML
  const { data, error } = await supa
  .from('topicos')
  .upsert([{
    usuario: userId,
    id: idTopic,
    topico: topicoInt
  }
], {onConflict: ['id'] });
  if (error) {
    console.error('erro ao salvar', error.message)
  }
  else {
    console.log('sucesso', data)
  }
}

async function verConta() {
  const { data, error } = await supa
  .from('topicos')
  .select('usuario')
  if (error) {
    console.log('deu ruim')
  }
  console.log('pegamos o usuario', data)
}

async function buscarDadosSupa() {
  const { data: { user }, error: authError } = await supa.auth.getUser()

  if (authError || !user) {
    console.error("Erro: Você precisa estar logado!")
    return
  }
  const { data, error } = await supa
    .from('topicos')
    .select('*')
    .eq('usuario', user.id)

  if (error) {
  console.error('Erro ao buscar:', error)
  } 
  else {
  data.forEach((item) => {
    const sectionTopicosfeito = document.querySelector('.topicos-feitos')
    sectionTopicosfeito.innerHTML += item.topico
  })
  }
}

async function addAgendaSupa(agendaHtml) {
  const {data: { user }, error: authError} = await supa.auth.getUser()

  if (authError || !user) {
    console.log('n cadastrou agenda, n esta logado', error)
    return
  }
  const userID = user.id
  const agendaSection = agendaHtml.outerHTML
  const IdAgenda = agendaHtml.classList[0]
  
  const {data, error} = await supa
  .from('agendas')
  .upsert([
    {
    usuario: userID,
    id: IdAgenda,
    agenda: agendaSection
    }
  ], {onConflict: ['usuario', 'id']})
  if (error) {
    console.error('erro ao salvar', error.message)
  }
  else {
    console.log('sucesso', data)
  }
}

async function buscarAgenda() {
  const { data: { user }, error: authError } = await supa.auth.getUser()

  if (authError || !user) {
    console.error("Erro: Você precisa estar logado!")
    return
  }

  const {data, error} = await supa
  .from('agendas')
  .select('*')
  .eq('usuario', user.id)

  if (error) {
    console.log('n deu pra buscar a agenda', error)
  }
  else {
    const sectionAgenda = document.querySelector('.agendas-feita')
    data.forEach((item) => {
      sectionAgenda.innerHTML += item.agenda
    })
  }
}

async function DeletarBanco(Identificador) {
  const identificarDiv = Identificador.id || Identificador.classList[0] || Identificador
  if (Identificador.id) {
    const {data, error} = await supa
    .from('topicos')
    .delete()
    .eq('id', identificarDiv)
    if (error) {
      alert('NAO deu pra remover', error)
    }
    if (data && data.length > 0) {
      console.log(`Foi removido do banco de dados o item:`, data);
    } else {
      console.log('Aviso: O comando rodou, mas nenhum registro com esse ID foi encontrado na tabela.');
    }
} else {
  const {data, error} = await supa
    .from('agendas')
    .delete()
    .eq('id', identificarDiv)
    if (error) {
      alert('NAO deu pra remover', error)
    }
    if (data && data.length > 0) {
      console.log(`Foi removido do banco de dados o item:`, data);
    } else {
      console.log('Aviso: O comando rodou, mas nenhum registro com esse ID foi encontrado na tabela.');
    }
}
}

//da pra guardar o HTML no localstorage se vc usar o ID dos divs

localStorage.setItem('topicos', JSON.stringify([]))
function adicionarLocal(Topics) {
  let pode = true
  const htmlDoTopico = Topics.outerHTML
  const novosValores = {
  id: Topics.id,
  topico: htmlDoTopico}
  let lista = JSON.parse(localStorage.getItem('topicos')) || [];
  lista.forEach((item) => {
    if (item.id === Topics.id) {
      item.topico = htmlDoTopico
      pode = false
    }
  })
  if (pode) {
    lista.push(novosValores)
  }
  if (!localStorage.getItem('topicos')) {
    localStorage.setItem('topicos', JSON.stringify([]))
}
}

let alarme = false
let intervalo = null

function tocarAlarme() {
  let repeticoes = 5

  const dispararBipe = () => {
    if (repeticoes <= 0) return;
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const ganho = audioCtx.createGain();

  osc.type = 'sine'; // Tipo de onda (pode ser 'sine', 'square', 'sawtooth', 'triangle')
  osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // Frequência em Hertz (nota D5)

  osc.connect(ganho);
  ganho.connect(audioCtx.destination);

  osc.start();
  
  // Para o som automaticamente após 0.5 segundos (500ms)
  setTimeout(() => {
    osc.stop();
    audioCtx.close();
    repeticoes--;
    if (repeticoes > 0) {
        setTimeout(dispararBipe, 200); // 3. Pausa de 200ms e chama o próximo bipe
      }
    }, 500);
  }
  dispararBipe()
}

function iniciarConometro(segundos) {
  if (intervalo) return;

  intervalo = setInterval(() => {
    const minutos = Math.floor(segundos / 60)
    const segundosRestantes = segundos % 60
    if (segundos > 0) {
    segundos--;

    const conometro = document.querySelector('.conometro')
    if (conometro) {
      conometro.textContent = `${minutos}: ${segundosRestantes}`
    }
  } else {
    clearInterval(intervalo)
    intervalo = null
    tocarAlarme()
    alarme = true
  }
  }, 1000)
}

const logadadissimo = `
<section class="page-content home">
  <h1>Home</h1>

  <div class="home-content">
    <section class="explicacao">
      <h2 class="subtitulo">Trilha de Estudos</h2>
      <p>
        Organize seus estudos, acompanhe seus prazos
        e mantenha o foco durante sua jornada.
      </p>
    </section>

      <div class="home-card">
        <h2>📝 assuntos</h2>
        <p>Núcleo central que organiza o conhecimento em três frentes: roteiro de estudos</p>
        <p>definições com conceitos técnicos fixos e anotações livres.</p> 
      </div>

      <div class="home-card">
        <h2>📅 Prazos e Eventos</h2>
        <p>Controle suas tarefas, prazos e compromissos.</p>
      </div>

      <div class="home-card">
        <h2>⏱️ Pomodoro</h2>
        <p>Use ciclos de foco para estudar com mais eficiência.</p>
      </div>
    </section>
  </div>
</section>
`

function botaoRemoveAgenda() {
  const agendaFeita = document.querySelector('.agendas-feita')
  const botaoRemoverAntes = document.querySelectorAll('.removerFeito')
  if (botaoRemoverAntes) {botaoRemoverAntes.forEach((tals) => {tals.remove()})}
  intervaloRemove = setInterval(() => {
    if (agendaFeita.childElementCount > 0) {
      clearInterval(intervaloRemove)
      const htmlRemove = `
      <a class="removerFeito" href="remove">x</a>
      `
      const TodosTopico = document.querySelectorAll('div[class^="agenda-"]')
      TodosTopico.forEach((item) => {
        item.insertAdjacentHTML('afterbegin', htmlRemove)
        const botaoRemove = item.querySelector('.removerFeito')
        const itemTarget = item.currentTarget
          botaoRemove.addEventListener('click', (q) => {
            q.preventDefault()
            item.remove()
            DeletarBanco(item)
          }
)})
        }}, 900)}

function BotaoRemoveTopicos() {
  const topicoFeitos = document.querySelector('.topicos-feitos')
  const botaoRemoverAntes = document.querySelectorAll('.removerFeito')
  if (botaoRemoverAntes) {botaoRemoverAntes.forEach((tals) => {tals.remove()})}
  intervaloRemove = setInterval(() => {
    if (topicoFeitos.childElementCount > 0) {
      clearInterval(intervaloRemove)
      const htmlRemove = `
      <a class="removerFeito" href="remove">x</a>
      `
      const TodosTopico = document.querySelectorAll('.topico')
      TodosTopico.forEach((item) => {
        item.insertAdjacentHTML('afterbegin', htmlRemove)
        const botaoRemove = item.querySelector('.removerFeito')
        const itemTarget = item.currentTarget
        botaoRemove.addEventListener('click', (q) => {
          q.preventDefault()
          item.remove()
          DeletarBanco(item)
        }
  )})
        }}, 900)}

intervalo2 = setInterval(() => {
  const pagina = document.querySelector('#app')
  if (usuarioValor || localStorage.getItem('logado')) {
    pagina.innerHTML = logadadissimo
    clearInterval(intervalo2)
    function carregarPagina(caminho) {
      const path = rotas[caminho] || rotas["404"]
      pagina.innerHTML = path

      if (caminho === "https://nicolasgomesnicolau-lab.github.io/Projetos-front-end-em-js-com-css-de-IA/projeto%201/assuntos") {
        buscarDadosSupa()
        BotaoRemoveTopicos()
        let SelecionaOpcao = true
        const assunto = document.querySelector('#addT')
        const finalizarNotes = `
        <section class="terminar-tarefa">
          <label>
            <button type="submit" id="fechar">pronto></button>
          </label>
        </section>
        `

        assunto.addEventListener('click', (e) => {
        e.preventDefault()
        const sectionPai = document.querySelector('.assuntos')
        const inputT = `
        <section class="topico">
          <form class="form-T" action="">
            <label class="nome-T">Digite seu topico</label>
            <input type="text" for="Top" id="Top" name="Top">
            <button type="submit" id="Top">adicionar</button>
          </form>
        </section>
        `
        if (SelecionaOpcao) {
          SelecionaOpcao = false
          let notesAtivo = false
          sectionPai.insertAdjacentHTML('beforeend', inputT);
          const excluirformT = document.querySelector('.topico')
          const formT = document.querySelector('.form-T')
          formT.addEventListener('submit', (e) => {
            e.preventDefault()
            const inputado = document.querySelector('#Top')
            const topic = inputado.value.replaceAll(' ', '_')
            const topicosFeito = document.querySelector('.topicos-feitos')
            novoDiv = topicosFeito.appendChild(document.createElement('div'))
            novoDiv.classList.add('topico')
            novoDiv.textContent = topic
            novoDiv.id = `topico-${topic}`
            const botoesNovaDiv = `
            <ul class="ativo tipos-notas id="nodes-${topic}">
              <li> <a class="notes" href="roteiro">roteiro de Estudos</a> </li>
              <li> <a class="notes" href="definicoes">definicoes</a> </li>
              <li> <a class="notes" href="anotacoes">anotacoes</a> </li>
            </ul>
            `
            novoDiv.insertAdjacentHTML('beforeend', botoesNovaDiv)
            const ativaBtn = document.querySelector('.tipos-notas')
            const idTopico = document.querySelector(`#topico-${topic}`)
            if (ativaBtn.classList.contains('ativo') && idTopico) {
            const todosBtn1 = document.querySelectorAll('.notes')
            formT.parentElement.classList.add('excluir')
            const sectionFormT = document.querySelector('.excluir')
            sectionFormT.remove()
            todosBtn1.forEach((item) => {
              const ClassItem = item.classList
              const filtroBtn = item.getAttribute('href')
              item.parentElement.id = `notes-${topic}`
              const idNote = document.querySelector(`#notes-${topic}`)
              item.addEventListener('click', (e) => {
                e.preventDefault()
                topicoAtualId = idNote.id
                const topicoAtual = item.closest('.topico')
                topof = topicoAtual.innerHTML
                if (!notesAtivo) {
                  if (filtroBtn === 'roteiro') {
                    notesAtivo = true
                    const opcaoSelct = item.getAttribute('href')
                    const anotacaoRoteiro = `
                    <section class="roteiro">
                      <h2>roteiro</h2>
                      <form class="roteiro-form" action="">
                        <label class="roteiro-label">
                          digite o roteiro
                          <input type="text" for="roteiro-ordem" id="roteiro-O" name="roteiro-r">
                        </label>
                        
                        <label class="roteiro-label">
                          digite links ou plataformas
                          <input type="text" for="roteiro-plataforma" id="roteiro-p" name="roteiro-p">
                        </label>
                        <button type="submit" id="roteiro-sub">adicionar ao assunto ${topic}</button>
                      </form>
                    </section>
                    `
                    topicoAtual.insertAdjacentHTML('beforeend', anotacaoRoteiro)
                    const form_roteiro = topicoAtual.querySelector('.roteiro-form')
                    const conteudo_roteiro = topicoAtual.querySelector('.roteiro')
                    const inputRoteiro_O = topicoAtual.querySelector('#roteiro-O')
                    const inputRoteiro_p = topicoAtual.querySelector('#roteiro-p')
                    form_roteiro.addEventListener('submit', (e) => {
                      e.preventDefault()
                      const divContent = document.querySelector('.topico')
                      const conteudo_Roteiro = `
                      <div class="conteudo-roteiro">
                      <p>${inputRoteiro_O.value}</p> -> <p>${inputRoteiro_p.value}</p>
                      </div>
                      `
                      topicoAtual.insertAdjacentHTML('beforeend', conteudo_Roteiro)})
                    topicoAtual.insertAdjacentHTML('beforeend', finalizarNotes)
                    const Pronto = topicoAtual.querySelector('.terminar-tarefa')
                    Pronto.addEventListener('click', (btn) => {
                      btn.preventDefault()
                      const formFim = topicoAtual.querySelector('.roteiro')
                      let tiraBTN = item.closest('.tipos-notas')
                      tiraBTN.remove()
                      formFim.remove()
                      Pronto.remove()
                      SelecionaOpcao = true
                      notesAtivo = false
                      adicionarLocal(topicoAtual)
                      dadosClientSupa(topicoAtual)
                      BotaoRemoveTopicos()
                    })
                  }
                  if (filtroBtn === 'definicoes') {
                    notesAtivo = true
                    const anotacaodefinicoes = `
                    <section class="definicoes">
                      <h2>definicoes</h2>
                      <form class="definicoes-form" action="">
                        <label class="definicoes-label">
                          digite o conceito
                          <input type="text" id="definicoes-k" name="definicoes-k">
                        </label> 
                        <label class="roteiro-label">
                          digite a definicao
                          <input type="text" id="definicoes-v" name="definicoes-v">
                        </label>
                        <button type="submit" id="definicoes-sub">adicionar ao assunto ${topicoAtual}</button>
                      </form>
                    </section>
                    `
                    topicoAtual.insertAdjacentHTML('beforeend', anotacaodefinicoes)
                    const definicoes_form = topicoAtual.querySelector('.definicoes-form')
                    const conteudo_definicoesS = topicoAtual.querySelector('.definicoes')
                    const inputdefK = topicoAtual.querySelector('#definicoes-k')
                    const inputdefV = topicoAtual.querySelector('#definicoes-v')
                    definicoes_form.addEventListener('submit', (e) => {
                      e.preventDefault()
                      const conteudoInnerdefinicoes = `
                      <div class="conteudo-definicoes">
                      <p>${inputdefK.value}</p> -> <p>${inputdefV.value}</p>
                      </div>
                      `
                      topicoAtual.insertAdjacentHTML('beforeend', conteudoInnerdefinicoes)
                      const formatual = e.currentTarget
                    })
                    topicoAtual.insertAdjacentHTML('beforeend', finalizarNotes)
                    const Pronto = topicoAtual.querySelector('.terminar-tarefa')
                    Pronto.addEventListener('click', (btn) => {
                      btn.preventDefault()
                      const formFim = topicoAtual.querySelector('.definicoes')
                      let tiraBTN = item.closest('.tipos-notas')
                      tiraBTN.remove()
                      formFim.remove()
                      Pronto.remove()
                      SelecionaOpcao = true
                      notesAtivo = false
                      adicionarLocal(topicoAtual)
                      dadosClientSupa(topicoAtual)
                      BotaoRemoveTopicos()
                  })}
                  if (filtroBtn === 'anotacoes') {
                    notesAtivo = true
                    const notes = `
                    <section class="anotacoes">
                      <h2>anotacoes</h2>
                      <form class="anotacoes-form" action="">
                        <label class="anotacoes-label">
                          digite links ou plataformas
                          <input type="text" id="anotacoes" name="anotacoes">
                        </label>
                        <button type="submit" id="anotacoes-sub">adicionar ao assunto ${topicoAtual}</button>
                      </form>
                    </section>
                    `
                    topicoAtual.insertAdjacentHTML('beforeend', notes)
                    const form_notes = topicoAtual.querySelector('.anotacoes-form')
                    const conteudo_notes = topicoAtual.querySelector('.anotacoes')
                    const inputNotes = topicoAtual.querySelector('#anotacoes')
                    form_notes.addEventListener('submit', (e) => {
                      e.preventDefault()
                      const divNotes = `
                      <div>
                      <p>${inputNotes.value}</p>
                      </div>
                      `
                      topicoAtual.insertAdjacentHTML('beforeend', divNotes)
                    })
                    topicoAtual.insertAdjacentHTML('beforeend', finalizarNotes)
                    const Pronto = topicoAtual.querySelector('.terminar-tarefa')
                    Pronto.addEventListener('click', (btn) => {
                      btn.preventDefault()
                      const formFim = topicoAtual.querySelector('.anotacoes')
                      let tiraBTN = item.closest('.tipos-notas')
                      tiraBTN.remove()
                      formFim.remove()
                      Pronto.remove()
                      SelecionaOpcao = true
                      notesAtivo = false
                      adicionarLocal(topicoAtual)
                      dadosClientSupa(topicoAtual)
                      BotaoRemoveTopicos()
                  })}}
                //roteiro de estudos.. checklist com links(ou plataformas)
                //definicoes:chaves e valores
                //anotacoes: espaço livre
              })
            })
            }})
          }})}

      if (caminho === "https://nicolasgomesnicolau-lab.github.io/Projetos-front-end-em-js-com-css-de-IA/projeto%201/pomodoro") {
        const botoesFoco = document.querySelectorAll('.ciclos a')
        let tempoDescanso = 0
        const botoesDescansoHtml = `
        <ul class="descanso">
          <li> <a href="opcao1D">5m Pausa</a> </li>
          <li> <a href="opcao2D">10m Pausa</a> </li>
          <li> <a href="opcao3D">20m Pausa</a> </li>
        </ul>
        `
        const telaPomodoroCiclo = `
        <section class="rodando-pomodoro">
          <h1>tempo rodando</h1>
          <h2>foco</h2>
          <div class="conometro">
            
          </div>
        </section>
        `
        const telaPomodoroDescanso = `
        <section class="rodando-pomodoro">
          <h1>tempo rodando</h1>
          <h2>Descanso</h2>
          <div class="conometro">
            
          </div>
        </section>
        `

        const pomodoroFim = `
        <section class="rodando-pomodoro">
          <h1>Fim do Ciclo</h1>
          <h2>Clique para Iniciar a Pausa</h2>
          <form class="fim-ciclo">
            <button type="submit" id="Descanso">Iniciar></button>
          </form>
        </section>
        `
        const sectionInteira = document.querySelector('.page-content')
        const UlAtual = document.querySelector('.ciclos')
        const sectionOpcoes = document.querySelector('.opcoes-pomodoro')
        botoesFoco.forEach((item) => {
          const hrefCiclo = item.getAttribute('href')
          item.addEventListener('click', (e) => {
            e.preventDefault()
            if (hrefCiclo) {
              const min = item.innerHTML
              const tempoCiclo = parseInt(min) * 60
              UlAtual.classList.add('selecionado')
              item.classList.add('ativo')
              sectionOpcoes.insertAdjacentHTML('beforeend', botoesDescansoHtml)
              const descansoOP = document.querySelectorAll('.descanso a')
              descansoOP.forEach((item) => {
                item.addEventListener('click', (e) => {
                  e.preventDefault()
                  const opSelect = item.getAttribute('href')
                  if (opSelect) {
                    const minDescanso = item.innerHTML
                    tempoDescanso = parseInt(minDescanso) * 60
                    sectionInteira.innerHTML = telaPomodoroCiclo
                    iniciarConometro(tempoCiclo)
                  }
                  const vigia = setInterval(() => {
                    if (alarme === true) {
                      clearInterval(vigia); // Para o vigia para não ficar rodando para sempre
                      sectionInteira.innerHTML = pomodoroFim
                      const submitFim = document.querySelector('.fim-ciclo')
                      submitFim.addEventListener('submit', (e) => {
                        e.preventDefault()
                        alarme = false
                        sectionInteira.innerHTML = telaPomodoroDescanso
                        setTimeout(() => {
                          alarme = false;
                          iniciarConometro(tempoDescanso);
                        }, 10);
                        if (window.location.pathname !== "/#/pomodoro") {
                          clearInterval(intervalo)
                          intervalo = null
                        }
                      })
                    }
                  }, 200);
                })
              })
            }
          })
        })
      }

      if (caminho === 'https://nicolasgomesnicolau-lab.github.io/Projetos-front-end-em-js-com-css-de-IA/projeto%201/prazos') {
        buscarAgenda()
        botaoRemoveAgenda()
        const TodasOpcao = document.querySelectorAll('.agenda-opcao')
        const opcaoEvento = document.querySelector('#evento')
        const opcaoPrazo = document.querySelector('#prazo')
        const sectionBotoes = document.querySelector('.marcar')
        const HTMLprazo = `
        <section class="marcar-prazo">
          <h2>Informe o prazo a pra terminar a tarefa</h2>
          <form class="opcao-select" action="">
            <label>
              Nome
              <input type="text" for="prazo" id="nomeP" name="nomeP">
            </label>
            <label class="inicio">
              De
              <ul class="marcar-dia inicio">
              Dia
                <li> <a class="data dia inicio" href="inicio1">1</a> </li>
                <li> <a class="data dia inicio" href="inicio2">2</a> </li>
                <li> <a class="data dia inicio" href="inicio3">3</a> </li>
                <li> <a class="data dia inicio" href="inicio4">4</a> </li>
                <li> <a class="data dia inicio" href="inicio5">5</a> </li>
                <li> <a class="data dia inicio" href="inicio6">6</a> </li>
                <li> <a class="data dia inicio" href="inicio7">7</a> </li>
                <li> <a class="data dia inicio" href="inicio8">8</a> </li>
                <li> <a class="data dia inicio" href="inicio9">9</a> </li>
                <li> <a class="data dia inicio" href="inicio10">10</a> </li>
                <li> <a class="data dia inicio" href="inicio11">11</a> </li>
                <li> <a class="data dia inicio" href="inicio12">12</a> </li>
                <li> <a class="data dia inicio" href="inicio13">13</a> </li>
                <li> <a class="data dia inicio" href="inicio14">14</a> </li>
                <li> <a class="data dia inicio" href="inicio15">15</a> </li>
                <li> <a class="data dia inicio" href="inicio16">16</a> </li>
                <li> <a class="data dia inicio" href="inicio17">17</a> </li>
                <li> <a class="data dia inicio" href="inicio18">18</a> </li>
                <li> <a class="data dia inicio" href="inicio19">19</a> </li>
                <li> <a class="data dia inicio" href="inicio20">20</a> </li>
                <li> <a class="data dia inicio" href="inicio21">21</a> </li>
                <li> <a class="data dia inicio" href="inicio22">22</a> </li>
                <li> <a class="data dia inicio" href="inicio23">23</a> </li>
                <li> <a class="data dia inicio" href="inicio24">24</a> </li>
                <li> <a class="data dia inicio" href="inicio25">25</a> </li>
                <li> <a class="data dia inicio" href="inicio26">26</a> </li>
                <li> <a class="data dia inicio" href="inicio27">27</a> </li>
                <li> <a class="data dia inicio" href="inicio28">28</a> </li>
                <li> <a class="data dia inicio" href="inicio29">29</a> </li>
                <li> <a class="data dia inicio" href="inicio30">30</a> </li>
                <li> <a class="data dia inicio" href="inicio31">31</a> </li>
              </ul>
              <ul class="marcar-mes inicio">
              Mes
                <li> <a class="data mes inicio" href="inicio1">1</a> </li>
                <li> <a class="data mes inicio" href="inicio2">2</a> </li>
                <li> <a class="data mes inicio" href="inicio3">3</a> </li>
                <li> <a class="data mes inicio" href="inicio4">4</a> </li>
                <li> <a class="data mes inicio" href="inicio5">5</a> </li>
                <li> <a class="data mes inicio" href="inicio6">6</a> </li>
                <li> <a class="data mes inicio" href="inicio7">7</a> </li>
                <li> <a class="data mes inicio" href="inicio8">8</a> </li>
                <li> <a class="data mes inicio" href="inicio9">9</a> </li>
                <li> <a class="data mes inicio" href="inicio10">10</a> </li>
                <li> <a class="data mes inicio" href="inicio11">11</a> </li>
                <li> <a class="data mes inicio" href="inicio12">12</a> </li>
              </ul>
            </label>
            <label class="fim">
              até
              <ul class="marcar-dia fim">
              Dia
                <li> <a class="data dia fim" href="Fim1">1</a> </li>
                <li> <a class="data dia fim" href="Fim2">2</a> </li>
                <li> <a class="data dia fim" href="Fim3">3</a> </li>
                <li> <a class="data dia fim" href="Fim4">4</a> </li>
                <li> <a class="data dia fim" href="Fim5">5</a> </li>
                <li> <a class="data dia fim" href="Fim6">6</a> </li>
                <li> <a class="data dia fim" href="Fim7">7</a> </li>
                <li> <a class="data dia fim" href="Fim8">8</a> </li>
                <li> <a class="data dia fim" href="Fim9">9</a> </li>
                <li> <a class="data dia fim" href="Fim10">10</a> </li>
                <li> <a class="data dia fim" href="Fim11">11</a> </li>
                <li> <a class="data dia fim" href="Fim12">12</a> </li>
                <li> <a class="data dia fim" href="Fim13">13</a> </li>
                <li> <a class="data dia fim" href="Fim14">14</a> </li>
                <li> <a class="data dia fim" href="Fim15">15</a> </li>
                <li> <a class="data dia fim" href="Fim16">16</a> </li>
                <li> <a class="data dia fim" href="Fim17">17</a> </li>
                <li> <a class="data dia fim" href="Fim18">18</a> </li>
                <li> <a class="data dia fim" href="Fim19">19</a> </li>
                <li> <a class="data dia fim" href="Fim20">20</a> </li>
                <li> <a class="data dia fim" href="Fim21">21</a> </li>
                <li> <a class="data dia fim" href="Fim22">22</a> </li>
                <li> <a class="data dia fim" href="Fim23">23</a> </li>
                <li> <a class="data dia fim" href="Fim24">24</a> </li>
                <li> <a class="data dia fim" href="Fim25">25</a> </li>
                <li> <a class="data dia fim" href="Fim26">26</a> </li>
                <li> <a class="data dia fim" href="Fim27">27</a> </li>
                <li> <a class="data dia fim" href="Fim28">28</a> </li>
                <li> <a class="data dia fim" href="Fim29">29</a> </li>
                <li> <a class="data dia fim" href="Fim30">30</a> </li>
                <li> <a class="data dia fim" href="Fim31">31</a> </li>
              </ul>
              <ul class="marcar-mes fim">
              Mes
                <li> <a class="data mes fim" href="Fim1">1</a> </li>
                <li> <a class="data mes fim" href="Fim2">2</a> </li>
                <li> <a class="data mes fim" href="Fim3">3</a> </li>
                <li> <a class="data mes fim" href="Fim4">4</a> </li>
                <li> <a class="data mes fim" href="Fim5">5</a> </li>
                <li> <a class="data mes fim" href="Fim6">6</a> </li>
                <li> <a class="data mes fim" href="Fim7">7</a> </li>
                <li> <a class="data mes fim" href="Fim8">8</a> </li>
                <li> <a class="data mes fim" href="Fim9">9</a> </li>
                <li> <a class="data mes fim" href="Fim10">10</a> </li>
                <li> <a class="data mes fim" href="Fim11">11</a> </li>
                <li> <a class="data mes fim" href="Fim12">12</a> </li>
              </ul>
            </label>
            <button type="submit" id="marcar">marcar</button>
          </form>
        </section>
        `
        let terminou = false
        TodasOpcao.forEach((item) => {
          const btnItem = item.getAttribute('href')
          item.addEventListener('click', (e) => {
            e.preventDefault()
            if (!terminou) {
              if (item.id === 'prazo') {
                terminou = true
                let diaIn = false
                let mesIn = false
                let diaFim = false
                let mesFim = false
                let ParaAlertaIn = false
                let ParaAlertaFim = false
                let clickatual = 0
                let clickatualFeito = 0
                let diasMarcados = []
                sectionBotoes.insertAdjacentHTML('beforeend', HTMLprazo)
                const formPrazo = document.querySelector('.opcao-select')
                const sectionFormsPrazo = document.querySelector('.marcar-prazo')
                const botoesP = document.querySelectorAll('.data')
                botoesP.forEach((item) => {
                  item.addEventListener('click', (e) => {
                    e.preventDefault()
                    const alvo = e.currentTarget
                    const [primeiraClasse, segundaClasse, terceiraClasse] = [...alvo.classList]
                    if (clickatual !== segundaClasse && clickatualFeito < 2) {
                      alvo.classList.add('ativo') 
                      clickatual = segundaClasse
                      clickatualFeito += 1
                    } 
                    else {clickatualFeito = 1, botoesP.forEach((item) => {item.classList.remove('ativo')}), alvo.classList.add('ativo')}

                    if (alvo.classList.contains('dia') && alvo.classList.contains('inicio')) {diasMarcados[0] = alvo.textContent, diaIn = true}
                    if (alvo.classList.contains('mes') && alvo.classList.contains('inicio')) {diasMarcados[1] = alvo.textContent, mesIn = true}
                    if (alvo.classList.contains('dia') && alvo.classList.contains('fim')) {diasMarcados[2] = alvo.textContent, diaFim = true}
                    if (alvo.classList.contains('mes') && alvo.classList.contains('fim')) {diasMarcados[3] = alvo.textContent, mesFim = true}
                    if (diaIn && mesIn && !ParaAlertaIn) {
                      let intervalAlert = setInterval(() => {
                        alert('data de inicio marcada'), clearInterval(intervalAlert)
                        const sectionIn = document.querySelectorAll('.inicio')
                        sectionIn.forEach((item) => {item.remove()})
                        ParaAlertaIn = true
                        clickatualFeito = 0
                      }, 500)
                    }
                    if (diaFim && mesFim && !ParaAlertaFim) {
                      intervalAlert = setInterval(() => {
                        alert('data de fim marcada'), clearInterval(intervalAlert)
                        const sectionIn = document.querySelectorAll('.fim')
                        sectionIn.forEach((item) => {item.remove()})
                        ParaAlertaFim = true
                        clickatualFeito = 0
                      }, 500)
                    }
                  })
                })
                formPrazo.addEventListener('submit', (e) => {
                  e.preventDefault()
                  const inputNomeP = document.querySelector('#nomeP').value
                  if (diaIn && mesIn && diaFim && mesFim) {
                  const sectionform = document.querySelector('.marcar-prazo')
                  if (inputNomeP.length > 0) {
                    sectionform.remove()
                    const sectionFeitos = document.querySelector('.agendas-feita')
                    const divPrazo = `
                    <div class="agenda-${inputNomeP.replaceAll(' ', '_')}">
                      <h2>${inputNomeP}</h2>
                      <section class="prazo-feito Agenda-Prazo">
                        <div>data inicial: dia ${diasMarcados[0]} do mes ${diasMarcados[1]}</div>
                        <div>resolver até dia ${diasMarcados[2]} do mes ${diasMarcados[3]}</div>
                      </section>
                    </div>
                    `
                    sectionFeitos.insertAdjacentHTML('beforeend', divPrazo)
                    terminou = false
                    let SectionAgenda = document.querySelector(`.agenda-${inputNomeP.replaceAll(' ', '_')}`)
                    addAgendaSupa(SectionAgenda)
                    botaoRemoveAgenda()
                    } else {
                      const htmlForm = document.querySelector('.opcao-select')
                      htmlForm.insertAdjacentHTML('beforeend', '<div class="aviso-nao-marcado">voce precisa colocar um titulo</div>')
                    }} else {
                    const htmlForm = document.querySelector('.opcao-select')
                    htmlForm.insertAdjacentHTML('beforeend', '<div class="aviso-nao-marcado">vc ainda n escolheu as opcoes</div>')
                    const divAlerta = document.querySelector('.aviso-nao-marcado')
                    alerta = setInterval(() => {divAlerta.remove(), clearInterval(alerta)}, 2000)}
                })
              }
              if (item.id === 'evento') {
                terminou = true
                const HTMLagenda = `
                <section class="marcar-Agenda">
                  <h2>Informe a agenda do evento</h2>
                  <form class="opcao-select" action="">
                    <label>
                      Nome
                      <input type="text" for="agenda" id="nomeA" name="nomeA">
                    </label>
                    <label class="dia">
                      <ul class="marcar-dia agenda">
                      Dia
                        <li> <a class="data dia inicio" href="inicio1">1</a> </li>
                        <li> <a class="data dia inicio" href="inicio2">2</a> </li>
                        <li> <a class="data dia inicio" href="inicio3">3</a> </li>
                        <li> <a class="data dia inicio" href="inicio4">4</a> </li>
                        <li> <a class="data dia inicio" href="inicio5">5</a> </li>
                        <li> <a class="data dia inicio" href="inicio6">6</a> </li>
                        <li> <a class="data dia inicio" href="inicio7">7</a> </li>
                        <li> <a class="data dia inicio" href="inicio8">8</a> </li>
                        <li> <a class="data dia inicio" href="inicio9">9</a> </li>
                        <li> <a class="data dia inicio" href="inicio10">10</a> </li>
                        <li> <a class="data dia inicio" href="inicio11">11</a> </li>
                        <li> <a class="data dia inicio" href="inicio12">12</a> </li>
                        <li> <a class="data dia inicio" href="inicio13">13</a> </li>
                        <li> <a class="data dia inicio" href="inicio14">14</a> </li>
                        <li> <a class="data dia inicio" href="inicio15">15</a> </li>
                        <li> <a class="data dia inicio" href="inicio16">16</a> </li>
                        <li> <a class="data dia inicio" href="inicio17">17</a> </li>
                        <li> <a class="data dia inicio" href="inicio18">18</a> </li>
                        <li> <a class="data dia inicio" href="inicio19">19</a> </li>
                        <li> <a class="data dia inicio" href="inicio20">20</a> </li>
                        <li> <a class="data dia inicio" href="inicio21">21</a> </li>
                        <li> <a class="data dia inicio" href="inicio22">22</a> </li>
                        <li> <a class="data dia inicio" href="inicio23">23</a> </li>
                        <li> <a class="data dia inicio" href="inicio24">24</a> </li>
                        <li> <a class="data dia inicio" href="inicio25">25</a> </li>
                        <li> <a class="data dia inicio" href="inicio26">26</a> </li>
                        <li> <a class="data dia inicio" href="inicio27">27</a> </li>
                        <li> <a class="data dia inicio" href="inicio28">28</a> </li>
                        <li> <a class="data dia inicio" href="inicio29">29</a> </li>
                        <li> <a class="data dia inicio" href="inicio30">30</a> </li>
                        <li> <a class="data dia inicio" href="inicio31">31</a> </li>
                      </ul>
                      <ul class="marcar-mes agenda">
                      Mes
                        <li> <a class="data mes inicio" href="inicio1">1</a> </li>
                        <li> <a class="data mes inicio" href="inicio2">2</a> </li>
                        <li> <a class="data mes inicio" href="inicio3">3</a> </li>
                        <li> <a class="data mes inicio" href="inicio4">4</a> </li>
                        <li> <a class="data mes inicio" href="inicio5">5</a> </li>
                        <li> <a class="data mes inicio" href="inicio6">6</a> </li>
                        <li> <a class="data mes inicio" href="inicio7">7</a> </li>
                        <li> <a class="data mes inicio" href="inicio8">8</a> </li>
                        <li> <a class="data mes inicio" href="inicio9">9</a> </li>
                        <li> <a class="data mes inicio" href="inicio10">10</a> </li>
                        <li> <a class="data mes inicio" href="inicio11">11</a> </li>
                        <li> <a class="data mes inicio" href="inicio12">12</a> </li>
                      </ul>
                    </label>
                    <button type="submit" id="marcarA">marcar</button>
                  </form>
                </section>
                `
                let clickatualAg = 0
                let clicksatuaFeito = 0
                let DiaAgendaF = false
                let MesAgendaF = false
                let AgendaValor = []
                sectionBotoes.insertAdjacentHTML('beforeend', HTMLagenda)
                const botoesAgnda = document.querySelectorAll('.data')
                const htmlFormA = document.querySelector('.opcao-select')
                botoesAgnda.forEach((item) => {
                  item.addEventListener('click', (a) => {
                    a.preventDefault()
                    const aTarget = a.currentTarget
                    const [primeiraClasseA, segundaClasseA, terceiraClasseA] = [...aTarget.classList]
                    if (clickatualAg !== segundaClasseA && clicksatuaFeito < 2) {
                      aTarget.classList.add('ativo')
                      clickatualAg = segundaClasseA
                      clicksatuaFeito += 1
                    }
                    else {clicksatuaFeito = 1, botoesAgnda.forEach((item) => {item.classList.remove('ativo')}), aTarget.classList.add('ativo')}
                    if (aTarget.classList.contains('dia')) {DiaAgendaF = true, AgendaValor[0] = aTarget.textContent}
                    if (aTarget.classList.contains('mes')) {MesAgendaF = true, AgendaValor[1] = aTarget.textContent}
                  })
                })
                htmlFormA.addEventListener('submit', (e) => {
                  e.preventDefault()
                  const NomeAgenda = document.querySelector('#nomeA').value
                  const sectionAgenda = document.querySelector('.marcar-Agenda')
                  const sectionFeitos = document.querySelector('.agendas-feita')
                  if (DiaAgendaF && MesAgendaF && NomeAgenda.length > 0) {
                    const DiaAgenda = AgendaValor[0]
                    const MesAgenda = AgendaValor[1]
                    const divAgenda = `
                      <div class="agenda-${NomeAgenda.replaceAll(' ', '_')}">
                        <h2>${NomeAgenda}</h2>
                        <section class="Agenda-feito">
                          <div>data do ${NomeAgenda} é dia: ${DiaAgenda} do mes ${MesAgenda}</div>
                        </section>
                      </div>
                      `
                    sectionAgenda.remove()
                    sectionFeitos.insertAdjacentHTML('beforeend', divAgenda)
                    terminou = false
                    let SectionAgenda = document.querySelector(`.agenda-${NomeAgenda.replaceAll(' ', '_')}`)
                    addAgendaSupa(SectionAgenda)
                    botaoRemoveAgenda()
                  } else {sectionAgenda.insertAdjacentHTML('beforeend', '<div class="aviso-nao-marcado">vc ainda n marcou todas opcoes</div>')}
                })
              }}
          })
        })
      }
    }

    function verTodosTopicos() {
      const todasDivs = document.querySelectorAll('.topicos-feitos')
      todasDivs.forEach((item) => {
        console.log(item.children)
      })
    }

    //location é o caminho onde ESTA indo, ai vc muda praquela path
    function navegarPara(caminho) {
      if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
        alarme = false;
      }

      window.history.pushState({}, "", caminho)
      carregarPagina(caminho)
    }

    const botao = document.querySelectorAll('.nav-btn')

    botao.forEach((item) => {
      item.addEventListener('click', (valor) => {
        valor.preventDefault()
        const caminho = valor.currentTarget.getAttribute('data-path')
        navegarPara(caminho)
      })
    })
    window.addEventListener('popstate', () => {
      carregarPagina(window.location.pathname)
    })} else {
      botao = document.querySelectorAll('.nav-btn')
      botao.forEach((item) => {
      item.addEventListener('click', (valor) => {
        valor.preventDefault()
        if (aviso && !logado) {
          aviso = false
          item.insertAdjacentHTML('beforeend', `<div class="aviso-nao-login">voce não esta logado, para prosseguir conclua o login</div>`)
          const avisoAlerta = document.querySelector('.aviso-nao-login')
          setTimeout(() => {
            avisoAlerta.remove()
            aviso = true
          }, 2000)
        }
      })})
    }}, 500)