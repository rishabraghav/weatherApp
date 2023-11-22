import { Image, StyleSheet, Text, View } from "react-native";
import images, { weatherImages } from "../../constants/images";
import icons from "../../constants/icons";

const Weather = ({ data }) => {
    function formatTime(inputTime) {
        const [datePart, timePart] = inputTime.split(' '); // Split the date and time parts
        const [year, month, day] = datePart.split('-'); // Split the date into year, month, and day
        const [hour, minute] = timePart.split(':'); // Split the time into hour and minute
      
        const inputDate = new Date(year, month - 1, day, hour, minute); // Note: Months are 0-indexed in JavaScript
        const formattedTime = inputDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
      
        return formattedTime;
      }
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={weatherImages[data?.current?.condition?.text]} style={styles.image} />
            </View>


            <Text style={styles.tempText}>{data?.current?.temp_c}&#176;</Text>
            <Text style={styles.conditionText}>{data?.current?.condition?.text}</Text>

            <View style={{flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 30}}>
                <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
                    <Image source={icons.wind} style={styles.icons}/>
                    <Text style={{color: "white"}}>{data?.current?.wind_kph}km</Text>
                </View>
                <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
                    <Image source={icons.humidity} style={styles.icons}/>
                    <Text style={{color: "white"}}>{data?.current?.humidity}%</Text>
                </View>
                <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
                    <Image source={icons.time} style={styles.icons} />
                    <Text style={{color: "white"}}>{formatTime(String(data?.current?.last_updated))}</Text>
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    icons: {
        height: 25,
        width: 25
    },
    imgContainer: {
        margin: 20,
        marginVertical: 50
    },
    image: {
        height: 250,
        width: 250,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    tempText: {
        fontSize: 55,
        color: "white",
        fontWeight: "900",
        margin: 20
    },
    conditionText: {
        fontSize: 20,
        fontWeight: "600",
        color: "white",
        opacity: 0.6
    }
})

export default Weather;