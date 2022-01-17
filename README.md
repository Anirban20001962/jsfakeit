
![alt text](https://raw.githubusercontent.com/Anirban20001962/jsfakeit/main/logo.png)

# JsFakeit

A random data generator written in Javascript

## Installation

```js
npm install jsfakeit
```

## Features
- [100+ functions](#funtions)
- Browser Support
- Typescript support
- [Potential replacement of faker.js](https://www.npmjs.com/package/faker)
- [Issues](https://github.com/Anirban20001962/jsfakeit/issues)

## Simple Usage

```js
const jsfakeit = require('jsfakeit');

console.log(jsfakeit.email()); // sidneykiehn@batz.com
console.log(jsfakeit.name()); // Kirsten Cummerata
console.log(jsfakeit.phone()); //  6280187616
console.log(jsfakeit.company()); // Navico
console.log(jsfakeit.jobTitle()); // Consultant
console.log(jsfakeit.color()); //   Pink
console.log(jsfakeit.currencyShort()); //  ISK
console.log(jsfakeit.hackerPhrase()); // You can't {hackerverb} the {hackernoun} without {hackeringverb} the {hackeradjective} {hackerabbreviation} {hackernoun}!
console.log(jsfakeit.bS()); // Graphical User Interface
```

## Functions

This package has the following functions: -

### Address

```ts
street: string // streent name
city: string // city name
state: string // state name
country: string // coutnry name
zip: string // zip name
longitude: number // longitude
latitude: number // latitude
address: Address // complete address
```

### Animal

```ts
petName: string // Pet Name
animalType: string // Animal Type
farmAnimal: string // Farm Animal
animal: string // Animal
cat: string // Cat
dog: string // Dog
```
### Auth

```ts
userName: string // Username
password(num,lower,upper,numeric,special,space): string // Password
```

### Beer

```ts
beerName: string // Beer Name
beerStyle: string // Beer style
beerHop: string // Beer Hop
beerMalt: string // Beer Malt
beerYeast: string // Beer Yeast
beerAlcohol: string // Beer Alcohol level
beerIbu: string // Beer Alcohool level
beerBlg: string // Beer Blg value
```

### Car

```ts
carType: string // Car Type
carFuel: string // Car Fuel
carTransmission: string // Car Transmission Type
carBrand:  string // Car Brand
carModel: string // Car Model
carYear: number // Car Year
car: CarDetail // complete car details
```

### Actor

```ts
celebrityActor: string // Actor
celebrityBusiness: string // Businessman
celebritySport: string // Sport Star
```

### Color 

```ts
safeColor: string // Safe Color
color: string // Full Color
hexColor: string // Hex Code Color
rgbColor: string // RGB color
```

### Company 

```ts
company: string // Company Name
companySuffix: string // Company Suffix
buzzWord: string // Buzzwords
bS: string // company bs
jobTitle: string // Job title
jobDescriptor: string // Job Descriptor
jobLevel: string // Job Level
job: Job // Complete Job Details
```

### Emoji

```ts
emoji: string // Emoji
emojiDescriptor: string // Emoji Descriptor
emojiCategory: string // Emoji Category
emojiAlias: string // Emoji Alias
emojiTag: string // Emoji Tag
```

### File

```ts
mimeType: string // Mimetype
extension: string // Extension
```

### Food

```ts
fruit: string // Fruit
vegetable: string // Vegetable
breakfast: string // Breakfast
lunch: string // Lunch
dinner: string // Dinner
snack: string // Snack
dessert: string // Dessert
```

### Hacker

```ts
hackerPhrase: string // Hacker Phrase
hackerAbbreviation: string // Hacker Abbreviation
hackerAdjective: string // Hacker Adjective
hackerNoun: string // Hacker Noun
hackerVerb: string // Hacker Verb
hackeringVerb: string // Hacker ingverb
```

### Hipster

```ts
hipsterWord: string // Single hipster word
```

### Internet

```ts
domainSuffix: string // Domain Suffix
httpMethod: string // Http Method
httpStatusCode: string // HttpStatus Code
httpStatusCodeSimple: string // Simple status code
domainName: string // Domain name
url: string // Url
ipv4Address: string // ipv4Address
ipv6Address: string // ipv6Address
macAddress: string // macAddress
logLevel: string // log level
linuxPlatformToken: string // linux platfrom
macPlatformToken: string // mac platfrom
windowsPlatformToken: string // window platfrom
httpVersion: string // http version
randomPlatform: string // random platform
operaUserAgent: string // opera browser user agent string
firefoxUserAgent: string // firefox user agent browswer string
chromeUserAgent: string // chrome browser user agent string
```

### Payement

```ts
currencyLong: string  // long currency
currencyShort: string // short currency
currency: CurrencyInfo // currency information
price(min,max): number // formatted price
creditCardType: string // random credit card type string
creditCardExp: string // credit card expiration date string
creditCardNumber: string // random credit card number
creditCardCvv(type): string // random credit card cvv
creditCard: CreditCard // credit Card
achRouting: string // 9-digit AchRouting number
achAccount: string // 12-digit AchAccount number
isLuhn(num): boolean // checks is the given number is luhn number
bitcoinAddress: string // random bitcoin address consisting of numbers, upper and lower characters
bitcoinPrivateKey: string // bitcoin private key base58 consisting of numbers, upper and lower characters
```

### Person

```ts
person: Personinfo // Complete person details
name: string // Name
firstName: string // First Name
lastName: string // Last Name
nameSuffix: string // name prefix
ssn: string // SSN
gender: string // Gender
hobby: string // Hobby
phone: string // Phone
phoneFormatted: string // phone formatted number
email: string // Email
contact: string // ContactInfo
```

### Time

```ts
year: number // Year
day: number // Day
month: number // Month
date: Date // Date in utc format
```