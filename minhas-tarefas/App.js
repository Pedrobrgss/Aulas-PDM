import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { rotulo_btn_cadastro_meta } from './mensagens';
import { rotulo_lista_meta } from './mensagens';
import { rotulo_input_meta } from './mensagens';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputText}
            placeholder={rotulo_input_meta}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title={rotulo_btn_cadastro_meta}
            color="#2196F3"
          />
        </View>
      </View>

      <View style={styles.metaContainer}>
        <Text>{rotulo_lista_meta}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: "#eee"
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  inputWrapper: {
    width: "65%"
  },

  buttonWrapper: {
    width: "30%"
  },

  inputText: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    backgroundColor: "#fff"
  },

  metaContainer: {
    marginTop: 20
  }
});