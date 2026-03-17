import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';
import { Button, StyleSheet, View } from 'react-native';

function alertMe(){
  alert.call("test");
}

async function sendSMS(){
  const isAvailable = await SMS.isAvailableAsync();
  if (isAvailable) {
    SMS.sendSMSAsync("0422286245", "Hello From Lab 2")
  } else {
    alert.call("No SMS on this device");
  }
}
async function getContacts(){
  const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const data = await Contacts.presentContactPickerAsync()

      if (data) {
        console.log(data.firstName);
      }
  }
}



export default function button() {
  return (
    <View style={styles.button}>
      <Button 
      onPress={alertMe}
      title="Alert Me"
      color="#841584"
      />
      <Button 
      onPress={sendSMS}
      title="Send Message"
      color="#1b1584"
      />
      <Button 
      onPress={getContacts}
      title="Get Contacts"
      color="#841515"
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 100,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});


