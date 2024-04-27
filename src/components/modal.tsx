import React from "react";
import { ModalProps } from "../utils/types";
import { ReactComponent as XIcon } from "../icons/x.svg"

const Modal = ({
    children, 
    headerText, 
    showModal, 
    closeFunc,
} : ModalProps) => {
    return(
        <>
            {
                showModal && 
                    <div 
                        className="modal-wrapper flex centered-flex"
                        onClick={() => closeFunc()}
                    >
                        <div 
                            className="modal-child"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <div className="flex between">
                                <h3>{headerText}</h3>
                                <XIcon 
                                    width={"20px"} 
                                    onClick={() => closeFunc()}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                />
                            </div>
                            {children}
                        </div>
                    </div>
            }
            
        </>
    )
}

export default Modal;