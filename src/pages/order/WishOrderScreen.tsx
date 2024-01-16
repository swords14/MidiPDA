import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import WishOrderScreenStyles from './WishOrderScreenStyles';

interface WishOrderScreenProps {
  route: any;
}

const WishOrderScreen: React.FC<WishOrderScreenProps> = ({ route }) => {
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
      <ScrollView contentContainerStyle={WishOrderScreenStyles.container}>
        <Text style={WishOrderScreenStyles.title}>Wish Order</Text>
        <Text>Item Details:</Text>
        <Text>Name: {itemNome}</Text>

        <View style={WishOrderScreenStyles.sectionContainer}>
          <Text style={WishOrderScreenStyles.sectionTitle}>Order</Text>
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Order Number"
            value={numeroPedido}
            onChangeText={setNumeroPedido}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Salesman"
            value={vendedor}
            onChangeText={setVendedor}
          />
        </View>

        <View style={WishOrderScreenStyles.sectionContainer}>
          <Text style={WishOrderScreenStyles.sectionTitle}>Product</Text>
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Search Product"
            value={produtoBusca}
            onChangeText={setProdutoBusca}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Product Quantity"
            value={quantidadeProduto}
            onChangeText={setQuantidadeProduto}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Product Value"
            value={valorProduto}
            onChangeText={setValorProduto}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Product Discount"
            value={descontoProduto}
            onChangeText={setDescontoProduto}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Packaging Items"
            value={itensEmbalagem}
            onChangeText={setItensEmbalagem}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Current Stock"
            value={estoqueAtual}
            onChangeText={setEstoqueAtual}
          />
          <View style={WishOrderScreenStyles.switchContainer}>
            <Text>Apply Discount:</Text>
            <Switch
              value={aplicarDesconto}
              onValueChange={(value) => setAplicarDesconto(value)}
            />
          </View>
        </View>

        <View style={WishOrderScreenStyles.sectionContainer}>
          <Text style={WishOrderScreenStyles.sectionTitle}>Client</Text>
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Search Client"
            value={clienteBusca}
            onChangeText={setClienteBusca}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Address"
            value={endereco}
            onChangeText={setEndereco}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Phone"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>

        <View style={WishOrderScreenStyles.sectionContainer}>
          <Text style={WishOrderScreenStyles.sectionTitle}>Prices</Text>
          <TouchableOpacity
            style={[
              WishOrderScreenStyles.precoButton,
              precoSelecionado === 'atacado' && WishOrderScreenStyles.precoButtonSelected,
            ]}
            onPress={() => setPrecoSelecionado('atacado')}
          >
            <Text style={WishOrderScreenStyles.buttonText}>Wholesale Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              WishOrderScreenStyles.precoButton,
              precoSelecionado === 'varejo' && WishOrderScreenStyles.precoButtonSelected,
            ]}
            onPress={() => setPrecoSelecionado('varejo')}
          >
            <Text style={WishOrderScreenStyles.buttonText}>Retail Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              WishOrderScreenStyles.precoButton,
              precoSelecionado === 'tabela3' && WishOrderScreenStyles.precoButtonSelected,
            ]}
            onPress={() => setPrecoSelecionado('tabela3')}
          >
            <Text style={WishOrderScreenStyles.buttonText}>Table 3 Price</Text>
          </TouchableOpacity>
        </View>
        <View style={WishOrderScreenStyles.quantityContainer}>
          <Text>Quantity:</Text>
          <TouchableOpacity onPress={decrementQuantidade}>
            <Text style={WishOrderScreenStyles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text>{itemQuantidade}</Text>
          <TouchableOpacity onPress={incrementQuantidade}>
            <Text style={WishOrderScreenStyles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={WishOrderScreenStyles.confirmButton} onPress={confirmarPedido}>
          <Text style={WishOrderScreenStyles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default WishOrderScreen;
