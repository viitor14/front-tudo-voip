import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  DivModal,
  ButtonNext,
  DivIcon,
  DivContent,
  ContainerBotoes,
  BotaoVoltar,
  StyledIconBack
} from './styled';

import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import FormularioCliente from './FormularioCliente';
import PedidoNumero from '../PedidoNumero/Index';
import ResumoPedido from '../ResumoPedido/Index';
import NovoNumero from '../NovoNumero/Index';
import IconNavigation from '../IconNavigation/Index';

import { formatarTexto } from '../../utils/formatters';

import cidadesData from './assets/CIDADES.json';
import tiposVendaData from './assets/TIPOS_VENDA.json';

export default function CadastroPedido({ onClose, onPedidoCriado }) {
  const [isLoading, setIsLoading] = useState(false);
  const [etapa, setEtapa] = useState(1);
  const [errors, setErrors] = useState({});

  // A ÚNICA FONTE DA VERDADE PARA TODOS OS DADOS DO FORMULÁRIO
  const [formData, setFormData] = useState({
    cpfCnpj: '',
    nomeCompleto: '',
    uf: 'Selecione',
    cn: 'Selecione',
    cidade: 'Selecione',
    tipoVenda: 'Novo Numero',
    quantidadeNumero: 1,
    // Estado para a Etapa 2
    modo: 'individual',
    numerosIndividuais: [{ id: Date.now(), value: '' }],
    ranges: [{ id: Date.now(), prefixo: '', rangeInicial: '', rangeFinal: '' }],
    // Estado para a Etapa 3
    observacoes: '',
    aceitouTermos: false
  });

  const [anexos, setAnexos] = useState({
    termo_contrato: null,
    foto_documento: null,
    fatura: null
  });

  const inputRefs = useRef({
    termo: null,
    documento: null,
    fatura: null
  });

  const handleAnexarClick = (tipoAnexo) => {
    inputRefs.current[tipoAnexo]?.click();
  };

  const handleFileChange = (tipoAnexo, event) => {
    const file = event.target.files[0];
    if (file) {
      setAnexos((prevAnexos) => ({
        ...prevAnexos,
        [tipoAnexo]: file
      }));
    }
  };

  const handleRemoverAnexo = (tipoAnexo) => {
    setAnexos((prevAnexos) => ({
      ...prevAnexos,
      [tipoAnexo]: null
    }));
  };

  const handleFormChange = (campo, valor) => {
    setFormData((dadosAnteriores) => {
      const newState = { ...dadosAnteriores, [campo]: valor };
      return newState;
    });
  };

  // Função de validação para a Etapa 1
  const validateStep1 = () => {
    const newErrors = {};
    const docLimpo = formData.cpfCnpj.replace(/\D/g, '');
    if (docLimpo.length !== 11 && docLimpo.length !== 14)
      newErrors.cpfCnpj = 'CPF ou CNPJ inválido.';
    if (!formData.nomeCompleto.trim()) newErrors.nomeCompleto = 'O nome é obrigatório.';
    if (formData.uf === 'Selecione') newErrors.uf = 'Selecione uma UF.';
    if (formData.cn === 'Selecione') newErrors.cn = 'Selecione um CN.';
    if (formData.cidade === 'Selecione') newErrors.cidade = 'Selecione uma cidade.';
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};

    // Cenário 1: Venda de "Novo Número"
    if (formData.tipoVenda === 'Novo Numero') {
      if (!formData.quantidadeNumero || formData.quantidadeNumero < 1) {
        newErrors.quantidadeNumero = 'A quantidade deve ser de pelo menos 1.';
      }
    }
    // Cenário 2: Venda de "Portabilidade"
    else {
      // Sub-cenário 2.1: Modo de inserção "Individual"
      if (formData.modo === 'individual') {
        // 1. Filtra para encontrar apenas os campos que o usuário de fato preencheu.
        const numerosPreenchidos = formData.numerosIndividuais.filter((n) => n.value.trim() !== '');

        // 2. Se a lista de campos preenchidos estiver vazia, gera um erro.
        // ISTO IMPEDE DE AVANÇAR COM TODOS OS CAMPOS VAZIOS.
        if (numerosPreenchidos.length === 0) {
          newErrors.numerosIndividuais = 'Você deve adicionar pelo menos um número.';
        } else {
          // 3. Se houver números preenchidos, verifica se TODOS eles são válidos (têm 11 dígitos).
          const todosNumerosValidos = numerosPreenchidos.every(
            (n) => n.value.replace(/\D/g, '').length === 11
          );

          if (!todosNumerosValidos) {
            newErrors.numerosIndividuais =
              'Todos os números preenchidos devem ter 11 dígitos (DDD + número).';
          }
        }
      }
      // Se não houver erros no objeto, retorne um objeto vazio
      // Sub-cenário 2.2: Modo de inserção "Range"
      else if (formData.modo === 'range') {
        // (Validação para o modo range)
        const rangesPreenchidos = formData.ranges.filter(
          (r) => r.prefixo || r.rangeInicial || r.rangeFinal
        );

        if (rangesPreenchidos.length === 0) {
          newErrors.ranges = 'Você deve preencher pelo menos um range.';
        } else {
          const todosRangesValidos = rangesPreenchidos.every(
            (r) => r.prefixo && r.rangeInicial && r.rangeFinal
          );
          if (!todosRangesValidos) {
            newErrors.ranges = 'Todos os campos de um range preenchido são obrigatórios.';
          }
        }
      }
    }

    return newErrors;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.aceitouTermos) {
      newErrors.aceitouTermos = 'Você precisa aceitar os termos e condições.';
    }
    return newErrors;
  };

  // Funções de navegação
  const proximaEtapa = () => {
    setErrors({});

    if (etapa === 1) {
      const validationErrors = validateStep1();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        toast.error('Por favor, corrija os campos destacados.');
        return;
      }
    } else if (etapa === 2) {
      const validationErrors = validateStep2();

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        toast.error('Por favor, preencha os detalhes do pedido');
        return;
      }
    }
    if (etapa < 3) setEtapa((etapaAtual) => etapaAtual + 1);
  };

  const etapaAnterior = () => {
    if (etapa > 1) setEtapa((etapaAtual) => etapaAtual - 1);
  };

  const validateField = (name, value) => {
    if (name.startsWith('numero_')) {
      const valorLimpo = value.replace(/\D/g, '');
      // Valida apenas se o campo foi preenchido
      if (valorLimpo && valorLimpo.length !== 11) {
        return 'O número deve ter 11 dígitos.';
      }
      return null;
    }
    switch (name) {
      case 'cpfCnpj':
        const docLimpo = value.replace(/\D/g, '');
        if (docLimpo.length !== 11 && docLimpo.length !== 14) {
          return 'CPF ou CNPJ inválido.';
        }
        return null;
      case 'nomeCompleto':
        if (!value.trim()) {
          return 'O nome completo é obrigatório.';
        }
        return null;
      case 'uf':
        if (value === 'Selecione') {
          return 'Selecione uma UF.';
        }
        return null;

      // Adicione outros 'cases' para 'cn' e 'cidade'
      default:
        return null;
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const errorMessage = validateField(name, value);

    if (name.startsWith('numero_')) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        numerosIndividuais: {
          ...prevErrors.numerosIndividuais,
          [name]: errorMessage
        }
      }));
    } else {
      // Para os outros campos, a lógica continua a mesma
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage
      }));
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateStep3();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Mostra o primeiro erro encontrado
      const primeiroErro = Object.values(validationErrors)[0];
      toast.error(primeiroErro);
      return;
    }

    if (isLoading) return;

    setIsLoading(true);
    try {
      // 1. Monta o objeto de dados base (lógica que você já tinha)
      const cidadeSelecionada = cidadesData.find(
        (c) => formatarTexto(c.nome_cidade) === formData.cidade
      );
      const tipoVendaSelecionado = tiposVendaData.find(
        (tv) => tv.tipo_venda === formData.tipoVenda.toUpperCase()
      );

      if (!cidadeSelecionada || !tipoVendaSelecionado) {
        toast.error('Cidade ou Tipo de Venda inválido.');
        return;
      }

      const dadosParaApi = {
        cod_cidade: cidadeSelecionada.cod_cidade,
        cod_tipo_venda: tipoVendaSelecionado.cod_tipo_venda,
        observacoes: formData.observacoes
      };
      const docLimpo = formData.cpfCnpj.replace(/\D/g, '');
      if (docLimpo.length <= 11) {
        dadosParaApi.cpf = docLimpo;
        dadosParaApi.nome_completo = formData.nomeCompleto;
      } else {
        dadosParaApi.cnpj = docLimpo;
        dadosParaApi.nome_empresa = formData.nomeCompleto;
      }
      if (formData.tipoVenda !== 'Novo Numero') {
        const numerosParaPortar = formData.numerosIndividuais
          .map((n) => n.value.replace(/\D/g, ''))
          .filter(Boolean);
        dadosParaApi.numeros_portabilidade = numerosParaPortar;
      }

      // 2. Cria o FormData para a requisição
      const finalFormData = new FormData();

      // 3. Anexa o ficheiro
      Object.keys(anexos).forEach((tipoAnexo) => {
        if (anexos[tipoAnexo]) {
          // O nome do campo no backend será 'termo', 'documento', 'fatura'
          finalFormData.append(tipoAnexo, anexos[tipoAnexo]);
        }
      });

      // 4. Anexa todos os outros campos de dados
      for (const key in dadosParaApi) {
        // Trata o array de números de forma especial para o backend
        if (key === 'numeros_portabilidade' && Array.isArray(dadosParaApi[key])) {
          dadosParaApi[key].forEach((numero) => {
            finalFormData.append('numeros_portabilidade[]', numero);
          });
        } else {
          finalFormData.append(key, dadosParaApi[key]);
        }
      }

      console.log('ENVIANDO FORMDATA PARA A API:', finalFormData);
      await axios.post('/pedido', finalFormData);

      toast.success('Pedido criado com sucesso!');
      if (onPedidoCriado) onPedidoCriado();
      onClose();
    } catch (error) {
      const errorMsg = error.response?.data?.errors?.[0] || 'Ocorreu um erro ao enviar o pedido.';
      console.error(error);
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <DivModal>
          <div>
            <CloseButton onClick={onClose}>X</CloseButton>
            <h2>Cadastro de Pedido</h2>
          </div>
          <DivIcon>
            <IconNavigation currentStep={etapa} />
          </DivIcon>

          <DivContent>
            {etapa === 1 && (
              <FormularioCliente
                dados={formData}
                onFormChange={handleFormChange}
                errors={errors}
                onBlur={handleBlur}
              />
            )}
            {etapa === 2 && (
              <>
                {formData.tipoVenda === 'Novo Numero' ? (
                  <NovoNumero formData={formData} onFormChange={handleFormChange} errors={errors} />
                ) : (
                  <PedidoNumero
                    dados={formData}
                    onFormChange={handleFormChange}
                    errors={errors}
                    onBlur={handleBlur}
                    anexos={anexos}
                    onAnexarClick={handleAnexarClick}
                    onFileChange={handleFileChange}
                    onRemoverAnexo={handleRemoverAnexo}
                    inputRefs={inputRefs}
                  />
                )}
              </>
            )}
            {etapa === 3 && (
              <ResumoPedido
                formData={formData}
                onFormChange={handleFormChange}
                errors={errors}
                anexos={anexos}
              />
            )}
          </DivContent>
        </DivModal>

        <ContainerBotoes>
          {etapa > 1 ? (
            <BotaoVoltar onClick={etapaAnterior}>
              <StyledIconBack />
              <span>Voltar</span>
            </BotaoVoltar>
          ) : (
            <div />
          )}

          {etapa < 3 ? (
            <ButtonNext onClick={proximaEtapa}>Avançar</ButtonNext>
          ) : (
            <ButtonNext onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'A Enviar...' : 'Concluir Pedido'}
            </ButtonNext>
          )}
        </ContainerBotoes>
      </ModalContent>
    </ModalOverlay>
  );
}
