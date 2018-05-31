import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import MateriaScreen from './screens/Materias';
import NotasScreen from './screens/Notas';
import NNotaScreen from './screens/NovaNota';
import SobreScreen from './screens/Sobre';
import PerfilScreen from './screens/Perfil';



export default createBottomTabNavigator({
    Materias : MateriaScreen,
    Notas : NotasScreen,
    Perfil : PerfilScreen,
    Sobre : SobreScreen
});

