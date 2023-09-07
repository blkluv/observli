import React from "react";
import Modal from "@/Components/Modal";

export default function AddMembers({ close, show }) {
    return (
        <Modal show={show} onClose={() => close()}>
            <div></div>
        </Modal>
    );
}
