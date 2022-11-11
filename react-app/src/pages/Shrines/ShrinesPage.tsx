import './ShrinesPage.css'

import React, {useEffect, useRef, useState} from "react";
import {ShrineDto} from "types/dtos";
import {getShrinesApi} from "services/shrinesApi";
import ShrineEntry from "./ShrineEntry/ShrineEntry";

export default function (){
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        if(ref === undefined || ref.current === null)
            return;

        const element = ref.current as HTMLDivElement;

        setHeight(element.clientHeight)
    })

    const pageSize = 10;

    const [shrines, setShrines] = useState<Array<ShrineDto>>();
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        getShrinesData();
    }, []);

    const getShrinesData = () => {
        getShrinesApi(pageSize, page).then(r => setShrines(r));
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleScroll = (e: Event) => {
        const window = e.currentTarget as Window;

        console.log(window.scrollY, window.outerHeight)
    };

    return(<div className={'page-content'}>
        <h1>
            Kapliczki
        </h1>

        <div className={'entries-container'} ref={ref}>
            {shrines?.map((shrineDto) => (
                <ShrineEntry key={shrineDto.guid} shrineDto={shrineDto}/>
            ))}
        </div>

    </div>)
}