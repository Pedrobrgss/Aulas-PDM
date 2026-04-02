import { View, Text, StyleSheet } from 'react-native';

function DespesaSumario({despesas, periodo}) {
  const somaDespesas = despesas.reduce((total, despesa) => {
    return total + despesa.valor;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodoText}>{periodo}</Text>
      <Text style={styles.somaText}>R$ {somaDespesas.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 

    backgroundColor: '#DBEAFE', 
    padding: 20, 
    borderRadius: 12, 
    margin: 16, 
    

    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  periodoText: {
    fontSize: 15,
    color: '#1E40AF',
    fontWeight: '600',
  },
  somaText: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#1E3A8A',
  }
});

export default DespesaSumario;