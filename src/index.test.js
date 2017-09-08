import {expect} from 'chai';
import  jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test',()=>{
  it('should pass',()=>{
    expect(true).to.equal(true);
  });
});

describe('index.html',() => {
  it('should say hello', (done)=> {       //for html elements should have an async test as they load asynchronously. Else they will return true that's why we are using done
    const index = fs.readFileSync('./src/index.html',"utf-8");
    jsdom.env(index,function(err,window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).equal("Hello Dileep!");
      done();
      window.close();
    });
  });
});
