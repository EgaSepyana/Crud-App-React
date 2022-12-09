import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const api = "http://localhost:8080"

const Notif = (props) => {
    const refreshPage = ()=>{
        window.location.reload()
    }
    const {
        buttonLabel = "Hapus",
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const Hapus = () => {
        axios.delete(api + `/books/${props.id}`).then(res => {
            if (res.status === 204) {
                refreshPage()
            }
        })
    }
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} close={closeBtn}>Alert</ModalHeader>
                <ModalBody>
                    Apakah Anda Yakin Ingin Menghapus Data Buku <b>{props.title}</b> ?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={Hapus}>Hapus</Button>{' '}
                    <Button color="primary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Notif;
