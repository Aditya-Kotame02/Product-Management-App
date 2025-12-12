import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native'
import EditText from '../components/EditText'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import { addProduct, deleteProduct, displayAllProducts } from '../services/product'

export default function HomeScreen({navigation}) {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [serial_no, setSerialNo] = useState('')
    const [products, setProducts] = useState([])

    //Fetch All Products
    const fetchProducts = async() => {
       const data = await displayAllProducts()
       if(data && data.data)
           setProducts(data.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [products])

    const goUpdate = (item) => {
        navigation.navigate('UpdateProduct', {product: item})
    }

    //Add Product
    const additem = async () => {
        const result = await addProduct(name, category, price, quantity, serial_no)
        if(result['status'] == 'success'){
            alert('Product Added Successfully')
            setName('')
            setCategory('')
            setPrice('')
            setQuantity('')
            setSerialNo('')

            fetchProducts()
        }
        else{
            alert('Failed To Add The Product')
        }
        console.log(result)
    }

    //Delete Product
    const deleteProd = async (id) => {
        try {
            const result = await deleteProduct(id) 
            if(result && result.status == 'success'){
                alert('Product Deleted Successfully')
                fetchProducts()
            }
            else{
                alert('Something Went wrong!')
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Add Product Details</Text>
        <EditText
            placeholder='Name'
            value={name}
            onChangeText={setName}
        />
        <EditText
            placeholder='Category'
            value={category}
            onChangeText={setCategory}
        />
        <EditText
            placeholder='Price'
            value={price}
            onChangeText={setPrice}
        />
        <EditText
            placeholder='Quantity'
            value={quantity}
            onChangeText={setQuantity}
        />
        <EditText
            placeholder='Serial No'
            value={serial_no}
            onChangeText={setSerialNo}
        />
        <Button
            backgroundColor='blue'
            onPress={additem}
            title='Save'
            marginTop={20}
        />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        style={{width: "100%", marginTop: 20}}
        renderItem={({item}) => (
            <View style={styles.view1}>
                <Text style={styles.view1Text}>
                    {item.name} - {item.serial_no}
                </Text>

                <Button 
                    backgroundColor='red'
                    title='DELETE'
                    marginTop={10}
                    onPress={() => {
                        deleteProd(item.id)
                    }}
                />

                <Button
                    backgroundColor='green'
                    title='UPDATE=>'
                    marginTop={10}
                    onPress={() => goUpdate(item)}
                 />
            </View>
        )}
      />
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
    view1: {
        padding: 15,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "#f2f2f2"
    },
    view1Text:{
        fontSize: 16,
        fontWeight: '500',
    },
})