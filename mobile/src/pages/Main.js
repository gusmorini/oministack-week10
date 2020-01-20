import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main({ navigation }) {

    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitiaPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004,
                });

            }
        }
        loadInitiaPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -23.6118947, longitude: -53.2068599 }}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/32224862?s=460&v=4' }}></Image>
                <Callout onPress={() => {
                    //navegação
                    navigation.navigate('Profile', { github_username: 'gusmorini' });
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Gustavo Morini</Text>
                        <Text style={styles.devBio}>bio ...</Text>
                        <Text style={styles.devTechs}>ReactJS, Nodejs, PHP</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    }
})

export default Main;