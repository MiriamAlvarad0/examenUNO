import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SettingsScreen = () => {
    
    const [buttonColors, setButtonColors] = useState([
        "#008CBA", 
        "#28A745", 
        "#FFC107", 
        "#DC3545", 
    ]);

    const alternateColors = ["#FF5733", "#17A2B8", "#007BFF", "#6F42C1"]; 

    
    const changeColor = (index) => {
        const newColors = [...buttonColors];
        newColors[index] = newColors[index] === buttonColors[index] ? alternateColors[index] : buttonColors[index];
        setButtonColors(newColors);
    };

    return (
        <View style={styles.container}>
            {buttonColors.map((color, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.button, { backgroundColor: color }]} 
                    onPress={() => changeColor(index)} 
                >
                    <Text style={styles.buttonText}>Botón {index + 1}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        padding: 15,
        borderRadius: 5,
        marginVertical: 5, 
        width: "80%", 
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        textAlign: "center",
    },
});

export default SettingsScreen;
