import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState, useContext } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DespesasContext } from '../store/despesas-context'; 

function GerenciarDespesa({ navigation }) {
  const despesasCtx = useContext(DespesasContext); 

  const [data, setData] = useState(new Date());
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowPicker(false);
    setData(currentDate);
  };

  const handleChangeValor = (text) => {
    const cleanText = text.replace(',', '.');
    const match = cleanText.match(/^\d*\.?\d{0,2}$/);
    if (match) {
      setValor(cleanText);
    }
  };

  function confirmarDespesa() {
    const valorConvertido = parseFloat(valor);
    
    if (!descricao || isNaN(valorConvertido) || valorConvertido <= 0) {
      alert("Por favor, preencha os dados corretamente!");
      return;
    }

    despesasCtx.adicionarDespesa({
      descricao: descricao,
      valor: valorConvertido,
      data: data
    });

    navigation.goBack(); 
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.formCard}>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput 
            style={styles.input} 
            maxLength={20}
            value={descricao} 
            onChangeText={setDescricao}
            placeholder="Ex: Conta de luz"
            placeholderTextColor="#9ca3af"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Valor da Despesa (R$)</Text>
          <TextInput 
            style={styles.input}
            keyboardType={'decimal-pad'} 
            maxLength={10}
            value={valor} 
            onChangeText={handleChangeValor}
            placeholder="0.00"
            placeholderTextColor="#9ca3af"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data da Despesa</Text>
          <Pressable onPress={() => setShowPicker(true)} style={styles.inputDate}>
            <Text style={styles.dateText}>{data.toLocaleDateString('pt-BR')}</Text>
          </Pressable>
          {showPicker && (
            <DateTimePicker 
              value={data} 
              mode="date"
              display="default" 
              onChange={onChange}
            />
          )}
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={confirmarDespesa}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', 
    padding: 16,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  inputDate: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 14,
  },
  dateText: {
    fontSize: 16,
    color: '#1F2937',
  },
  buttonsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3B82F6', 
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: '#2563EB', 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default GerenciarDespesa;