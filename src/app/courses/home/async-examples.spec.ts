import { fakeAsync, flush, flushMicrotasks, tick } from '@angular/core/testing';
import { delay, of } from 'rxjs';

xdescribe('Async Testing Examples', function () {
  it('Async test example with jasmine done()', function (done: DoneFn) {
    let test = false;
    setTimeout(() => {
      console.log('running assertions');
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  });
  it('Async test example - setTimeOut()', fakeAsync(function () {
    let test = false;
    setTimeout(() => {});
    setTimeout(() => {
      console.log('running assertions 2');
      test = true;
    }, 1000);
    //tick(1000);
    flush();

    expect(test).toBeTruthy();
  }));
  it('Async test example - plain promise', fakeAsync(function () {
    let test = false;
    console.log('Creating Promise');

    Promise.resolve()
      .then(() => {
        console.log('Promise first then() evaluated successfully');

        return Promise.resolve();
      })
      .then(() => {
        console.log('Promise second then() evaluated successfully');
        test = true;
      });
    flushMicrotasks();
    console.log('Running test Assertions');
    expect(test).toBeTruthy();
  }));
  it('Async test example - Promises + setTimeout()', fakeAsync(function () {
    let counter = 0;
    Promise.resolve().then(() => {
      counter += 10;
      setTimeout(() => {
        counter += 1;
      }, 1000);
    });
    expect(counter).toBe(0);
    flushMicrotasks();
    expect(counter).toBe(10);
    tick(500);
    expect(counter).toBe(10);
    tick(500);
    expect(counter).toBe(11);
  }));
  it('Async test example - Observables', fakeAsync(function () {
    let test = false;
    console.log('Creating Observable');
    const test$ = of(test).pipe(delay(1000));
    test$.subscribe(() => {
      console.log('set the flag to true');
      test = true;
    });
    tick(1000);
    console.log('Running test Assertions');
    expect(test).toBe(true);
  }));
});
