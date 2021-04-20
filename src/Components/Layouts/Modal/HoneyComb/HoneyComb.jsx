import React from 'react';

import Modal from "../Modal";
import "../../../../Assets/dist/custommodal.scss";

export default function HoneyComb(props) {
    return (
        <Modal show={props.show} handleClose={props.hideModal}>
            <div className="ModalContainer">
                <div className="ModalTitleHoneyComb">
                    <h1>Manfaat Sarang Madu</h1>
                </div>
                <h1 style={{marginLeft: "24px"}}>6 Manfaat Konsumsi Sarang Madu</h1>
                <ol>
                    <li>Mempercepat penyembuhan luka</li>
                    <li>Menurunkan kolesterol jahat</li>
                    <li>Melindungi fungsi hati</li>
                    <li>Membantu proses metabolisme glukosa</li>
                    <li>Menjaga kesehatan mulut</li>
                    <li>Mengobati peradangan akibat bakteri atau virus</li>
                </ol>
                <p style={{marginLeft: "24px", marginRight: "24px"}}>Berbagai macam vitamin, mineral, dan protein dalam sarang madu dapat meningkatkan sistem imun tubuh. Tak hanya itu, peradangan akibat bakteri maupun virus juga bisa diatasi dengan mengonsumsi sarang madu. Kandungan bioflavonoidnya berfungsi membunuh jamur, bakteri, atau virus dalam tubuh.</p>
            </div>
        </Modal>
    )
}