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
  const { itemName, itemDescription } = route.params;
  const [itemQuantity, setItemQuantity] = useState(1);
  const [numberOrder, setNumberOrder] = useState('');
  const [seller, setSeller] = useState('');
  const [productFind, setProductFind] = useState('');
  const [quantityProduct, setQuantityProduct] = useState('');
  const [valueProduct, setValueProduct] = useState('');
  const [discountProduct, setDiscountProduct] = useState('');
  const [itemsPackaging, setItemsPackaging] = useState('');
  const [currentInventory, setCurrentInventory] = useState('');
  const [applyDiscount, setApplyDiscount] = useState(false);
  const [clientFind, setClientFind] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const incrementQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const decrementQuantidade = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const confirmarPedido = () => {
    // Lógica para confirmar o pedido
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={WishOrderScreenStyles.container}>
        <Text style={WishOrderScreenStyles.title}>Fazer Pedido</Text>
        <Text>Detalhe do Pedido:</Text>

        <View style={WishOrderScreenStyles.sectionContainer}>
          <Text style={WishOrderScreenStyles.sectionTitle}>Pedido</Text>
          <Text style={WishOrderScreenStyles.text}>Número do pedido: </Text>
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Vendedor"
            value={seller}
            onChangeText={setSeller}
          />
        </View>

        <View style={WishOrderScreenStyles.sectionContainer}>
          <Text style={WishOrderScreenStyles.sectionTitle}>Produto</Text>
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Procurar Produto"
            value={productFind}
            onChangeText={setProductFind}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Quantidade do Produto"
            value={quantityProduct}
            onChangeText={setQuantityProduct}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Valor"
            value={valueProduct}
            onChangeText={setValueProduct}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Desconto"
            value={discountProduct}
            onChangeText={setDiscountProduct}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Itens por Embalagem"
            value={itemsPackaging}
            onChangeText={setItemsPackaging}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Estoque Atual"
            value={currentInventory}
            onChangeText={setCurrentInventory}
          />
          <View style={WishOrderScreenStyles.switchContainer}>
            <Text>Aplicar desconto:</Text>
            <Switch
              value={applyDiscount}
              onValueChange={(value) => setApplyDiscount(value)}
            />
          </View>
        </View>

        <View style={WishOrderScreenStyles.sectionContainer}>
          <Text style={WishOrderScreenStyles.sectionTitle}>Cliente</Text>
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Nome do Cliente"
            value={clientFind}
            onChangeText={setClientFind}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Endereço"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={WishOrderScreenStyles.input}
            placeholder="Telefone"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <View style={WishOrderScreenStyles.quantityContainer}>
          <Text>Quantidade:</Text>
          <TouchableOpacity onPress={decrementQuantidade}>
            <Text style={WishOrderScreenStyles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text>{itemQuantity}</Text>
          <TouchableOpacity onPress={decrementQuantidade}>
            <Text style={WishOrderScreenStyles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={WishOrderScreenStyles.confirmButton} onPress={confirmarPedido}>
          <Text style={WishOrderScreenStyles.buttonText}>Confirmar Pedido</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default WishOrderScreen;
