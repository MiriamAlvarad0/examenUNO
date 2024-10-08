import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"; 
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
    const navigation = useNavigation();
    return ( 
        <View>
            <Text 
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >  
            </Text>
    
            <TouchableOpacity
                onPress={() => navigation.navigate("Stack")}
                style={{
                    backgroundColor: "purple",
                    width: 150,
                    height: 30,
                    borderRadius: 100,
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    Go to Stack
                </Text>
            </TouchableOpacity>

            <ScrollView style={styles.container}>
                <Text style={styles.title}>Soy un pug dogo</Text>
                 
            <Image
                source={require('../assets/pug.jpg')} 
                style={styles.image}
            />
            </ScrollView>
            
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20, 
        backgroundColor: '#f5f5f5',

    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    image: {
        width: '100%', 
        height: 300,  
        borderRadius: 0, 
        marginBottom: 0,
        resizeMode: 'contain', 
    }
   
});

export default HomeScreen;
