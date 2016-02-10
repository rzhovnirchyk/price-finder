'use strict';

// set the timeout of these tests to 10 seconds
jasmine.getEnv().defaultTimeoutInterval = 10000;

const PriceFinder = require('../../lib/price-finder');
const priceFinder = new PriceFinder();

function verifyPrice(price) {
  expect(price).toBeDefined();
  // we can't guarantee the price, so just make sure it's a number
  // that's more than -1
  expect(price).toBeGreaterThan(-1);
}

function verifyName(actualName, expectedName) {
  expect(actualName).toEqual(expectedName);
}

function verifyCategory(actualCategory, expectedCategory) {
  expect(actualCategory).toEqual(expectedCategory);
}

describe('price-finder for Google Play URIs', () => {
  // Digital Music
  describe('testing a Digital Music item', () => {
    // Atoms for Peace : Amok
    const uri = 'https://play.google.com/store/music/album/Atoms_For_Peace_AMOK?id=Be75bldondlktwhxyhnehpk6ozu';

    it('should respond with a price for findItemPrice()', (done) => {
      priceFinder.findItemPrice(uri, (err, price) => {
        expect(err).toBeNull();
        verifyPrice(price);
        done();
      });
    });

    it('should respond with a price, and the right category and name for findItemDetails()', (done) => {
      priceFinder.findItemDetails(uri, (err, itemDetails) => {
        expect(err).toBeNull();
        expect(itemDetails).toBeDefined();

        verifyPrice(itemDetails.price);
        verifyName(itemDetails.name, 'AMOK');
        verifyCategory(itemDetails.category, 'Digital Music');

        done();
      });
    });
  });

  // Movies & TV
  describe('testing a Movies & TV item', () => {
    // Big
    const uri = 'https://play.google.com/store/movies/details/Big?id=uBohu3ZBg9g';

    it('should respond with a price for findItemPrice()', (done) => {
      priceFinder.findItemPrice(uri, (err, price) => {
        expect(err).toBeNull();
        verifyPrice(price);
        done();
      });
    });

    it('should respond with a price, and the right category and name for findItemDetails()', (done) => {
      priceFinder.findItemDetails(uri, (err, itemDetails) => {
        expect(err).toBeNull();
        expect(itemDetails).toBeDefined();

        verifyPrice(itemDetails.price);
        verifyName(itemDetails.name, 'Big');
        verifyCategory(itemDetails.category, 'Movies & TV');

        done();
      });
    });
  });

  // Mobile Apps
  describe('testing a Mobile Apps item', () => {
    // Plants vs Zombies
    const uri = 'https://play.google.com/store/apps/details?id=com.popcap.pvz_na';

    it('should respond with a price for findItemPrice()', (done) => {
      priceFinder.findItemPrice(uri, (err, price) => {
        expect(err).toBeNull();
        verifyPrice(price);
        done();
      });
    });

    it('should respond with a price, and the right category and name for findItemDetails()', (done) => {
      priceFinder.findItemDetails(uri, (err, itemDetails) => {
        expect(err).toBeNull();
        expect(itemDetails).toBeDefined();

        verifyPrice(itemDetails.price);
        verifyName(itemDetails.name, 'Plants vs. Zombies™');
        verifyCategory(itemDetails.category, 'Mobile Apps');

        done();
      });
    });
  });
});
