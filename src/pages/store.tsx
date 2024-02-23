//import "./image.css"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
//import React, { useEffect, useRef, useState } from 'react';

export function Store(){
    return <><h1 className="font-mono mb-6 text-3xl items-center justify-between">store</h1>
        <div className="grid grid-cols-3 grid-flow-row gap-12 absolute left-32">
            {storeItems.map(item=>(
            <div key={item.id}>
                <StoreItem {...item} /></div>))}
        
        </div>
    </>
}