export default function cadastro() {
  return `
    <section class="pagina">
      <!-- Título principal da página -->
      <h1>Cadastro</h1>
  
      <!-- Seção de formulário de cadastro -->
      <section>
        <h2>Faça seu cadastro!</h2>
        <form id="formCadastro">
          <fieldset>
            <legend>Informações para cadastro</legend>
  
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Nome completo"><br>
  
            <label for="e-mail">E-mail:</label>
            <input type="text" id="e-mail" name="e-mail" placeholder="E-mail">
  
            <label for="CPF">CPF:</label>
            <input type="text" id="CPF" name="CPF" placeholder="000.000.000-00"><br>
  
            <label for="Numero">Telefone:</label>
            <input type="text" id="Numero" name="Telefone" placeholder="(00) 0 0000-0000">
  
            <label for="date">Data de nascimento:</label>
            <input type="date" id="date" name="data"><br>
  
            <label for="endereço">Endereço:</label>
            <input type="text" id="endereço" name="endereço" placeholder="Endereço">  
  
            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="CEP" placeholder="00000-000"><br> 
  
            <label for="cidade">Cidade/Estado:</label>
            <input type="text" id="cidade" name="cidade" placeholder="Cidade/UF">
  
            <button>Enviar cadastro</button> 
          </fieldset>         
        </form>
      </section>
  
      <section style="padding: 2rem;">
        <h2>Geração e emissão automatizada de CERTIFICADO</h2>
        <ul>
          <li>Certificados podem ser gerados automaticamente...</li>
        </ul>
      </section>
    </section>
  `;
}