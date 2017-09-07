import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './App.styles';

const messages = [
  'Perfecto!',
  'mañana temprano te llamo, ahora me voy a dormir',
  'ok',
  'toca timbre que no tengo el celular encima'
];

const contacts = [
  {
    id: 1,
    username: 'Dardo',
    avatar: 'https://t4.kn3.net/taringa/5/6/2/0/2/1/BurlandoLaLey/FC8.jpg'
  },
  {
    id: 2,
    username: 'Maria Elena',
    avatar: 'https://i.ytimg.com/vi/pMTPG7AxyEs/hqdefault.jpg'
  },
  {
    id: 3,
    username: 'Pepe',
    avatar:
      'https://vignette2.wikia.nocookie.net/inciclopedia/images/2/29/PepeArgento-01.jpg/revision/latest/scale-to-width-down/180?cb=20130520123829'
  },
  {
    id: 4,
    username: 'Moni',
    avatar:
      'https://pbs.twimg.com/profile_images/378800000257615512/1a0ed17e4c315d8ef1dfb5dd67e8bc12_400x400.jpeg'
  }
];

const App = () => (
  <View style={styles.container}>
    {contacts.map(contact => (
      <View key={contact.id} style={{ marginBottom: 15 }}>
        <View style={styles.contact}>
          <View style={{ marginRight: 20 }}>
            <Image style={styles.image} source={{ uri: contact.avatar }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{contact.username}</Text>
            <Text numberOfLines={1} style={styles.message}>
              {messages[contact.id - 1]}
            </Text>
          </View>
        </View>
        <View style={styles.greyLine} />
      </View>
    ))}
  </View>
);

export default App;
