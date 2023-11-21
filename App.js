import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import Home from "./src/screens/Homepage/Home";
import images from "./src/constants/images";

const App = () => {
    return (
        <ImageBackground
            source={images.backgroundBlur}
            style={{ flex: 1 }}
            resizeMode="stretch">
            <Home />
        </ImageBackground>
    );
}

export default App;