import * as Contacts from 'expo-contacts';
import { Router, useRouter } from 'expo-router';
import * as SMS from 'expo-sms';
import { Button, StyleSheet, View } from 'react-native';



function alertMe(){
  alert.call("test", "test2");
}

async function sendSMS(){
  const isAvailable = await SMS.isAvailableAsync();
  if (isAvailable) {
    SMS.sendSMSAsync("0422286245", "Hello From Lab 2")
  } 
  else {
    alert.call("No SMS on this device");
  }
}
async function getContacts(navigation: Router) {
  const { status } = await Contacts.requestPermissionsAsync();

  if (status === 'granted') {
    const data = await Contacts.presentContactPickerAsync();

    if (data?.phoneNumbers) {
      navigation.navigate({
      pathname: "/(tabs)/sendMessage",
      params: { phone: data.phoneNumbers[0].number, fullName: data.name } 
    });
    } else {
      console.log("No selected contact");
    }
  } else {
    console.log("Requires Contacts Permissions");
  }
}



export default function selectContact() {
  const router = useRouter();
  
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
      onPress={() => {getContacts(router)}}
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

