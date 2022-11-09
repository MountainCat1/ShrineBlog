import { useSearchParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ShrineDto} from "../../types/dtos";
import {getShrineApi} from "../../services/shrinesApi";

export default function (){
    const [searchParams, ] = useSearchParams();
    const [dto, setDto] = useState<ShrineDto>();
    useEffect(() => {
        let dtoGuid = searchParams.get("guid");

        if(dtoGuid == null)
            return;

        getShrineApi(dtoGuid).then(r => {
            setDto(r);
        });

    }, [])

    return (<div className={'page-content'}>
        <h1>{dto?.name}</h1>

        <p>
            {dto?.description}
        </p>

        <img src={dto?.imageUrl} alt={'shrine image'}/>

    </div>)
}