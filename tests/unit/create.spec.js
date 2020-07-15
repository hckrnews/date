import { HckrDate } from '../../src/date';

const locale = new Intl.Locale('nl-NL');

describe('Instance', () => {
    it('Test create HckrDate create', () => {
        const date = HckrDate.create('24-12-1982', 'd-m-Y');

        expect(date.toLocaleString(locale)).toBe('24-12-1982 00:00:00');
    });
});
