const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(state) {
    if(this.state = state) return state 
    else return true
  }

  encrypt(message, key) {

    if (message == undefined || key == undefined) throw new Error('Incorrect arguments!') 

    let newObject = new Object() 
    let outputArray = new Array() 
    let newString = new String() 
    let lowKey = key.toLowerCase()
    let lowMessage = message.toLowerCase() 

    for (let i = 0; i < lowMessage.length; i++) { 
      if (0 > lowMessage[i].charCodeAt(0) - 97) newObject[i] = lowMessage[i] 
      if (!new RegExp('^[a-zA-Z]+$').test(lowMessage[i])) newObject[i] = lowMessage[i] 
    }

    for(let i = newString.length; i < lowMessage.length; i++) newString += lowKey
    for (let key in newObject) lowMessage = lowMessage.split(`${newObject[key]}`).join('') 

    for (let i = 0; i < lowMessage.length; i += 1) { 
      if (0 <= lowMessage[i].charCodeAt(0) - 97) {
        outputArray.push(String.fromCharCode((((lowMessage[i].charCodeAt(0) - 97) + (newString[i].charCodeAt(0) - 97)) % 26) + 97))
      }
    }

    for (let key in newObject) {
      let rem = outputArray.splice(+key)
      outputArray[+key] = newObject[key]
      outputArray = outputArray.concat(rem)
    }

    if (this.state == false) outputArray.reverse()

    return outputArray.join('').toUpperCase()
  }

  decrypt(message, key) {

    if (message == undefined || key == undefined) throw new Error('Incorrect arguments!') 

   
    let newObject = new Object() 
    let outputArray = new Array() 
    let newString = new String() 
    let lowKey = key.toLowerCase()
    let lowMessage = message.toLowerCase() 

    for (let i = 0; i < lowMessage.length; i++) { 
      if (0 > lowMessage[i].charCodeAt(0) - 97) newObject[i] = lowMessage[i] 
      if (!new RegExp('^[a-zA-Z]+$').test(lowMessage[i])) newObject[i] = lowMessage[i]
    }
    
    for(let i = newString.length; i < lowMessage.length; i++) newString += lowKey
    for (let key in newObject) lowMessage = lowMessage.split(`${newObject[key]}`).join('')
    
    for (let i = 0; i < lowMessage.length; i += 1) {  
      if (0 <= lowMessage[i].charCodeAt(0) - 97) {
        outputArray.push(String.fromCharCode(((26 + ((lowMessage[i].charCodeAt(0) - 97) - (newString[i].charCodeAt(0) - 97))) % 26) + 97));
      }
    }

    for (let key in newObject) {
      let rem = outputArray.splice(+key)
      outputArray[+key] = newObject[key]
      outputArray = outputArray.concat(rem)
    }

    if (this.state == false) outputArray.reverse()

    return outputArray.join('').toUpperCase()
  }
  
}

module.exports = {
  VigenereCipheringMachine
};
