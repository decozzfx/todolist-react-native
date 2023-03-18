import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";

const Task = ({text, checked, taskItems, setTaskItems, index}) => {

  function completeTask(index) {
    let items = [...taskItems] 
    items[index].checked = !items[index].checked
    setTaskItems(items)
  }

  function deleteTask(index) {
    let items = [...taskItems] 
    items.splice(index, 1)
    setTaskItems(items)
  }
  
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>

        <TouchableOpacity onPress={() => completeTask(index)}>
          <View style={styles.square}>{
            checked && (<View style={styles.insideSquare}></View>)
          }
          </View>
        </TouchableOpacity>

        <Text style={styles.itemText}>{text}</Text>
      </View>

      <TouchableOpacity onPress={() => deleteTask(index)}>
      <View style={styles.circular}> 
        <Text style={{color: 'white', textAlign: 'center'}}>DELETE</Text>
      </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderRadius: 5,
    width: 24,
    height: 24,
    backgroundColor: '#55B',
  },
  insideSquare: {
    borderRadius: 5,
    width: 18,
    height: 18,
    backgroundColor: 'white',
  },
  itemText: {
    maxWidth: '80%'
  },
  circular: {
    backgroundColor: 'red',
    color: 'white',
    width: 70,
    height: 35,
    padding: 3,
    borderWidth: 2,
    borderRadius: 5,
  }
})

export default Task