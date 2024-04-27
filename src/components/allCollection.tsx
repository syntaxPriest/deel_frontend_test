import React from "react";
import { DataProps, selectedProps } from "../utils/types";
import { ReactComponent as CheckIcon} from "../icons/check.svg"

export default function AllCollection ({
    data,
    handleStateChange,
    selectedItem,
    closeFunc
}: {
    data: DataProps, 
    handleStateChange: any, 
    selectedItem: selectedProps,
    closeFunc: () => void;
}){
    return(
        <>
           <div>
                <div className="scroll-wrapper">
                    {
                        (data && data.length > 0) ?
                            data.map((item, index) => (
                                <div 
                                className={`result-card flex between ${selectedItem?.name === item?.name ? "bg-grey" : ""}`}
                                    style={index === data.length - 1 ? {
                                        border: 'none'
                                    } : {}}
                                    key={index}
                                    onClick={() => {
                                        if (index !== selectedItem?.index){
                                            handleStateChange({
                                                state: "selectedItem",
                                                value: {
                                                    index,
                                                    name: item.name
                                                }
                                            })
                                            closeFunc();
                                        }
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '90%'
                                        }}
                                    >
                                        <h3
                                            style={{
                                                fontSize: '15px',
                                                color: "#161616"
                                            }}
                                        >
                                            {item.name}
                                        </h3>
                                        <p className="">
                                            {item.description}
                                        </p>
                                    </div>
                                    {
                                        selectedItem?.name=== item?.name && (
                                            <CheckIcon />
                                        )
                                    }
                                </div>
                            ))
                            : 
                            <p className="indicator-text">
                                Sorry, there are no fruits for purchase at the moment.
                            </p>
                    }
                </div>
           </div>
        </>
    )
}