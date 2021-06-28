export type nullString = string | null;
export type nullBoolean = boolean | null;
export type nullNumber = number | null;
export type Link = {
    url: string,
    id: string,
    query?: string
}
export interface DescTable {
    title: string,
    desc: any
}
export interface CruisePhoto {
    "position":number,
    "filename":string,
    "filetype":string,
    "filesize":number,
    "description":string
}

export interface CruiseType {
}

interface Excursion {
}

interface City {
    "id":number,
    "name":string,
    "name_en":string
}

export interface Timetable {
    "id":number,
    "cruiseId":number,
    "dateArrival":string,
    "dateDeparture":string,
    "place":string,
    "cityId":number,
    "port":nullNumber,
    "description":nullString,
    "excursions": Excursion [] | null,
    "city":City,
    "hideDate":boolean,
    "hideTime":boolean
}

export interface River {

}

export interface Region {
}

interface Deck {
}

interface Cabin {
}

export interface CruiseShip {
    "id":number,
    "name":string,
    "type":number,
    "decks":Deck[],
    "cabins":Cabin[]|null
}

export interface PopularRoute {
}

export interface CabinCapacity {
}

export interface Suggestion {
    "id":number,
    "type":number,
    "title":string,
    "descr":string,
    "icon":string
}

export interface CruiseDiscount {
}

export interface Cruise {
    "id":number,
    "name":string,
    "beautifulName":nullString,
    "cruisePopular":nullBoolean,
    "dateStart":string,
    "dateEnd":string,
    "days":number,
    "nights":number,
    "route":string,
    "routeShort":string,
    "region":nullString,
    "river":nullString,
    "description":nullString,
    "routeAboveText":nullString,
    "routeBottomText":nullString,
    "include": string,
    "additional":nullString,
    "important":nullString,
    "discountsText": string,
    "min_price":number,
    "max_price":number,
    "shipType":nullNumber,
    "currency":number,
    "rate":number,
    "freeCabins":number,
    "dateStartTimestamp":number,
    "portStart":nullNumber,
    "portEnd":nullNumber,
    "weekend":nullString,
    "notesExcursions":nullString,
    "startCity":number,
    "startCityName":string,
    "startCityNameEn":string,
    "startCityCountry":number,
    "timetableDoc":string,
    "timetablePdf":string,
    "map":string,
    "tags":nullString,
    "prices":{},
    "min_price_rur":number,
    "suggestion":true,
    "without_visa":nullString,
    "russian_squad":nullString,
    "russian_squad_title":[],
    "sug":Suggestion[],
    "ship":CruiseShip,
    "discounts":CruiseDiscount[],
    "maxDiscount":number,
    "type": CruiseType | null,
    "rivers": River[],
    "regions":Region[],
    "popularRoutes":PopularRoute[],
    "cabinCapacity":CabinCapacity,
    "photos": CruisePhoto [] | null,
    "timetable": Timetable[],
    "oneWay":boolean,
    "oneMoreDayStop":boolean
}
