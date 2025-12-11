import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function EditText({
    marginTop,
    placeholder, 
    onChangeText,
    isPassword = false,
    keyboardType,
    value,
}) {
  return (
    <View style={[styles.container, {marginTop: marginTop ? marginTop: 0}]}>
        <TextInput 
            secureTextEntry={isPassword}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor='#888'
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            value={value}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: { width: "100%",
        alignItems: "center",},
    input: {
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    
})