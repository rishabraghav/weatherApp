import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Search from "./Search";
import Weather from "./Weather";
import { useState } from "react";
import axios from "axios";

const Home = () => {
    const [city, setCity] = useState();
    const [data, setData] = useState();

    const handleSearch = async () => {
        console.log("IN");
        const options = {
            method: 'GET',
            url: `https://api.weatherapi.com/v1/current.json?key=16a1eb6d4a624462a9a210712232111&q=${city}&aqi=no`,
        };
    
          try{
            const response = await axios.request(options);
            console.log(response.data);
            setData(response.data);
          }catch(error){
            console.error('Axios error:', error);
          
            if (error.response) {
              console.error('Response data:', error.response.data);
              console.error('Response status:', error.response.status);
              console.error('Response headers:', error.response.headers);
            } else if (error.request) {
              console.error('No response received');
              console.error('Request data:', error.request);
            } else {
              console.error('Error message:', error.message);
            }
          }
    }
    return ( 
        <SafeAreaView>
            <Search handleSearch={handleSearch}
            city={city}
            setCity={setCity} />

            <View style={{alignItems: "center"}}>
                <Text style={styles.cityText}>{data?.location?.name},</Text>
                <Text style={{fontSize: 20, fontWeight: "600", opacity: 0.5, color: "gray"}}>
                {data?.location?.region}
                </Text>
            </View>
            

            <Weather data={data} />
        </SafeAreaView>
     );
}



const styles = StyleSheet.create({
    cityText: {
        fontSize: 30,
        fontWeight: "700",
        color: "white"
    }
})
 
export default Home;