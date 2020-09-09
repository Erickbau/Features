const mongoose  = require('../database')

const SchemaFinancialStatements = new mongoose.Schema({

})

// DFs Consolidadas

const BalancoPatrimonialAtivo = new mongoose.Schema({
    Ativo_Total:[{
        id:{
            type: String,
            default: '1'
        },
        value: Number
    }], 
    Ativo_circulante:[{
        id:{
            type: String,
            default: '1.01'
        },
        value: Number
    }], 
    Caixa_e_Equivalentes_de_Caixa:[{
        id:{
            type: String,
            default: '1.01.01'
        },
        value: Number
    }], 
    Aplicacoes_Financeiras :[{
        id:{
            type: String,
            default: '1.01.02'
        },
        value: Number
    }],
    Aplicacoes_Financeiras_Avaliadas_a_Valor_Justo_atraves_do_Resultado:[{
        id:{
            type: String,
            default: '1.01.02.01'
        },
        value: Number
    }], 
    Titulos_para_Negociacao:[{
        id:{
            type: String,
            default: '1.01.02.01.01'
        },
        value: Number
    }],
    Titulos_Designados_a_Valor_Justo:[{
        id:{
            type: String,
            default: '1.01.02.01.02'
        },
        value: Number
    }],
    Aplicacoes_Financeiras_Avaliadas_a_Valor_Justo_atraves_de_Outros_Resultados_Abrangentes:[{
        id:{
            type: String,
            default: '1.01.02.02'
        },
        value: Number
    }], 
    Aplicacoes_Financeiras_Avaliadas_ao_Custo_Amortizado:[{
        id:{
            type: String,
            default: '1.01.02.03'
        },
        value: Number
    }], 
    Contas_a_Receber:[{
        id:{
            type: String,
            default: '1.01.03'
        },
        value: Number
    }], 	
    Clientes:[{
        id:{
            type: String,
            default: '1.01.03.01'
        },
        value: Number
    }],
    Outras_Contas_a_Receber:[{
        id:{
            type: String,
            default: '1.01.03.02'
        },
        value: Number
    }],
    Contas_a_Receber_de_Partes_Relacionadas:[{
        id:{
            type: String,
            default: '1.01.03.02.01'
        },
        value: Number
    }], 	
    Estoques:[{
        id:{
            type: String,
            default: '1.01.04'
        },
        value: Number
    }],
    Produto_Acabado:[{
        id:{
            type: String,
            default: '1.01.04.01'
        },
        value: Number
    }], 	
    Produto_em_Elaboracao:[{
        id:{
            type: String,
            default: '1.01.04.02'
        },
        value: Number
    }], 	
    Materias_Primas:[{
        id:{
            type: String,
            default: '1.01.04.03'
        },
        value: Number
    }], 
    Materiais_de_Producao:[{
        id:{
            type: String,
            default: '1.01.04.04'
        },
        value: Number
    }], 		
    Almoxarifado_e_Outros:[{
        id:{
            type: String,
            default: '1.01.04.05'
        },
        value: Number
    }], 
    Provisão_para_Perdas:[{
        id:{
            type: String,
            default: '1.01.04.06'
        },
        value: Number
    }],	
    Ativos_Biologicos:[{
        id:{
            type: String,
            default: '1.01.05'
        },
        value: Number
    }], 	
    Tributos_a_Recuperar:[{
        id:{
            type: String,
            default: '1.01.06'
        },
        value: Number
    }], 	
    Tributos_Correntes_a_Recuperar:[{
        id:{
            type: String,
            default: '1.01.06.01'
        },
        value: Number
    }], 	    
    Imposto_de_renda_e_Contribuicao_Social_a_Recuperar:[{
        id:{
            type: String,
            default: '1.01.06.01.01'
        },
        value: Number
    }], 	
    Impostos_Indiretos_a_Recuperar:[{
        id:{
            type: String,
            default: '1.01.06.01.02'
        },
        value: Number
    }], 	
    Despesas_Antecipadas:[{
        id:{
            type: String,
            default: '1.01.07'
        },
        value: Number
    }], 	
    Despesas_Antecipadas_Marketing:[{
        id:{
            type: String,
            default: '1.01.07.01'
        },
        value: Number
    }], 	
    Outras_Despesas_Antecipadas:[{
        id:{
            type: String,
            default: '1.01.07.02'
        },
        value: Number
    }], 
    Outros_Ativos_Circulantes:[{
        id:{
            type: String,
            default: '1.01.08'
        },
        value: Number
    }], 	
    Ativos_Nao_Correntes_a_Venda:[{
        id:{
            type: String,
            default: '1.01.08.01'
        },
        value: Number
    }], 	
    Ativos_de_Operacoes_Descontinuadas:[{
        id:{
            type: String,
            default: '1.01.08.02'
        },
        value: Number
    }], 	
    Outros:[{
        id:{
            type: String,
            default: '1.01.08.03'
        },
        value: Number
    }], 
    Instrumentos_Financeiros_Derivativos:[{
        id:{
            type: String,
            default: '1.01.08.03.01'
        },
        value: Number
    }],
    Juros_a_Receber:[{
        id:{
            type: String,
            default: '1.01.08.03.02'
        },
        value: Number
    }], 	
    Outros_Ativos:[{
        id:{
            type: String,
            default: '1.01.08.03.03'
        },
        value: Number
    }],	
    Dividendos_a_Receber:[{
        id:{
            type: String,
            default: '1.01.08.03.04'
        },
        value: Number
    }], 	
    Ativo_Não_Circulante:[{
        id:{
            type: String,
            default: '1.02'
        },
        value: Number
    }],	
    Ativo_Realizavel_a_Longo_Prazo:[{
        id:{
            type: String,
            default: '1.02.01'
        },
        value: Number
    }], 	
    Aplicacoes_Financeiras_Avaliadas_a_Valor_Justo_atraves_do_Resultado:[{
        id:{
            type: String,
            default: '1.02.01.01'
        },
        value: Number
    }], 
    Titulos_Designados_a_Valor_Justo:[{
        id:{
            type: String,
            default: '1.02.01.01.01'
        },
        value: Number
    }], 		
    Aplicacoes_Financeiras_Avaliadas_a_Valor_Justo_atraves_de_Outros_Resultados_Abrangentes:[{
        id:{
            type: String,
            default: '1.02.01.02'
        },
        value: Number
    }], 	
    Aplicacoes_Financeiras_Avaliadas_ao_Custo_Amortizado:[{
        id:{
            type: String,
            default: '1.02.01.03'
        },
        value: Number
    }], 	
    Titulos_Mantidos_ate_o_Vencimento:[{
        id:{
            type: String,
            default: '1.02.01.03.01'
        },
        value: Number
    }], 
    Contas_a_Receber:[{
        id:{
            type: String,
            default: '1.02.01.04'
        },
        value: Number
    }], 
    Clientes:[{
        id:{
            type: String,
            default: '1.02.01.04.01'
        },
        value: Number
    }], 	
    Outras_Contas_a_Receber:[{
        id:{
            type: String,
            default: '1.02.01.04.02'
        },
        value: Number
    }],
    Estoques:[{
        id:{
            type: String,
            default: '1.02.01.05'
        },
        value: Number
    }], 
    Ativos_Biologicos:[{
        id:{
            type: String,
            default: '1.02.01.06'
        },
        value: Number
    }], 	
    Tributos_Diferidos:[{
        id:{
            type: String,
            default: '1.02.01.07'
        },
        value: Number
    }], 
    Imposto_de_Renda_e_Contribuicao_Social_Diferidos:[{
        id:{
            type: String,
            default: '1.02.01.07.01'
        },
        value: Number
    }], 	
    Despesas_Antecipadas:[{
        id:{
            type: String,
            default: '1.02.01.08'
        },
        value: Number
    }],
    Creditos_com_Partes_Relacionadas:[{
        id:{
            type: String,
            default: '1.02.01.09'
        },
        value: Number
    }], 
    Creditos_com_Coligadas:[{
        id:{
            type: String,
            default: '1.02.01.09.01'
        },
        value: Number
    }], 
    Creditos_com_Controladores:[{
        id:{
            type: String,
            default: '1.02.01.09.03'
        },
        value: Number
    }],
    Creditos_com_Outras_Partes_Relacionadas:[{
        id:{
            type: String,
            default: '1.02.01.09.04'
        },
        value: Number
    }],
    Outros_Ativos_Nao_Circulantes:[{
        id:{
            type: String,
            default: '1.02.01.10 '
        },
        value: Number
    }],	
    Ativos_Nao_Correntes_a_Venda:[{
        id:{
            type: String,
            default: '1.02.01.10.01'
        },
        value: Number
    }], 	
    Ativos_de_Operacoes_Descontinuadas:[{
        id:{
            type: String,
            default: '1.02.01.10.02'
        },
        value: Number
    }],
    Depositos_Judiciais_Compulsorios_e_de_Incentivos:[{
        id:{
            type: String,
            default: '1.02.01.10.03'
        },
        value: Number
    }],
    Imposto_de_Renda_e_Contribuicao_Social_a_Recuperar:[{
        id:{
            type: String,
            default: '1.02.01.10.04'
        },
        value: Number
    }],
    Demais_impostos_a_recuperar: [{
        id:{
            type: String,
            default: '1.02.01.10.05'
        },
        value: Number
    }],
    Superavit_de_Ativos: [{
        id:{
            type: String,
            default: '1.02.01.10.06'
        },
        value: Number
    }],  
    Instrumentos_Financeiros_Derivativos: [{
        id:{
            type: String,
            default: '1.02.01.10.08'
        },
        value: Number
    }],
    Titulos_a_Receber: [{
        id:{
            type: String,
            default: '1.02.01.10.09'
        },
        value: Number
    }],
    Outros: [{
        id:{
            type: String,
            default: '1.02.01.10.10'
        },
        value: Number
    }],
    Investimentos: [{
        id:{
            type: String,
            default: '1.02.02'
        },
        value: Number
    }],
    Participações_Societarias: [{
        id:{
            type: String,
            default: '1.02.02.01'
        },
        value: Number
    }],
    Participações_em_Coligadas: [{
        id:{
            type: String,
            default: '1.02.02.01.01'
        },
        value: Number
    }],
    Participações_em_Controladas_em_Conjunto: [{
        id:{
            type: String,
            default: '1.02.02.01.04'
        },
        value: Number
    }],
    Outros_Investimentos: [{
        id:{
            type: String,
            default: '1.02.02.01.05 '
        },
        value: Number
    }],
    Propriedades_para_Investimento: [{
        id:{
            type: String,
            default: '1.02.02.02'
        },
        value: Number
    }],
    Imobilizado: [{
        id:{
            type: String,
            default: '1.02.03'
        },
        value: Number
    }],
    Imobilizado_em_Operacao: [{
        id:{
            type: String,
            default: '1.02.03.01'
        },
        value: Number
    }],
    Direito_de_Uso_em_Arrendamento: [{
        id:{
            type: String,
            default: '1.02.03.02'
        },
        value: Number
    }], 
    Imobilizado_em_Andamento: [{
        id:{
            type: String,
            default: '1.02.03.03'
        },
        value: Number
    }],
    Intangivel: [{
        id:{
            type: String,
            default: '1.02.04'
        },
        value: Number
    }], 
    Intangiveis: [{
        id:{
            type: String,
            default: '1.02.04.01'
        },
        value: Number
    }], 
    Contrato_de_Concessão: [{
        id:{
            type: String,
            default: '1.02.04.01.01'
        },
        value: Number
    }], 
    Outros_Intangiveis: [{
        id:{
            type: String,
            default: '1.02.04.01.02'
        },
        value: Number
    }], 
    Agio: [{
        id:{
            type: String,
            default: '1.02.04.01.03'
        },
        value: Number
    }],
    Goodwill: [{
        id:{
            type: String,
            default: '1.02.04.02 '
        },
        value: Number
    }],   	 	 	 							    			
})

