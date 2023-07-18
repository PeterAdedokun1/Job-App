import React from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import styles from "./tabs.style"
import { SIZES } from '../../../constants'
const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  const TabButton = ({name,activeTab,onHandleSearchType}) => (
    <TouchableOpacity>
      <Text>{ name}</Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
      />
   </View>
  )
}

export default Tabs