import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LessonDetails from '@/json/LessonsDetails';
import Lesson from '@/json/lesson';

const image = {
  uri: 'https://yeshmn-assets.s3.ap-southeast-1.amazonaws.com/subjectCover_v8n9uv014f.png',
};

const BannerImage = { uri: 'https://yesh.mn/images/countdown.webp' };

const ProfileImage = { uri: 'https://yesh.mn/images/quiz.webp' };

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
    <ScrollView style={styles.container}>
      <ImageBackground source={ProfileImage} style={styles.contain}>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/images/ .jpg')} style={styles.image} />
          <Text style={styles.sayhello}> Eysh</Text>
        </View>
        <Text style={styles.sayhello}>Эрх авах</Text>
      </ImageBackground>
      <ImageBackground source={BannerImage} style={styles.bannerImageStyle}>
        <Text style={styles.bannerStyle}>ЭЕШ эхлэхэд 88 өдөр үлдсэн байна.</Text>
      </ImageBackground>
      <Text style={styles.title}>Хичээлүүд</Text>
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
      <View>
        <Text style={styles.title}>hey hey</Text>
        <Image
          source={require('../../assets/images/Screenshot 2024-04-12 at 00.06.30.png')}
          style={styles.newsfeed}
        />
      </View>
      <Text style={styles.title}>Шинэ сорилууд</Text>
      <FlatList
        horizontal
        data={LessonDetails}
        renderItem={({ item }) => {
          return (
            <View style={styles.testPosition}>
              <Text style={styles.testText}>{item.name}</Text>
              <Text style={styles.testText}>
                {item.name} {item.when}
              </Text>
              <TouchableOpacity style={styles.minut}>
                <Text style={styles.minuttext}>90 минут</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contain: {
    paddingTop: 50,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 30,
  },
  sayhello: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
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
    color: '#fff',
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
  newsfeed: {
    margin: 20,
    flexDirection: 'column-reverse',
    width: 400,
    height: 290,
    borderRadius: 30,
  },
  bannerImageStyle: {
    paddingVertical: 25,
    margin: 23,
  },
  testPosition: {
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,.10)',
    borderRadius: 20,
    margin: 20,
    height: '65%',
  },
  testText: {
    fontWeight: '600',
    fontSize: 13,
    margin: 15,
  },
  minut: {
    backgroundColor: '#4fa2f5',
    borderRadius: 20,
    width: '70%',
    height: '20%',
    marginTop: 20,
    marginLeft: 30,
  },
  minuttext: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});
