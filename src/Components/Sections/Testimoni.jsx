import React from "react"
import Carousel from "../Utils/Carousel"

// Image Gallery
import DefaultOne from "../../Assets/img/profile/defaultone.jpg"
import DefaultTwo from "../../Assets/img/profile/defaulttwo.jpg"
import ProfileOne from "../../Assets/img/profile/profileone.jpg"
import ProfileTwo from "../../Assets/img/profile/profiletwo.jpg"
import ProfileThree from "../../Assets/img/profile/profilethree.jpg"
import ProfileFour from "../../Assets/img/profile/profilefour.jpg"
import ProfileFive from "../../Assets/img/profile/profilefive.jpg"
import ProfileSix from "../../Assets/img/profile/profilesix.jpg"
import ProfileSeven from "../../Assets/img/profile/profileseven.jpg"
import ProfileEight from "../../Assets/img/profile/profileeight.jpg"
import ProfileNine from "../../Assets/img/profile/profilenine.jpg"

export default function Testimoni() {
  const contents = [
    {
      src: DefaultOne,
      name: "xchairunnisax",
      marketplace: "Shopee",
      caption:
        "Udah beberapa kali beli di sini. Pengiriman cepat sesuai deskripsi. Produk yg varian Multi Flora ini rasa manisnya lembut, bukan yg manis banget sampe bikin tenggorokan kerasa agak panas. Teksturnya jg ga kental bgt, agak soft. Enak. Ortu saya pake buat campuran minuman herbal. Thank you❤",
    },
    {
      src: DefaultTwo,
      name: "endijuna2017",
      marketplace: "Shopee",
      caption:
        "enak madu durennya, madu asli, sampe jerigennya agak melembung karena gas yg dihasilkan madu, packing aman dan baik pengiriman lumayan cepat terimakasih",
    },
    {
      src: ProfileOne,
      name: "venantdr",
      marketplace: "Shopee",
      caption:
        "Sudah langganan dengan madu ini, sudah coba macam-macam varian, semuanya enak dan yang terpenting madunya ASLI. Seller juga baik dan ramah. 2x pemesanan sebelumnya pembelian saya gak dikasih sendok kayu karena kehabisan, pas pembelian ini langsung diberikan 3 sendok kayu. Terima kasih banyak yaaa...",
    },
    {
      src: ProfileTwo,
      name: "putriintan69",
      marketplace: "Shopee",
      caption:
        "Mendarat dengan selamat, makasih seller & shopee. Semoga promil bisa berhasil. Kemasan rapih, segel, aman tanpa bocor bubble tebel dapet Gift sendokkayu cantik bgt! So far murah dgn ada Royal jelly, bee pollen dan Propolisnya 😊😊👍👍",
    },
    {
      src: ProfileThree,
      name: "mentariayu04",
      marketplace: "Shopee",
      caption:
        "Barang sesuai pict, kemasan rapih, seller fast response, pengiriman di hari yang sama jadi 2hr madu dah sampe Bogor. Rasa madunya ueenaakkk pooolllll, semoga bisa turunkan BB 😚😚😚😚😚😚😚😚😚",
    },
    {
      src: ProfileFour,
      name: "ayuhariaz",
      marketplace: "Shopee",
      caption:
        "Real pict! Pengemasan super rapih, admin ramah, pengiriman cepat cuma 2 hari padahal ke lampung, bubble wrap tebal, Rasa enak Bismillah khasiatnya luar biasa. Tks Seller 👍👍👍 😍😍😍😍😍😍😍",
    },
    {
      src: ProfileFive,
      name: "inongferaalhikmah",
      marketplace: "Shopee",
      caption:
        "sesuai dengan pesanan. madu'y enak ga nyekat d tenggorokan. sellernya ramah bgt, d tanya ini itu pasti jawab. packing'y jga rapi dan aman.. saya suka saya suka",
    },
    {
      src: ProfileSix,
      name: "tan3hanna",
      marketplace: "Shopee",
      caption:
        "Sangat memuaskan... maaf baru beri penilaian. Barang cepat sampai. Dan rasanya juga enak. InsyaAllah jadi langganan disini. Ada macam2 madu dijual disini.. semoga bapak segera sembuh dengan konsumsi madu.",
    },
    {
      src: ProfileSeven,
      name: "nurulheavensangel",
      marketplace: "Shopee",
      caption:
        "Masya Allah bru prtama beli madu dsni langsung cobain memang pas buat anak madu Kaliandra nya dg tekstur lumer pas d mulut gak trllu kental aroma ny gak kuat bgd trs manis ny pas gak nyelekit gak bkin gigi ngilu dpt bonus sendok kayu juga, insya Allah mau berlangganan madu ny dsni makasih kk",
    },
    {
      src: ProfileEight,
      name: "daimotoratnawang",
      marketplace: "Shopee",
      caption:
        "Ni orderan sy yg kedua..yg pertama madu kaliandra..skg sy cobain madu multiflora...Madunya enak ...sy awam soal madu..cuma setelah konsumsi pure honey ini sakit maag sy ga perna kambuh lagi..",
    },
    {
      src: ProfileNine,
      name: "Byty.shop",
      marketplace: "Shopee",
      caption:
        "Udah dicoba 4 cara mengetes keaslian madu. Alhamdulillah asli. Bakalan langganan ini. Makasih �",
    },
  ]

  return (
    <div className="testimoni-app">
      <div className="overlay"></div>
      <div className="title">
        <h1>
          <span>Testimoni</span>
        </h1>
      </div>
      <div className="container">
        <Carousel contents={contents} />
      </div>
    </div>
  )
}
