import React from 'react';
import{Text, View, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
   <View style={styles.body}>
    <Text style={styles.h1}>BERITA UTAMA</Text>
      <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#f0ffff', paddingLeft:5, paddingTop:5}}>
        <Image source={require('./Gambar/Gambar1.jpg')} style={styles.gambar}/>
          <View style={{flex:1}}>
             <Text style={styles.topik}>SOSOK INSPIRATIF</Text>
             <Text style={styles.p}>Cerita Inspiratif: 4 Mantan Pembantu Rumah Tangga yang Menjadi Orang Sukses</Text>
          </View>
      </View>
      <View style={styles.container}>
        <Image source={require('./Gambar/Gambar2.jpg')} style={styles.gambar}/>
          <View style={{flex:1}}>
             <Text style={styles.topik}>BISNIS</Text>
             <Text style={styles.p}>Keren! Anomali Coffer Bisa Raup 450 Juta per Bulan. Begini Fakta-Faktanya</Text>
          </View>
      </View>
      <View style={styles.container}>
        <Image source={require('./Gambar/Gambar3.jpg')} style={styles.gambar}/>
          <View style={{flex:1,}}>
             <Text style={styles.topik}>BERITA</Text>
             <Text style={styles.p}>Beli Reksadana Online, Ada 4 Situs Terbaru yang Bisa Diandalkan untuk Pemula</Text>
          </View>
      </View>
      <View style={styles.container}>
        <Image source={require('./Gambar/Gambar4.jpg')} style={styles.gambar}/>
          <View style={{flex:1,}}>
             <Text style={styles.topik}>BISNIS</Text>
             <Text style={styles.p}>Mau Berbisnis, Tapi Belum Memiliki Visi Bisnis yang Kuat? Coba Jawab 7 Pertanyaan Ini</Text>
          </View>
      </View>
   </View> 
   
  )

};

export default App;

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#dcdcdc', 
    paddingLeft:5, 
    paddingRight:5
  },

  h1:{
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom:3
  },

  container:{
    flexDirection:'row', 
    alignItems:'center', 
    backgroundColor:'#f0ffff', 
    paddingLeft:5
  },

  topik:{
    color:'#d3d3d3',
    fontSize: 13
  },

  p:{
    fontSize:18,
    fontWeight:'bold'
  },

  gambar:{
    width:100, 
    height:100, 
    marginRight:10
  }


});