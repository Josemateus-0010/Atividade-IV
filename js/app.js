// js/app.js
const app = document.getElementById('app');

// Função para carregar templates dinamicamente
async function navigate(route) {
  let page;

  switch (route) {
    case '':
    case '#/':
    case '#/home':
      page = await import('../templates/home.js');
      break;
    case '#/projetos':
      page = await import('../templates/projetos.js');
      break;
    case '#/cadastro':
      page = await import('../templates/cadastro.js');
      break;
    case '#/equipe':
      page = await import('../templates/equipe.js');
      break;
    case '#/prestacao':
      page = await import('../templates/prestacao.js');
      break;
    default:
      app.innerHTML = '<h2>Página não encontrada</h2>';
      return;
  }

  // Insere o HTML da página
  app.innerHTML = page.default();

  // ✅ Ativa a validação somente se estiver na rota de cadastro
  if (route === '#/cadastro') {
    ativarValidacaoCadastro();
  }
}

// Detectar mudança na URL (hash)
window.addEventListener('hashchange', () => navigate(location.hash));

// Carregar página inicial
navigate(location.hash);

// =====================================================
// Função de validação do formulário de cadastro
// =====================================================
function ativarValidacaoCadastro() {
  const form = document.getElementById('formCadastro');
  if (!form) return; // evita erro caso o form não exista

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Captura os campos
    const nome = document.getElementById('name');
    const email = document.getElementById('e-mail');
    const cpf = document.getElementById('CPF');
    const telefone = document.getElementById('Numero');
    const cep = document.getElementById('cep');

    let mensagem = '';
    let valido = true;

    // Remove erros anteriores
    [nome, email, cpf, telefone, cep].forEach(campo => campo.style.border = '');

    // ================================
    // Validação dos campos
    // ================================
    if (nome.value.trim() === '') {
      mensagem += '⚠️ O nome é obrigatório.\n';
      nome.style.border = '2px solid red';
      valido = false;
    }

    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!padraoEmail.test(email.value)) {
      mensagem += '⚠️ E-mail inválido.\n';
      email.style.border = '2px solid red';
      valido = false;
    }

    const padraoCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!padraoCPF.test(cpf.value)) {
      mensagem += '⚠️ CPF deve estar no formato 000.000.000-00.\n';
      cpf.style.border = '2px solid red';
      valido = false;
    }

    const padraoTelefone = /^\(\d{2}\)\s?\d\s?\d{4}-\d{4}$/;
    if (!padraoTelefone.test(telefone.value)) {
      mensagem += '⚠️ Telefone deve estar no formato (00) 0 0000-0000.\n';
      telefone.style.border = '2px solid red';
      valido = false;
    }

    const padraoCEP = /^\d{5}-\d{3}$/;
    if (!padraoCEP.test(cep.value)) {
      mensagem += '⚠️ CEP deve estar no formato 00000-000.\n';
      cep.style.border = '2px solid red';
      valido = false;
    }

    // ================================
    // Resultado final
    // ================================
    if (!valido) {
      alert(mensagem);
    } else {
      alert('✅ Cadastro realizado com sucesso!');
      form.reset();
    }
  });
}
