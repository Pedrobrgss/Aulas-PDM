import { View, Text, Pressable, StyleSheet } from 'react-native';

function getDataFormatada(data) {
  return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
}

function DespesaItem({item}) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.itemContainer}>
        
        <View style={styles.infoContainer}>
          <Text style={styles.descricaoText}>{item.descricao}</Text>
          <Text style={styles.dataText}>{getDataFormatada(item.data)}</Text>
        </View>

        <View style={styles.valorContainer}>
          <Text style={styles.valorText}>R$ {item.valor.toFixed(2)}</Text>
        </View>

      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  infoContainer: {
    flex: 1,
  },
  descricaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  dataText: {
    fontSize: 13,
    color: '#6B7280',
  },
  valorContainer: {
    backgroundColor: '#E0E7FF', // Fundo azul claro para destacar o valor
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valorText: {
    color: '#4F46E5', // Texto azul forte
    fontWeight: 'bold',
    fontSize: 14,
  },
  pressed: {
    opacity: 0.7,
  }
});

export default DespesaItem;