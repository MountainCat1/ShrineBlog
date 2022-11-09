import {ShrineDto} from "types/dtos";


export async function getShrinesApi(amount : number) : Promise<Array<ShrineDto>> {
    const returnArray: ShrineDto[] = [];

    for (let i = 0; i < amount; i++) {
        returnArray.push({
            guid: "fake-guid-uwu-" + i,

            name: "Some Shrine",
            description: "Some description",
            imageUrl: "https://picsum.photos/200/200"
        })
    }

    return returnArray;
}

export async function getShrineApi(guid : string) : Promise<ShrineDto> {

    return {
        guid: guid,

        name: "Some Shrine",
        description: "Some description",
        imageUrl: "https://picsum.photos/200/200"
    };
}