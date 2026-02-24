"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { SiteData, defaultData, loadData, saveData } from "./data";

interface DataContextType {
    data: SiteData;
    setData: (data: SiteData) => void;
    resetData: () => void;
    isLoaded: boolean;
}

const DataContext = createContext<DataContextType>({
    data: defaultData,
    setData: () => { },
    resetData: () => { },
    isLoaded: false,
});

export function DataProvider({ children }: { children: React.ReactNode }) {
    const [data, setDataState] = useState<SiteData>(defaultData);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setDataState(loadData());
        setIsLoaded(true);
    }, []);

    const setData = useCallback((newData: SiteData) => {
        setDataState(newData);
        saveData(newData);
    }, []);

    const resetData = useCallback(() => {
        setDataState(defaultData);
        saveData(defaultData);
    }, []);

    return (
        <DataContext.Provider value={{ data, setData, resetData, isLoaded }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
