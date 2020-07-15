import { HckrDate } from '../../src/date';

const locale = new Intl.Locale('nl-NL');

const TestCases = [
    {
        description: 'add 1 week',
        today: '2020-01-01 00:00:01',
        weeks: 1,
        expectedResult: '8-1-2020 00:00:01',
    },
    {
        description: 'add 4 weeks',
        today: '2020-01-01 00:00:01',
        weeks: 4,
        expectedResult: '29-1-2020 00:00:01',
    },
    {
        description: 'add 5 weeks',
        today: '2020-01-01 00:00:01',
        weeks: 5,
        expectedResult: '5-2-2020 00:00:01',
    },
    {
        description: 'add 52 weeks',
        today: '2020-01-01 00:00:01',
        weeks: 52,
        expectedResult: '30-12-2020 00:00:01',
    },
    {
        description: 'add 53 weeks',
        today: '2020-01-01 00:00:01',
        weeks: 53,
        expectedResult: '6-1-2021 00:00:01',
    },
];

describe.each(TestCases)(
    'Test addWeeks',
    ({ description, today, weeks, expectedResult }) => {
        it(description, () => {
            const date = new HckrDate(today);
            date.addWeeks(weeks);
            expect(date.toLocaleString(locale)).toBe(expectedResult);
        });
    }
);

describe('Test addWeek', () => {
    const date = new HckrDate('2020-01-01 00:00:01');

    it('add a week', () => {
        date.addWeek();
        expect(date.toLocaleString(locale)).toBe('8-1-2020 00:00:01');
    });

    it('add another week', () => {
        date.addWeek();
        expect(date.toLocaleString(locale)).toBe('15-1-2020 00:00:01');
    });
});
