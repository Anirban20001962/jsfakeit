"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const address_1 = require("../data/address");
const address_2 = require("../helper/address");
function randomDataChoser(data) {
    const l = address_1.address[data].length;
    const index = Math.floor(Math.random() * l);
    return address_1.address[data][index];
}
const generate = () => {
    const street = randomDataChoser(address_2.AddressEnum.street_name);
    const city = randomDataChoser(address_2.AddressEnum.city);
    const state = randomDataChoser(address_2.AddressEnum.state);
    const zip = randomDataChoser(address_2.AddressEnum.zip);
    const country = randomDataChoser(address_2.AddressEnum.country);
    const latitude = 90;
    const longitude = 180;
    const address = [street, city, state, zip].join(' ');
    return {
        address,
        street,
        state,
        city,
        country,
        latitude,
        longitude,
        zip,
    };
};
exports.generate = generate;
