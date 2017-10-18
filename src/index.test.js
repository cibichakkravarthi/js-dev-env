// Testing using Mocha

import {expect} from 'chai'; //expect style comes with chai whoch puts inside expect variable

import jsdom from 'jsdom';
import fs from 'fs'; //interact with file sysitem using node

//our test function

describe('First test function', () => {

  it('should pass', () => {

    expect(true).to.equal(true);

  });

});

  //TEsting DOM using jsdom



  //done is used since we are making async calls
  describe('Second irst test function', () => {

      it('should pass', (done) => {

        const index = fs.readFileSync('./src/index.html','utf-8');
        jsdom.env(index, function(err, window) {
const h3 = window.document.getElementsByTagName('h3')[0];
expect(h3.innerHTML).to.equal("HELLO EXPRESS!!!");
done();
window.close();

        });

      });
    });



