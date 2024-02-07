'use client'
import React, { createContext, useContext, ReactNode } from 'react';

// 位置情報の型定義
interface LocationData {
    country?: string;
    regionName?: string;
    city?: string;
    zip?: string;
    lat?: number;
    lon?: number;
    [key: string]: any;
}

// コンテキストの型定義
interface LocationContextType {
    postLocation: () => void;
}

// コンテキストの作成
export const LocationContext = createContext<LocationContextType | undefined>(undefined);

// プロバイダコンポーネントの定義
export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // alert("aaaaa")
    const postLocation = () => {
        console.log("あああああああ")
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ip = data.ip;
                fetch(`http://ip-api.com/json/${ip}`)
                    .then(response => response.json())
                    .then((locationData: LocationData) => {
                        fetch('http://localhost:8080', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(locationData),
                        })
                            .then(response => response.json())
                            .catch(error => console.error('Error:', error));
                    });
            });
    };

    return (
        <LocationContext.Provider value={{ postLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

// カスタムフック
export const useLocation = () => {
    const context = useContext(LocationContext);
    if (context === undefined) {
        throw new Error('useLocation must be used within a LocationProvider');
    }
    return context;
};
