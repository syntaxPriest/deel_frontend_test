import { ReactNode } from "react";

export type DataProps = Array<{
        name: string,
        description: string
    }>

export type selectedProps = {
    index: number,
    name: string
}

export interface mainPageStateProps {
    showResult: boolean;
    showSuggestions: boolean;
    searchString: string;
    mainData: DataProps,
    filteredFruits: DataProps,
    selectedItem: selectedProps
}

export interface ModalProps {
    children?: ReactNode;
    headerText?: string;
    showModal?: boolean;
    showSuggestions?: boolean;
    closeFunc: () => void;
    data?: DataProps,
    selectedItem?: selectedProps,
    handleStateChange?: any;
    searchQuery?: string;
}

export interface DispatchStateChange {
    state: string;
    value: any;
}

export interface SearchCompProps {
    openResult: () => void;
    closeSuggestion: () => void;
    handleTextChange: (e:any) => void;
    handleStateChange: any;
    showSuggestions: boolean;
    searchString: string;
    data:DataProps,
    selectedItem?: selectedProps,
}