export interface AddressRandom {
    street_name: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}
export declare enum AddressEnum {
    street_name = "street_name",
    city = "city",
    state = "state",
    zip = "zip",
    country = "country"
}
export interface Address {
    address: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    latitude: number;
    longitude: number;
}
