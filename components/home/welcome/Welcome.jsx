import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, FlatList } from "react-native"
import { useRouter } from 'expo-router'
import { useState } from 'react'
import styles from "./welcome.style"
import  {icons,SIZES} from "../../../constants"
const Welcome = () => {
  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian </Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
        </View>
      </View>
    </View>
  );
}

export default Welcome