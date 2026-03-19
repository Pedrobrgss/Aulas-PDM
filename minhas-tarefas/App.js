import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { rotulo_btn_cadastro_meta } from './mensagens';
import { rotulo_lista_meta } from './mensagens';
import { rotulo_input_meta } from './mensagens';
import { useState } from 'react';

export default function App() {

  const [inputMetaText, setInputMetaText] = useState('');
  const [metas, setMetas] = useState([]);

  function metaInputHandler(inputText){
    setInputMetaText(inputText)
  };

  function adicionarMetaHandler(){
    setMetas([...metas, inputMetaText]);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputText}
            placeholder={rotulo_input_meta}
            onChangeText={metaInputHandler}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title={rotulo_btn_cadastro_meta}
            color="#2196F3"
            onPress={adicionarMetaHandler}
          />
        </View>
      </View>

      <View style={styles.metaContainer}>
        {metas.map((meta, index) => <Text key={index}>{meta}</Text>)}
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
    marginTop: 20,
    flex: 15
  },

  item: {
    margin: 0,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'lightblue',
  }
});