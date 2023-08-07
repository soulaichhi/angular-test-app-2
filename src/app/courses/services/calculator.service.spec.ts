import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

xdescribe('CalculatorService', () => {
  let calculator: CalculatorService, loggerSpy: any;
  beforeEach(() => {
    console.log('calling beforeEach');
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });
    calculator = TestBed.get(CalculatorService);
  });
  it('should add 2 numbers', () => {
    console.log('Add Test');
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract 2 numbers', () => {
    console.log('Subtract Test');
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
