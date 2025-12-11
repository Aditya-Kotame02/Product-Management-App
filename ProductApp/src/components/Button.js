import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({onPress, title, marginTop, backgroundColor}) {
  return (
    <TouchableOpacity
        style={[styles.container, {marginTop: marginTop ? marginTop : 0, backgroundColor: backgroundColor || '#007AFF' } ]}
        onPress={onPress}
    >
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})