import {ShrineDto} from "types/dtos";


export async function getShrinesApi(pageSize : number, pageNumber: number) : Promise<Array<ShrineDto>> {
    const returnArray: ShrineDto[] = [];

    for (let i = 0; i < pageSize; i++) {
        returnArray.push({
            guid: "fake-guid-uwu-" + i * pageNumber,

            name: "Some Shrine",
            shortDescription: "Some short description",
            description: "Some very very looong looong description. Some very very very looong description. Some very very looong description description description description. Some very very very looong description. Some very very looong description. Some very very looong description. Some very very looong looong description. Some very very  very looong description. Some very very looong description description description. Some very very looong description. Some very very looong description description. Some very very looong description.",
            imageUrl: "https://picsum.photos/200/200"
        })
    }

    return returnArray;
}

export async function getShrineApi(guid : string) : Promise<ShrineDto> {

    return {
        guid: guid,

        name: "Some Shrine",
        shortDescription: "Some short description",
        description: "Some very very looong looong description. Some very very very looong description. Some very very looong description description description description. Some very very very looong description. Some very very looong description. Some very very looong description. Some very very looong looong description. Some very very  very looong description. Some very very looong description description description. Some very very looong description. Some very very looong description description. Some very very looong description.",
        imageUrl: "https://picsum.photos/200/200"
    };
}