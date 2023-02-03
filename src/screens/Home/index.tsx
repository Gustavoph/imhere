import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from './styles'

const participants = ['Gustavo', 'Giovanna', 'Gabriel', 'Daniel', 'Abel']

export function Home() {

  function handleAddParticipant(name: string) {
    if (participants.includes(name)) {
      return Alert.alert("Participante", "Já existe um participante na lista com esse nome")
    }
  }

  function handleRemoveParticipant(name: string) {
    return Alert.alert("Remover", `Tem certeza que deseja remover o participante ${name}`, [
      { text: 'Sim', onPress: () => { Alert.alert('Deletado!') } },
      { text: 'Não', style: 'cancel' }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 2 de fevereiro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença
        </Text>
      )} data={participants} keyExtractor={item => item} renderItem={({ item }) => (
        <Participant
          key={item}
          name={item}
          onRemove={handleRemoveParticipant} 
        />
      )}/>
    </View>
  )
}

