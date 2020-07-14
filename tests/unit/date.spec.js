import { HckrDate } from '../../src/date';

const original = new HckrDate();

describe('Instance', () => {
    it('Test if the original output from HckrDate is a instance of HckrDate', () => {
        expect(original instanceof HckrDate).toBeTruthy();
    });

    it('Test if the original output from HckrDate is a instance of Date', () => {
        expect(original instanceof Date).toBeTruthy();
    });
});
