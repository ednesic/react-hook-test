import SectionsReducer, { SectionNames } from './Sections';

describe('SectionsReducer', () => {
  it('SectionsReducer test', () => {
    Object.keys(SectionNames).forEach((sectionName) => {
      const ret = SectionsReducer('', { type: sectionName });
      expect(ret).toEqual(SectionNames[sectionName].api);
    });
  });
});
