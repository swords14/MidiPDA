import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

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
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Fazer Pedido</Text>
        <Text>Detalhes do Item:</Text>
        <Text>Nome: {itemNome}</Text>
       

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Pedido</Text>
          <TextInput
            style={styles.input}
            placeholder="Número do Pedido"
            value={numeroPedido}
            onChangeText={setNumeroPedido}
          />
          <TextInput
            style={styles.input}
            placeholder="Vendedor"
            value={vendedor}
            onChangeText={setVendedor}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Produto</Text>
          <TextInput
            style={styles.input}
            placeholder="Buscar Produto"
            value={produtoBusca}
            onChangeText={setProdutoBusca}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantidade do Produto"
            value={quantidadeProduto}
            onChangeText={setQuantidadeProduto}
          />
          <TextInput
            style={styles.input}
            placeholder="Valor do Produto"
            value={valorProduto}
            onChangeText={setValorProduto}
          />
          <TextInput
            style={styles.input}
            placeholder="Desconto do Produto"
            value={descontoProduto}
            onChangeText={setDescontoProduto}
          />
          <TextInput
            style={styles.input}
            placeholder="Itens de Embalagem"
            value={itensEmbalagem}
            onChangeText={setItensEmbalagem}
          />
          <TextInput
            style={styles.input}
            placeholder="Estoque Atual"
            value={estoqueAtual}
            onChangeText={setEstoqueAtual}
          />
          <View style={styles.switchContainer}>
            <Text>Aplicar Desconto:</Text>
            <Switch
              value={aplicarDesconto}
              onValueChange={(value) => setAplicarDesconto(value)}
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Cliente</Text>
          <TextInput
            style={styles.input}
            placeholder="Buscar Cliente"
            value={clienteBusca}
            onChangeText={setClienteBusca}
          />
          <TextInput
            style={styles.input}
            placeholder="Endereço"
            value={endereco}
            onChangeText={setEndereco}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Preços</Text>
          <TouchableOpacity
            style={[
              styles.precoButton,
              precoSelecionado === 'atacado' && styles.precoButtonSelected,
            ]}
            onPress={() => setPrecoSelecionado('atacado')}
          >
            <Text style={styles.buttonText}>Preço Atacado</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.precoButton,
              precoSelecionado === 'varejo' && styles.precoButtonSelected,
            ]}
            onPress={() => setPrecoSelecionado('varejo')}
          >
            <Text style={styles.buttonText}>Preço Varejo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.precoButton,
              precoSelecionado === 'tabela3' && styles.precoButtonSelected,
            ]}
            onPress={() => setPrecoSelecionado('tabela3')}
          >
            <Text style={styles.buttonText}>Preço Tabela 3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.quantityContainer}>
          <Text>Quantidade:</Text>
          <TouchableOpacity onPress={decrementQuantidade}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text>{itemQuantidade}</Text>
          <TouchableOpacity onPress={incrementQuantidade}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={confirmarPedido}>
          <Text style={styles.buttonText}>Confirmar Pedido</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContainer: {
    width: '80%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 15,
    width: '80%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FazerPedidoScreen;
