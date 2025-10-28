export default function prestacao() {
    return `
<h1>Prestação de contas</h1>

<!-- Seção de receitas -->
<section class="tabela">
    <h2>Entradas (receitas)</h2>

    <!-- Tabela com as receitas da ONG -->
    <table border="1">
        <thead>
            <tr>

                 <!-- Cabeçalhos das colunas da tabela -->
                <th><strong>Fonte de receita</strong></th>
                <th><strong>Valor (R$)</strong></th>
            </tr>
        </thead>
        <tbody>

             <!-- Linhas com dados de receitas -->
            <tr>
                <td>Doações individuais</td>
                <td>13.500,00</td>
            </tr>
            <tr>
                <td>Parcerias com empresas</td>
                <td>3.000,00</td>
            </tr>
            <tr>
                <td>Feiras e eventos</td>
                <td>1.250,00</td>
            </tr>
            <tr>
                <td>Venda de produtos (camisetas, rifas)</td>
                <td>2.500,00</td>
            </tr>
            <tr>
                <td>Apoio institucional (editais, subvenções)</td>
                <td>4.000,00</td>
            </tr>

            <!-- Linha de totalização -->
            <tr>
                <td><strong>Total recebido</strong></td>
                <td><strong>R$ 24.250,00</strong></td>
            </tr>
        </tbody>
    </table>
</section>

 <!-- Seção de despesas -->
<section class="tabela2">
    <h2>Saídas (Despesas)</h2>

    <!-- Tabela com as despesas da ONG -->
    <table border="1" class="op">
        <thead>
            <tr>

                <!-- Cabeçalhos das colunas da tabela -->
                <th class="op1"><strong>Tipo de despesa</strong></th>
                <th class="op2"><strong>Valor (R$)</strong></th>
            </tr>
        </thead>
        <tbody>
            <!-- Linhas com dados de despesas -->
            <tr>
                <td>Atendimento veterinário</td>
                <td>10.700,00</td>
            </tr>
            <tr>
                <td>Compra de ração e medicamentos</td>
                <td>4.300,00</td>
            </tr>
            <tr>
                <td>Castrações</td>
                <td>3.500,00</td>
            </tr>
            <tr>
                <td>Transporte e logística</td>
                <td>1.100,00</td>
            </tr>
            <tr>
                <td>Comunicação e redes sociais</td>
                <td>800,00</td>
            </tr>
            <tr>
                <td>Material gráfico e educativo</td>
                <td>850,00</td>
            </tr>
            <tr>
                <td>Custos administrativos</td>
                <td>1.300,00</td>
            </tr>

            <!-- Linha de totalização -->
            <tr>
                <td><strong>Total gasto</strong></td>
                <td>R$ 22.550,00</td>
            </tr>
        </tbody>
    </table>

    <!-- Saldo final do período -->
    <p><strong>Saldo do período:</strong>R$ 1.700,00 (reinvestido nas ações contínuas da ONG)</p>
</section>

<!-- Seção com as atividades realizadas pela ONG -->
<section class="tabela3">
    <h2>Atividades Realizadas</h2>

    <!-- Tabela com ações e seus resultados -->
    <table border="1">
        <thead>
            <tr>
                <th><strong>Ação realizada</strong></th>
                <th><strong>Quantidade / Resultados</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Animais resgatados</td>
                <td>1.300</td>
            </tr>
            <tr>
                <td>Animais encaminhados para adoção</td>
                <td>900</td>
            </tr>
            <tr>
                <td>Castrações realizadas</td>
                <td>400</td>
            </tr>
            <tr>
                <td>Ações educativas em escolas</td>
                <td>5 escolas atendidas</td>
            </tr>
            <tr>
                <td>Campanhas nas redes sociais</td>
                <td>8 campanhas de conscientização</td>
            </tr>
            <tr>
                <td>Eventos e feiras de adoção</td>
                <td>6 eventos realizados</td>
            </tr>
        </tbody>
    </table>
</section>
`;
}