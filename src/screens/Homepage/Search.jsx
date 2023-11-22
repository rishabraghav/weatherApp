import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";
import axios from "axios";

const Search = ({handleSearch, city, setCity}) => {



    const handleChange = (e) => {
        setCity(e);
    }


    
    return (
        <View style={styles.container}>
        <View style={styles.searchContainer}>
            <TextInput placeholder="Enter city name"
                style={styles.search}
                placeholderTextColor="white"
                onChangeText={handleChange}
                value={city}
            />
        </View>
        <TouchableOpacity onPress={handleSearch} style={styles.searchButtonContainer}>
                <Image source={icons.searchButton} resizeMode="contain" style={styles.searchButton}/>
        </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },  
    searchContainer: {
        backgroundColor: "gray",
        opacity: 0.4,
        margin: 30,
        marginRight: 15,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 20,
        width: "75%"
    },
    search: {
        height: 20,
        color: "white",
        fontSize: 15,
        fontWeight: 700
    },
    searchButtonContainer: {
        backgroundColor: "gray",
        opacity: 0.4,
        borderRadius: 20,
        padding: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        height: 28,
        width: 28
    }
})



export default Search;