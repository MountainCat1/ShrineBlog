import './ShrineEntry.css'

import {ShrineDto} from "types/dtos";
import React from "react";
import {NavLink} from "react-router-dom";

interface ShrineEntryProps {
    shrineDto : ShrineDto | undefined
}

const ShrineEntry: React.FC<ShrineEntryProps> =(
    {
        shrineDto = null
    }) => {

    return (<div className={'shrine-entry'}>
        <div className={'shrine-entry-text'}>
            <h2>{shrineDto?.name}</h2>
            <span>{shrineDto?.description}</span>
        </div>
        <div className={'shrine-entry-button-area'}>
            <img src={shrineDto?.imageUrl} alt={'shrine image'}/>
            <NavLink
                className = 'shrine-entry-button'
                to={(`/shrine/${shrineDto?.guid}`)}>
                <span className={'shrine-entry-button-text'}>Więcej</span>
            </NavLink>
        </div>
    </div>)
}
export default ShrineEntry;

