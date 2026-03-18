import { ThemedText } from '@/components/themed-text';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const deArray = (param: string | string[]): string => {
  if (Array.isArray(param)) return param[0] ?? "";
  return param ?? "";
};


export default function sendMessage() {
  const params = useLocalSearchParams();
  
  const [phone, setPhone] = useState(params.phone || "");
  const [fullName, setName] = useState(params.fullName || "");
  const [image, setImage] = useState(params.image || "");

  const [nameText, setNameText] = useState("Blank Contact");

  useEffect(() => {
    if (params.phone) {
      setPhone(params.phone);
      setName(params.fullName);
      setImage(params.iamge);
    }
  }, [params.phone, params.fullName, params.image]);

  return (
    <SafeAreaView>
      <ThemedText style={styles.text}>{nameText}</ThemedText>
      <Button onPress={() => setNameText(deArray(fullName))} title="Send Message" color="#1b1584" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000000'
  },
  button: {
    color: '#000000'
  }
});
