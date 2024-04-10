import {
  FlatList,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Lesson from '@/json/lesson';

const image = {
  uri: 'https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/subjectCover_v8n9uv014f.png',
};

const BannerImage = { uri: 'https://yesh.mn/images/countdown.webp' };

export default function Index(): React.ReactNode {
  // const [data, setData] = useState<[]>();

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get('https://backend-demo3.vercel.app/api/graphql');
  //     console.log('response:', response);
  //     const { data } = response;
  //     setData(data.response);
  //   };

  //   getData();
  // }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={BannerImage} style={styles.contain}>
          <Text style={styles.sayhello}> Sainuuu Dulguunuu</Text>
          <Text>Эрх авах</Text>
        </ImageBackground>
        <Text style={styles.title}>Хичээлүүд</Text>
        <View>
          <FlatList
            horizontal
            data={Lesson}
            renderItem={({ item }) => {
              return (
                <ImageBackground style={styles.collection} source={image}>
                  <Text style={styles.colltextstyle2}>{item.line}</Text>
                  <Text style={styles.colltextstyle}>{item.test}</Text>
                  <Text style={styles.colltextstyle}>{item.name}</Text>
                </ImageBackground>
              );
            }}
          />
        </View>
        <ImageBackground source={BannerImage}>
          <Text style={styles.bannerStyle}>ЭЕШ эхлэхэд 88 өдөр үлдсэн байна.</Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  sayhello: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 20,
  },
  collection: {
    margin: 20,
    flexDirection: 'column-reverse',
    width: 220,
    height: 290,
    borderRadius: 30,
    textAlign: 'center',
  },
  colltextstyle: {
    fontWeight: '700',
    fontSize: 17,
    color: 'white',
    marginLeft: 25,
    marginBottom: 20,
  },
  colltextstyle2: {
    backgroundColor: '#fff',
    width: '75%',
    height: '1%',
    color: 'white',
    marginLeft: 25,
    marginBottom: 20,
  },
  bannerStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
