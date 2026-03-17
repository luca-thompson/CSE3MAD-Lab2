import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="selectContact">
        <Label>Select Contact</Label>
        <Icon sf="homepod" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="sendMessage">
        <Icon src={require("../../assets/images/sendIcon.png")} />
        <Label>Send Message</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
