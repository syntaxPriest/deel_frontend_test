import React from "react";
import { ModalProps } from "../utils/types";
import { ReactComponent as CheckIcon} from "../icons/check.svg"
import { highlightFoundSearchQuery } from "../utils/highlightText";

const SuggestionsComp = ({
    showSuggestions,
    searchQuery,
    data,
    closeFunc,
    selectedItem,
    handleStateChange
} : ModalProps) => {

    return(
        <>
            {
                showSuggestions && 
                    <div 
                        className="suggest-card"
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        {
                            data && data.length > 0 ?
                                data.map((item, index) => (
                                    <div 
                                        className={`suggest-wrapper flex between ${(selectedItem?.name === item?.name || (searchQuery && data && data?.length > 0 && index === 0))? "bg-grey" : ""}`}
                                        key={index}
                                        style={(index === data.length - 1)  ? {
                                            border: 'none'
                                        } : {}}
                                        onClick={() => {
                                            if (index !== selectedItem?.index){
                                                handleStateChange({
                                                    state: "selectedItem",
                                                    value: {
                                                        index,
                                                        name: item.name
                                                    }
                                                })
                                                handleStateChange({
                                                    state: "searchString",
                                                    value: item.name
                                                })
                                                handleStateChange({
                                                    state: "showSuggestions",
                                                    value: false
                                                })
                                            }
                                        }}
                                    >
                                        <p 
                                            className=""
                                            dangerouslySetInnerHTML={{__html: `${highlightFoundSearchQuery(item.name, searchQuery || '')}`}}
                                        ></p>
                                        {
                                            selectedItem?.name=== item?.name && (
                                                <CheckIcon />
                                            )
                                        }
                                    </div>
                                ))
                            : 
                            <p 
                                className="indicator-text"
                                style={{
                                    padding: '20px'
                                }}
                            >
                                Sorry, no matching result
                            </p>
                        }
                    </div>
            }
        </>
    )
}

export default SuggestionsComp;