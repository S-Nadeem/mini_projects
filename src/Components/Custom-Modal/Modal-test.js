import { useState } from "react";
import "./styles.css";
import Modal from "./Modal";
export default function ModalTest() {
  const [openModal, setopenModal] = useState(false);

  const handleOpenModal = () => {
    setopenModal(!openModal);
  };
  return (
    <>
      <div className="modal_container">
        <button onClick={handleOpenModal} className="popup_button">
          Open Popup Modal
        </button>
        {openModal && (
          <Modal
            header={<div>This is Header</div>}
            body={"this is customized body"}
            footer={"this is customized footer"}
          />
        )}
      </div>
    </>
  );
}
