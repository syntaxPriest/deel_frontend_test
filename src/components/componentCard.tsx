import React from "react";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as RefreshIcon } from "../icons/refresh.svg"
import { SearchCompProps } from "../utils/types";
import SuggestionsComp from "./suggestionComp";
import Fruits from "../utils/fruits.json"

export default function Componentcard({
    openResult,
    handleTextChange,
    closeSuggestion,
    data,
    handleStateChange,
    showSuggestions,
    searchString,
    selectedItem
}: SearchCompProps) {

    const handleFocus = () => {
        handleStateChange({
            state: "showSuggestions",
            value: true
        })
    };

    return(
        <>
            <div 
                className="card-wrapper"
                onClick={() => closeSuggestion()}
            >
                <h3>Search Fruit Collection</h3>
                <p className="indicator-text">
                    Looking for the perfect fruit? Search no further! Dive into our extensive collection now to find exactly what you need. Happy hunting!
                </p>
                <div>
                    {
                        (selectedItem && selectedItem?.index > -1) &&
                            <div className="search-info">
                                <p>Selected: </p>
                                <div className="basic-text-card">
                                    {selectedItem?.name}
                                </div>
                            </div>
                    }
                </div>
                <div 
                    className="input-holder"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <i>
                        <SearchIcon width={"20px"} />
                    </i>
                    <input 
                        type="text"
                        // autoFocus
                        value={searchString}
                        onChange={(e) => {
                            handleStateChange({
                                state: "searchString",
                                value: e?.target?.value
                            })
                            handleStateChange({
                                state: "showSuggestions",
                                value: true
                            })
                        }}
                        // When user clicks enter, it picks the first element on the suggestion list as selected item
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && data && data.length > 0){
                                handleStateChange({
                                    state: "searchString",
                                    value: data[0]?.name
                                })
                                handleStateChange({
                                    state: "selectedItem",
                                    value: {
                                        index: 0,
                                        name: data[0].name
                                    }
                                })
                                handleStateChange({
                                    state: "showSuggestions",
                                    value: false
                                })
                            }
                        }}
                        onFocus={handleFocus}
                    />
                    <SuggestionsComp 
                        showSuggestions={showSuggestions}
                        closeFunc={() => closeSuggestion()}
                        data={data}
                        handleStateChange={handleStateChange}
                        selectedItem={selectedItem}
                        searchQuery={searchString}
                    />
                </div>
                <div className="bottom-space flex between">
                    <div 
                        className="icon-card"
                        style={
                            searchString || (selectedItem && selectedItem?.index > -1) ? {
                                opacity: 1
                            } : {}
                        }
                        onClick={() => {
                            handleStateChange({
                                state: "searchString",
                                value: ""
                            })
                            handleStateChange({
                                state: "filteredFruits",
                                value: Fruits
                            })
                            handleStateChange({
                                state: "selectedItem",
                                value: {
                                    index: -1,
                                    name: ""
                                }
                            })
                        }}
                    >
                        <RefreshIcon 
                            width={"20px"}
                        />
                    </div>
                    <button
                        onClick={() => openResult()}
                    >See All Collections</button>
                </div>
            </div>
        </>
    )
}