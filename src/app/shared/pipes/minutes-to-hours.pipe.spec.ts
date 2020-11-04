import { MinutesToHoursPipe } from './minutes-to-hours.pipe';

describe('MinutesToHoursPipe', () => {
  
  it('create an instance', () => {
    const pipe = new MinutesToHoursPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "100" to "1h 40min"', () => {
    const pipe = new MinutesToHoursPipe();
    expect(pipe.transform(100)).toBe('1h 40min');
  });

});
