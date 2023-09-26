import React from 'react'
import { View, Text, StyleSheet, SectionList } from 'react-native'

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item =({ name, price }) => (
  <View style={menuStyle.innerContainer}>
    <Text style={menuStyle.itemText}>{name}</Text>
    <Text style={menuStyle.itemText}>{price}</Text>
  </View>
);

const separator = () => <View style={menuStyle.separator}/>;


function MenuItem() {
   const renderItem = ({ item }) => <Item name={item.name} price={item.price}/>

   const renderSectionHeader = ({ section : { title } }) => (
    <View style={menuStyle.headerStyle}>
     <Text style={menuStyle.sectionHeader}> { title }</Text>
    </View>
   );
    
  return (
    <View style={menuStyle.container}>
      <SectionList
       sections={menuItemsToDisplay}
       renderItem={renderItem}
       keyExtractor={(item, index) => item + index}
       renderSectionHeader={renderSectionHeader}
       ItemSeparatorComponent={separator}>
      </SectionList>
    </View>
  )
}

export default MenuItem

const menuStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        fontSize: 18,
        color: '#F4CE14'
    },
    headerStyle :{
      backgroundColor: '#F4CE14'
    },
    sectionHeader : {
      color: 'black',
      textAlign: 'center',
      flexWrap: 'wrap',
      fontSize: 26,
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: '#EDEFEE'
    }
});