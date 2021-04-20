import React from 'react';

import Modal from "../Modal";
import "../../../../Assets/dist/custommodal.scss";

export default function BeePollen(props) {
    return (
            <Modal show={props.show} handleClose={props.hideModal}>
                <div className="ModalContainer">
                    <div className="ModalTitleBeePollen">
                        <h1>Kelebihan Madu Bee Pollen</h1>
                    </div>
                    <h1 style={{marginLeft: "24px"}}>Kegunaan dari konsumsi Bee Pollen menjadi sangat penting bagi perawatan kesehatan, antara lain:</h1>
                    <ol>
                        <li>Mendukung proses pertumbuhan dan perkembangan anak, terutama sel jaringan otak.</li>
                        <li>Penambahan gizi bagi wanita hamil dan menyusui.</li>
                        <li>Meningkatkan daya berpikir dan daya konsentrasi baik untuk anak, remaja, usia sekolah dan dewasa.</li>
                        <li>Meningkatkan stamina tubuh bagi para penggemar olah raga, untuk mencapai prestasi tertinggi.</li>
                        <li>Meningkatkan daya kekebalan tubuh terhadap berbagai serangan bibit penyakit.</li>
                        <li>Sebagai stabilisator sistem metabolisme tubuh.</li>
                        <li>Mempertahankan dan memelihara sistem reproduksi baik pria maupun wanita.</li>
                    </ol>
                    <h1 style={{marginLeft: "24px"}}>Bagi penderita penyakit, manfaat Bee Pollen menjadi sebagai pemulih dari berbagai kelainan yaitu antara lain:</h1>
                    <ol>
                        <li>Pemulihan keletihan, fisik maupun psikis.</li>
                        <li>Menanggulangi masalah nafsu makan yang hilang akibat berbagai penyakit.</li>
                        <li>Menanggulangi kekurangan gizi.</li>
                        <li>Menghambat terjadinya proses penuaan (degenerasi) yang dini.</li>
                        <li>Menanggulangi berbagai kendala yang berhubungan dengan kelainan jantung.</li>
                        <li>Membantu masalah pada pembuluh darah (penyempitan dan kelenturan).</li>
                        <li>Menanggulangi masalah darah (kurang darah/anemia).</li>
                        <li>Membantu memulihkan gangguan sistem pencernaan (termasuk diare kronis,sulit buang air besar, infeksi usus).</li>
                        <li>Membantu kurangnya daya penglihatan akibat kekurangan gizi &amp; gangguan persendian.</li>
                        <li>Masalah lain seperti kelainan kulit yang disebabkan kekurangan zat gizi.</li>
                        <li>Menjaga jaringan yang sehat dan mencegah kanker.</li>
                        <li>Memberikan daya seksual.</li>
                        <li>Menghilangkan rasa lelah-penunjang energi.</li>
                        <li>Meringankan kelelahan mental.</li>
                        <li>Meningkatkan kekuatan daya pikir.</li>
                    </ol>
                </div>
            </Modal>
    );
}