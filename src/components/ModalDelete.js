import React from "react";
import './ModalDelete.css'

function ModalDelete({setOpenModalDelete, handleModalDelete}) {

    return (
            <div className="modalDelete">
                <h3>Czy na pewno chcesz usunąć?</h3>
                <button className="btnModal" onClick={() => setOpenModalDelete(false)} >Anuluj</button>
                <button className="btnModal" onClick={()=> handleModalDelete()} >Usuń</button>
            </div>
        )
}

export default ModalDelete;