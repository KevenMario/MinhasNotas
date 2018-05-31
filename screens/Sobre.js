import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

class SobreScreen extends React.Component 
{
    render () 
    {
        return(
            <View style={styles.container}> 
                <Text>Keven Mário Novais Ribeiro</Text>
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
  
export default SobreScreen;