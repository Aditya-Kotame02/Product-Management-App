import { View, Text, StyleSheet } from 'react-native'
import EditText from '../components/EditText';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { updateProduct } from '../services/product';

export default function UpdateProduct({route, navigation}) {

    const {product} = route.params

    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price.toString())
    const [quantity, setQuantity] = useState(product.quantity.toString())

    const updateItem = async() => {
        const result = await updateProduct(product.id, name, price, quantity)

        if(result.status == 'success'){
            alert("Product Updated Successfully")
            navigation.goBack()
        }
        else{
            alert("Failed to update")
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>Update Product</Text>

            <EditText 
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />

            <EditText 
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
            />

            <EditText 
                placeholder="Quantity"
                value={quantity}
                onChangeText={setQuantity}
            />

            <Button
                title='Update'
                marginTop={20}
                onPress={updateItem}
             />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    innerContainer: {
        alignItems:'center',
        backgroundColor: 'lightgray',
        borderRadius: 10,
        margin: 15,
        padding: 15,
        elevation: 5,
    },
    title: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 15,
    },
})