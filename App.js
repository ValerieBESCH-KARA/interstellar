import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoBloc}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/lereacteur-apollo/image/upload/v1684153265/apollo/lereacteur/React%20Native/logo-imdb_tj4n8g.png",
          }}
          style={styles.logo}
        />
      </View>

      <View style={styles.backgroundColor}>
        <View style={styles.marginLeft}>
          <Text style={styles.title1}>Interstellar</Text>
          <View style={styles.infoBloc}>
            <Text style={styles.info}>2014</Text>
            <Text style={styles.info}>PG-13</Text>
            <Text style={styles.info}>2h49min</Text>
            <Text style={styles.info}>Adventure, Drama, Scie-Fi</Text>
          </View>
        </View>

        <View style={styles.filmBloc}>
          <Image source={require("./assets/film.jpg")} style={styles.film} />
          <View style={styles.filmDescription}>
            <Text style={styles.filmInfo}>
              A team of explorers travel through a woormhole in space an attempt
              to ensure humanity's survival.
            </Text>
            <TouchableOpacity>
              <Text style={styles.buttonFilm}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.starBloc}>
          <View style={styles.star}>
            <FontAwesome name="star" size={20} color="yellow" />
            <Text style={styles.starText}>8.6/10</Text>
            <Text style={styles.starSubtext}>1.1M</Text>
          </View>

          <View style={styles.star}>
            <Feather name="star" size={20} color="white" />
            <Text style={styles.starText}> RATE THIS</Text>
            <Text> </Text>
          </View>

          <View style={styles.star}>
            <MaterialCommunityIcons
              name="square-circle"
              size={20}
              color="green"
            />
            <Text style={styles.starText}>Metascore</Text>
            <Text style={styles.starSubtext}>46 critic reviews</Text>
          </View>
        </View>
      </View>

      <View style={styles.backgroundColor}>
        <View style={styles.characterBloc}>
          <Text style={styles.h2}>Top Billed Cast</Text>
          <TouchableOpacity>
            <Text style={styles.buttonCharacterText}>SEE ALL</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal style={styles.allCharacters}>
          <View style={styles.characterInfo}>
            <Image
              source={require("./assets/matthew.jpg")}
              style={styles.picture}
            />
            <Text style={styles.actor} numberOfLines={1} ellipsizeMode="tail">
              Matthew McConaughey
            </Text>
            <Text style={styles.characterName}>Cooper</Text>
          </View>

          <View style={styles.characterInfo}>
            <Image
              source={require("./assets/anne.jpg")}
              style={styles.picture}
            />
            <View>
              <Text style={styles.actor}>Anne Hathaway</Text>
              <Text style={styles.characterName}>Brand</Text>
            </View>
          </View>

          <View style={styles.characterInfo}>
            <Image
              source={require("./assets/jessica.jpg")}
              style={styles.picture}
            />
            <Text style={styles.actor}>Jessica Chastain</Text>
            <Text style={styles.characterName}>Murph</Text>
          </View>

          <View style={styles.characterInfo}>
            <Image
              source={require("./assets/mackenzie.jpg")}
              style={styles.picture}
            />
            <Text style={styles.actor}>Mackenzie Foy</Text>
            <Text style={styles.characterName}>young Murph</Text>
          </View>
        </ScrollView>

        <View>
          <Text style={styles.h3}>Director</Text>
          <Text style={styles.name}>Christopher Nolan</Text>
        </View>

        <View style={styles.writters}>
          <Text style={styles.h3}>Writers</Text>
          <Text style={styles.name}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  logoBloc: {
    backgroundColor: "#393939",
    height: 60,
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
  logo: {
    height: 30,
    width: 50,
    marginLeft: 5,
  },
  iconBloc: {
    height: 150,
  },
  starBloc: {
    height: 50,
    flexDirection: "row",

    marginBottom: 20,
  },
  star: {
    justifyContent: "center",
    flex: 3,
    alignItems: "center",
  },
  starText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  starSubtext: {
    color: "white",
    fontSize: 12,
  },
  backgroundColor: {
    backgroundColor: "#212121",
    marginBottom: 15,
  },
  marginLeft: {
    marginLeft: 5,
  },
  infoBloc: {
    flexDirection: "row",
    gap: 7,
  },
  title1: {
    color: "white",
    paddingTop: 15,
    fontSize: 35,
  },
  info: {
    color: "white",
    fontSize: 14,
    paddingTop: 15,
  },
  filmBloc: {
    marginTop: 20,
    marginLeft: 5,
    flexDirection: "row",
    marginBottom: 20,
  },
  film: {
    height: 130,
    width: 100,
  },
  filmDescription: {
    flex: 2,
  },
  filmInfo: {
    color: "white",
    fontSize: 12,
    marginLeft: 5,
    marginRight: 10,
  },
  buttonFilm: {
    color: "white",
    backgroundColor: "#0177BD",
    marginLeft: 5,
    marginTop: 10,
    marginRight: 5,
    fontSize: 13,
    textAlign: "center",
    padding: 5,
    borderRadius: 5,
  },
  characterBloc: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  h2: {
    color: "white",
    fontSize: 25,
    marginLeft: 5,
  },
  buttonCharacterText: {
    color: "#0177BD",
    marginRight: 10,
  },
  allCharacters: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  characterInfo: {
    backgroundColor: "#2A2A2A",
    paddingBottom: 15,
    marginRight: 10,
  },
  picture: {
    height: 200,
    width: 120,
    marginBottom: 15,
  },
  actor: {
    color: "white",
    fontSize: 12,
    paddingLeft: 5,
    paddingRight: 5,
    width: 120,
  },
  characterName: {
    color: "white",
    paddingLeft: 5,
    fontSize: 10,
  },
  h3: {
    color: "white",
    fontSize: 12,
    marginLeft: 5,
    marginTop: 15,
  },
  name: {
    color: "white",
    fontSize: 12,
    marginLeft: 5,
  },
  writters: {
    marginBottom: 30,
  },
});
