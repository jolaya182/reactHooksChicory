export const SERVER = `http://prod-cart.chicoryapp.com/api/graph/`;

export const initialState = {
  retailers: [],
  selectedRetailer: {},
  currentZipCode: false,
  isBlackListOn: true,
  isWhiteListOn: false,
  blackList: [],
  whiteList: []
};
const filter = 'amazon';
const search = '';

export const query = `query retailers {
    retailers(zipCode: "11234", blacklistedRetailers: [$filter], whitelistedRetailers: []) {
    id
    slug
    shopOnLogoUrl
    logoUrl
    name
    requiresLocation
    homepage
    location {
      storeName
      address
      city
      externalId
      zipCode
      state
      distance
    }
    }
    }`;
