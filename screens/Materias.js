import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

class MateriasScreen extends React.Component 
{
    render () {
        return(
            <View style={styles.container}>  
                <Text>Materias!</Text>
                <Text>Matématica</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default MateriasScreen;