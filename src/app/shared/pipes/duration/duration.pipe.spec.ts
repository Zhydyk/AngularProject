import { DurationPipe } from './duration.pipe';

const duration = new DurationPipe();

describe('DurationPipe', () => {
  it('create an instance DurationPipe', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should show only minutes', () => {
    const minutes = duration.transform(10);
    expect(minutes).toEqual('10min');
  });

  it('should show hours and minutes', () => {
    const minutes = duration.transform(60);
    expect(minutes).toEqual('1h 0min');
  });
});
