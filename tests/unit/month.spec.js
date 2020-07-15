import { HckrDate } from '../../src/date';

const locale = new Intl.Locale('nl-NL');

const TestCases = [
    {
        description: 'add 1 month',
        today: '2020-01-01 00:00:01',
        months: 1,
        expectedResult: '1-2-2020 00:00:01',
    },
    {
        description: 'add 11 months',
        today: '2020-01-01 00:00:01',
        months: 11,
        expectedResult: '1-12-2020 00:00:01',
    },
    {
        description: 'add 12 months',
        today: '2020-01-01 00:00:01',
        months: 12,
        expectedResult: '1-1-2021 00:00:01',
    },
];

describe.each(TestCases)(
    'Test addMonths',
    ({ description, today, months, expectedResult }) => {
        it(description, () => {
            const date = new HckrDate(today);
            date.addMonths(months);
            expect(date.toLocaleString(locale)).toBe(expectedResult);
        });
    }
);

describe('Test addMonth', () => {
    const date = new HckrDate('2020-01-01 00:00:01');

    it('add a month', () => {
        date.addMonth();
        expect(date.toLocaleString(locale)).toBe('1-2-2020 00:00:01');
    });

    it('add another month', () => {
        date.addMonth();
        expect(date.toLocaleString(locale)).toBe('1-3-2020 00:00:01');
    });
});
