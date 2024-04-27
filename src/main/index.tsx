import React, { useEffect, useState } from "react";
import Componentcard from "../components/componentCard";
import Modal from "../components/modal";
import AllCollection from "../components/allCollection";
import { DispatchStateChange, mainPageStateProps } from "../utils/types";
import Fruits from "../utils/fruits.json"

export default function MainPage (){

    const [pageState, setPageState] = useState<mainPageStateProps>({
        showResult: false,
        showSuggestions: false,
        searchString: "",
        mainData: Fruits,
        filteredFruits: Fruits,
        selectedItem: {
            index: -1,
            name: ""
        }
    })

    // Handle State Change across app 
    const handleStateChange = (props: DispatchStateChange) => {
        setPageState((prev) => { return {
            ...prev,
            [props?.state]: props.value
        }})
    }

    // Functions Runs to close modal and after Modal closes.
    const closeResultModal = () => {
        handleStateChange({
            state: "showResult",
            value: false
        })
    }

    // Search and Filter Function
    const filterItemFunc = (searchQuery: string) => {
        if (searchQuery){
            // Filter if fruit name includes search query
            return pageState?.mainData.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
    }

    // Calls whenever search query changes or there is a new search query
    useEffect(() => {
        if (pageState?.searchString){
            const mockData = filterItemFunc(pageState?.searchString);
            handleStateChange({
                state: 'filteredFruits',
                value: mockData
            })
        }
    }, [pageState?.searchString])

    console.log(pageState)

    return(
        <>
            <div className="main-wrapper">
                <div className="card-holder flex centered-flex">
                    <Componentcard 
                        data={pageState?.filteredFruits}
                        openResult={() => handleStateChange({
                            state: "showResult",
                            value: true
                        })}
                        handleTextChange={(e) => handleStateChange({
                            state: "searchString",
                            value: e?.target?.value
                        })}
                        closeSuggestion={() => handleStateChange({
                            state: "showSuggestions",
                            value: false
                        })}
                        handleStateChange={handleStateChange}
                        showSuggestions={pageState?.showSuggestions}
                        searchString={pageState?.searchString}
                        selectedItem={pageState?.selectedItem}
                    />
                </div>
            </div>
            <Modal
                showModal={pageState?.showResult}
                closeFunc={() => closeResultModal()}
                children={
                    <AllCollection 
                        data={pageState?.mainData}
                        handleStateChange={handleStateChange}
                        selectedItem={pageState?.selectedItem} 
                        closeFunc={() => closeResultModal()}
                    />
                }
                headerText={`Fruits (${pageState?.mainData.length})`}
            />
        </>
    )
}