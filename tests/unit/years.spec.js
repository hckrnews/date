import { HckrDate } from '../../src/date';

const locale = new Intl.Locale('nl-NL');

const TestCases = [
    {
        description: 'add 1 year',
        today: '2020-01-01 00:00:01',
        years: 1,
        expectedResult: '1-1-2021 00:00:01',
    },
    {
        description: 'add 11 years',
        today: '2020-01-01 00:00:01',
        years: 2,
        expectedResult: '1-1-2022 00:00:01',
    },
    {
        description: 'add 12 years',
        today: '2020-01-01 00:00:01',
        years: 200,
        expectedResult: '1-1-2220 00:00:01',
    },
];

describe.each(TestCases)(
    'Test addYears',
    ({ description, today, years, expectedResult }) => {
        it(description, () => {
            const date = new HckrDate(today);
            date.addYears(years);
            expect(date.toLocaleString(locale)).toBe(expectedResult);
        });
    }
);

describe('Test addYear', () => {
    const date = new HckrDate('2020-01-01 00:00:01');

    it('add a year', () => {
        date.addYear();
        expect(date.toLocaleString(locale)).toBe('1-1-2021 00:00:01');
    });

    it('add another year', () => {
        date.addYear();
        expect(date.toLocaleString(locale)).toBe('1-1-2022 00:00:01');
    });
});
