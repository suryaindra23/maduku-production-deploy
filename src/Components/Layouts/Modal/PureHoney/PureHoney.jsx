import React, { useState } from "react"
import Modal from "../Modal"
import "../../../../Assets/dist/custommodal.scss"
import multiflora from "../../../../Assets/img/purehoney/Multiflora.jpg"
import durian from "../../../../Assets/img/purehoney/Durian.jpg"
import randu from "../../../../Assets/img/purehoney/Randu.jpg"
import kelengkeng from "../../../../Assets/img/purehoney/Kelengkeng.jpg"
import kopi from "../../../../Assets/img/purehoney/Kopi.jpg"
import kaliandra from "../../../../Assets/img/purehoney/Kaliandra.jpg"
import rambutan from "../../../../Assets/img/purehoney/Rambutan.jpg"

export default function PureHoney(props) {
  const [selected, selectItem] = useState(0)

  const products = [
    {
      id: 1,
      title: "Madu Multiflora",
      image: multiflora,
      desc: [
        "Menurunkan Berat Badan",
        "Membantu Pencernaan",
        "Meredakan Efek Buruk Kolesterol",
        "Sebagai Penyegar Nafas",
        "Menjaga Sistem Kekebalan Tubuh",
        "Digunakan Masker wajah",
      ],
    },
    {
      id: 2,
      title: "Madu Durian",
      image: durian,
      desc: [
        "Menguatkan imun tubuh",
        "Sumber energi dan obat",
        "Menurunkan kolesterol",
        "Meningkatkan kekebalan tubuh",
      ],
    },
    {
      id: 3,
      title: "Madu Randu",
      image: randu,
      desc: [
        "Memperbaiki sistem pencernaan",
        "Menghilangkan Bau mulut",
        "Mengobati Demam",
        "Mengobati Batuk",
        "Mengobati Pilek/flu",
      ],
    },
    {
      id: 4,
      title: "Madu Kelengkeng",
      image: kelengkeng,
      desc: [
        "Meningkatkan Daya Tahan Tubuh",
        "Menyembuhkan Luka",
        "Menjadi Sumber Energi Bagi Tubuh",
        "Obat Alami Flu dan Batuk",
        "Mengobati asam lambung/maag",
      ],
    },
    {
      id: 5,
      title: "Madu Kopi",
      image: kopi,
      desc: [
        "Menjaga Kesehatan Tekanan Darah",
        "Mengontrol Kadar Gula Darah",
        "Mencerahkan Kulit",
        "Menyehatkan Otak",
        "Membantu program diet",
      ],
    },
    {
      id: 6,
      title: "Madu Kaliandra",
      image: kaliandra,
      desc: [
        "Meningkatkan Daya Tahan Tubuh",
        "Menambah Nafsu Makan Anak",
        "Menyembuhkan Luka",
        "Mengobati Sariawan",
        "Menambah berat badan",
      ],
    },
    {
      id: 7,
      title: "Madu Rambutan",
      image: rambutan,
      desc: [
        "Menguatkan Sistem Imun Tubuh",
        "Menjadi Sumber Energi Bagi Tubuh",
        "Obat Alami Flu dan Batuk",
        "Solusi mencegah Diabetes",
        "Menjaga Kesehatan Tekanan Darah",
      ],
    },
    {
      id: 8,
      title: "Madu Mangga",
      image: multiflora,
      desc: [
        "Mengobati anemia",
        "Menghilangkan rasa mual",
        "Meningkatkan fungsi otak",
        "Memperlancar urine",
      ],
    },
  ]

  return (
    <Modal show={props.show} handleClose={props.hideModal}>
      <div className="ModalContainer">
        <div className="PureHoneyContainer">
          <nav>
            <ul style={{ listStyle: "none", cursor: "pointer" }}>
              {products.map((p, i) => {
                return (
                  <li key={i} onClick={() => selectItem(p.id - 1)}>
                    {p.title}
                  </li>
                )
              })}
            </ul>
          </nav>
          <div>
            <h2>Kelebihan {products[selected].title}</h2>
            <ul>
              {products[selected].desc.map((d, i) => {
                return <li key={i}>{d}</li>
              })}
            </ul>
          </div>
          <img
            src={products[selected].image}
            alt="pure honey"
            width="240"
            height="240"
            style={{ borderRadius: "50%", margin: "12px" }}
          />
        </div>
      </div>
    </Modal>
  )
}
