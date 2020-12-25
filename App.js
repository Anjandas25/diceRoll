import React, {useState} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar

} from 'react-native';

import diceOne from './assets/dice1.png'
import diceTwo from './assets/dice2.png'
import diceThree from './assets/dice3.png'
import diceFour from './assets/dice4.png'
import diceFive from './assets/dice4.png'
import diceSix from './assets/dice6.png'



const App = ()=> {
  const [uri, setUri] = useState(diceOne)

const play = ()=>{
  let randomNumber = Math.floor(Math.random() * 6)+1;
  let randomNumber2 = Math.floor(Math.random() * 6)+1;

  switch (randomNumber) {
    case 1:
      setUri(diceOne)
      break;

      case 2:
        setUri(diceTwo)
        break;

        case 3:
          setUri(diceThree)
          break;

          case  4:
            setUri(diceFour)
            break;

            case  5:
              setUri(diceFive)
              break;

              case  6:
                setUri(diceSix)
                break;
  
    default:
      setUri(diceSix)
      break;
  };
  switch (randomNumber2) {
    case 1:
      setUri(diceSix)
      break;

      case 2:
        setUri(diceFive)
        break;

        case 3:
          setUri(diceThree)
          break;

          case  4:
            setUri(diceFour)
            break;

            case  5:
              setUri(diceFive)
              break;

              case  6:
                setUri(diceSix)
                break;
  
    default:
      setUri(diceSix)
      break;
  };


 
}

return (
  <>
  <StatusBar backgroundColor={'#0045BE'}/>
  <View style = {styles.container}>
    <Image style = {styles.image} source = {uri}/>
    <Image style = {styles.image2} source = {uri}/>
 <TouchableOpacity onPress={play}>
  <Text style ={styles.game}>Roll the Dice!</Text>
  </TouchableOpacity>
  <Text style = {styles.gameNew}>Made By Anjan</Text>
  </View>
  </>
)
};

  export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0045BE",
    justifyContent:'center',
    alignItems:'center',

  },
image:{
  width:150,
  height:150,
  marginTop:70,
},
image2:{
  width:150,
  height:150,
},



game:{
  marginTop:100,
  fontSize:25,
  color:"white",
  paddingHorizontal:40,
  paddingVertical:10,
  borderColor:"#E5BA0D",
  borderRadius:5,
  borderWidth:2,
  fontWeight:'bold',
  textAlign:'center',
},
gameNew:{
  marginTop:20,
  alignContent:'center',
  justifyContent:'center',
  paddingHorizontal:100,
  fontWeight:'bold',
  fontSize:15,
  color:'yellow'
}



});

