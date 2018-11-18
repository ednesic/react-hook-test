import DateFuncTest from './time';

describe('Time abreviation', () => {
  describe('Just now', () => {
    it('Calls function', () => {
      const date = new Date();
      expect(DateFuncTest(date)).toEqual('Just Now');
    });
  });
  describe('Minute ago', () => {
    it('Calls function', () => {
      const date = new Date();
      date.setMinutes(date.getMinutes() - 1);
      expect(DateFuncTest(date)).toEqual('1m ago');
    });
  });
  describe('Hour ago', () => {
    it('Calls function', () => {
      const date = new Date();
      date.setHours(date.getHours() - 1);
      expect(DateFuncTest(date)).toEqual('1h ago');
    });
  });
  describe('Day', () => {
    it('Calls function', () => {
      const date = new Date(new Date().getFullYear(), 0, 1);
      expect(DateFuncTest(date)).toEqual('Jan. 1');
    });
  });
  describe('Day of another year', () => {
    it('Calls function', () => {
      const date = new Date(1542559014188);
      date.setFullYear(date.getFullYear() - 1);
      expect(DateFuncTest(date)).toEqual('Nov. 18, 2017');
    });
  });
});
