import cinSeddi from "../src/assets/pictures/cin-seddi.jpg";
import pamuk from "../src/assets/pictures/pamuk.jpg";
import tarkan from "../src/assets/pictures/tarkan.jpg";
import fobi from "../src/assets/pictures/fobi.jpg";
import balik from "../src/assets/pictures/balik.jpg";
import bandira from "../src/assets/pictures/bandira.jpg";
import billboard from "../src/assets/pictures/billboard.jpg";
import parfum from "../src/assets/pictures/parfum.jpg";
import trex from "../src/assets/pictures/trex.jpg";
import mutluluk from "../src/assets/pictures/mutluluk.jpg";
const questions = [
  {
    id:1,
    question: "1-Çin Seddini oluşturan taşlar birbirine ne ile tutturulmuştur?",
    options: ["Bambu Harcı", "Anne Duası", "Pirinç Unu", "Noodle"],
    answer: "Pirinç Unu",
    media: cinSeddi,
  },
  {
    id:2,
    question: "2-İlk Pamuk şekeri bulan kişinin mesleği nedir?",
    options: ["Gıda Mühendisi", "Diş Doktoru", "Ev Hanımı", "Güzellik Uzmanı"],
    answer: "Diş Doktoru",
    media: pamuk,
  },
  {
    id:3,
    question:
      "3-Tarkan'ın 'Hüp' klibini izledikten sonra gaza gelip 'Tarkan keşke beni hüpletseydi' diye açıklamda bulunan kişi kimdir?",
    options: ["Gülben Ergen", "Hülya Avşar", "Harika Avcı", "Sevtap Parman"],
    answer: "Gülben Ergen",
    media: tarkan,
  },
  {
    id:4,
    question: "4-Pteronofobi nedir?",
    options: [
      "Yeşil ışık yanar yanmaz korna çalacak korkusu",
      "Fakir kalma korkusu",
      "Taksi bulamama korkusu",
      "Kuş tüyüyle gıdıklanma korkusu",
    ],
    answer: "Kuş tüyüyle gıdıklanma korkusu",
    media: fobi,
  },
  {
    id:5,
    question:
      "5-Ortalama ömürleri 5 yıl olan Japon balıklarının en uzun yaşayanı Tish, bütün istatistikleri alt üst ederek kaç yıl boyunca hayata tutunmayı başarmıştır?",
    options: ["43", "78", "23", "99"],
    answer: "43",
    media: balik,
  },
  {
    id:6,
    question:
      "6-90'lara damgasını vuran 'Bandıra Bandıra' şarkısının söz yazarı kimdir?",
    options: ["Sezen Aksu", "Sibel Can", "Mustafa Sandal", "Bülent Ersoy"],
    answer: "Mustafa Sandal",
    media: bandira,
  },
  {
    id:7,
    question:
      "7-Hangi şarkıcımız yine kendisi gibi şarkıcı olan sevgilisinden ayrıldıktan sonra tam evinin karşısındaki apartmanın tamamını kendi posteriyle kaplatmıştır?",
    options: ["Hande Yener", "Hadise", "Gülşen", "Simge"],
    answer: "Hadise",
    media: billboard,
  },
  {
    id:8,
    question: "8-Antik Roma'da kadınlar parfüm olarak ne kullanıyordu?",
    options: ["Gül Suyu", "Bal", "Gladyatör Teri", "Kan"],
    answer: "Gladyatör Teri",
    media: parfum,
  },
  {
    id:9,
    question: "9-T-Rex'in yaşayan en yakın akrabası aşağıdakilerden hangisidir?",
    options: ["İnekler", "Tavuklar", "Timsahlar", "Köpekler"],
    answer: "Tavuklar",
    media: trex,
  },
  {
    id:10,
    question:
      "10-Her şeyin olduğu gibi mutluluğun da fobisi varmış. Bu fobiye ne ad verilir?",
    options: ["Çerofobi", "Euphobia", "Felicifobia", "Mutluluk Korkusu"],
    answer: "Çerofobi",
    media: mutluluk,
  }
];

export default questions;
