import './ShrinesPage.css'

import {useEffect, useState} from "react";
import {ShrineDto} from "types/dtos";
import {getShrinesApi} from "services/shrinesApi";
import ShrineEntry from "./ShrineEntry/ShrineEntry";

export default function (){


    const [shrines, setShrines] = useState<Array<ShrineDto>>();

    useEffect(() => {
        getShrinesData();
    }, []);

    const getShrinesData = () => {
        getShrinesApi(10).then(r => setShrines(r));
    }


    return(<div className={'page-content'}>
        <h1>
            Kapliczki
        </h1>

        <div className={'entries-container'}>
            {shrines?.map((shrineDto) => (
                <ShrineEntry key={shrineDto.guid} shrineDto={shrineDto}/>
            ))}
        </div>

    </div>)
}