import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, KeyboardAvoidingView, ScrollView } from 'react-native';
import WishScreenStyles, {styles} from '../layout/WishScreenStyles'

const FazerPedidoScreen = ({ route }) => {
  const { itemNome, itemDescricao } = route.params;
  const [itemQuantidade, setItemQuantidade] = useState(1);
  const [numeroPedido, setNumeroPedido] = useState('');
  const [vendedor, setVendedor] = useState('');
  const [produtoBusca, setProdutoBusca] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [descontoProduto, setDescontoProduto] = useState('');
  const [itensEmbalagem, setItensEmbalagem] = useState('');
  const [estoqueAtual, setEstoqueAtual] = useState('');
  const [aplicarDesconto, setAplicarDesconto] = useState(false);
  const [clienteBusca, setClienteBusca] = useState('');
  const [endereco, setEndereco] = useState('');
  const [precoAtacado, setPrecoAtacado] = useState('');
  const [precoVarejo, setPrecoVarejo] = useState('');
  const [precoTabela3, setPrecoTabela3] = useState('');
  const [telefone, setTelefone] = useState('');
  const [precoSelecionado, setPrecoSelecionado] = useState('');

  const incrementQuantidade = () => {
    setItemQuantidade(itemQuantidade + 1);
  };

  const decrementQuantidade = () => {
    if (itemQuantidade > 1) {
      setItemQuantidade(itemQuantidade - 1);
    }
  };

  const confirmarPedido = () => {
    // Lógica para confirmar o pedido
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={WishScreenStyles.container}>
        <Text style={WishScreenStyles.title}>Fazer Pedido</Text>
        <Text>Detalhes do Item:</Text>
        <Text>Nome: {itemNome}</Text>
       

        <View style={WishScreenStyles.sectionContainer}>
          <Text style={WishScreenStyles.sectionTitle}>Pedido</Text>
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Número do Pedido"
            value={numeroPedido}
            onChangeText={setNumeroPedido}
          />
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Vendedor"
            value={vendedor}
            onChangeText={setVendedor}
          />
        </View>

        <View style={WishScreenStyles.sectionContainer}>
          <Text style={WishScreenStyles.sectionTitle}>Produto</Text>
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Buscar Produto"
            value={produtoBusca}
            onChangeText={setProdutoBusca}
          />
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Quantidade do Produto"
            value={quantidadeProduto}
            onChangeText={setQuantidadeProduto}
          />
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Valor do Produto"
            value={valorProduto}
            onChangeText={setValorProduto}
          />
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Desconto do Produto"
            value={descontoProduto}
            onChangeText={setDescontoProduto}
          />
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Itens de Embalagem"
            value={itensEmbalagem}
            onChangeText={setItensEmbalagem}
          />
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Estoque Atual"
            value={estoqueAtual}
            onChangeText={setEstoqueAtual}
          />
          <View style={WishScreenStyles.switchContainer}>
            <Text>Aplicar Desconto:</Text>
            <Switch
              value={aplicarDesconto}
              onValueChange={(value) => setAplicarDesconto(value)}
            />
          </View>
        </View>

        <View style={WishScreenStyles.sectionContainer}>
          <Text style={WishScreenStyles.sectionTitle}>Cliente</Text>
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Buscar Cliente"
            value={clienteBusca}
            onChangeText={setClienteBusca}
          />
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Endereço"
            value={endereco}
            onChangeText={setEndereco}
          />
          <TextInput
            style={WishScreenStyles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>

        <View style={WishScreenStyles.sectionContainer}>
          <Text style={WishScreenStyles.sectionTitle}>Preços</Text>
          <TouchableOpacity
            style={[
              WishScreenStyles.precoButton,
              precoSelecionado === 'atacado' && WishScreenStyles.precoButtonSelected,
            ]}
            onPress={() => setPrecoSelecionado('atacado')}
          >
            <Text style={WishScreenStyles.buttonText}>Preço Atacado</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              WishScreenStyles.precoButton,
              precoSelecionado === 'varejo' && WishScreenStyles.precoButtonSelected,
            ]}
            onPress={() => setPrecoSelecionado('varejo')}
          >
            <Text style={WishScreenStyles.buttonText}>Preço Varejo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              WishScreenStyles.precoButton,
              precoSelecionado === 'tabela3' && WishScreenStyles.precoButtonSelected,
            ]}
            onPress={() => setPrecoSelecionado('tabela3')}
          >
            <Text style={WishScreenStyles.buttonText}>Preço Tabela 3</Text>
          </TouchableOpacity>
        </View>
        <View style={WishScreenStyles.quantityContainer}>
          <Text>Quantidade:</Text>
          <TouchableOpacity onPress={decrementQuantidade}>
            <Text style={WishScreenStyles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text>{itemQuantidade}</Text>
          <TouchableOpacity onPress={incrementQuantidade}>
            <Text style={WishScreenStyles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={WishScreenStyles.confirmButton} onPress={confirmarPedido}>
          <Text style={WishScreenStyles.buttonText}>Confirmar Pedido</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FazerPedidoScreen;
