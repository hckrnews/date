import { HckrDate } from '../../src/date';

const locale = new Intl.Locale('nl-NL');

const TestCases = [
    {
        description: 'add 1 day',
        today: '2020-01-01 00:00:01',
        days: 1,
        expectedResult: '2-1-2020 00:00:01',
    },
    {
        description: 'add 30 days',
        today: '2020-01-01 00:00:01',
        days: 30,
        expectedResult: '31-1-2020 00:00:01',
    },
    {
        description: 'add 31 days',
        today: '2020-01-01 00:00:01',
        days: 31,
        expectedResult: '1-2-2020 00:00:01',
    },
    {
        description: 'add 366 days',
        today: '2020-01-01 00:00:01',
        days: 366,
        expectedResult: '1-1-2021 00:00:01',
    },
];

describe.each(TestCases)(
    'Test addDates',
    ({ description, today, days, expectedResult }) => {
        it(description, () => {
            const date = new HckrDate(today);
            date.addDays(days);
            expect(date.toLocaleString(locale)).toBe(expectedResult);
        });
    }
);

describe('Test addDate', () => {
    const date = new HckrDate('2020-01-01 00:00:01');

    it('add a day', () => {
        date.addDay();
        expect(date.toLocaleString(locale)).toBe('2-1-2020 00:00:01');
    });

    it('add another day', () => {
        date.addDay();
        expect(date.toLocaleString(locale)).toBe('3-1-2020 00:00:01');
    });
});
