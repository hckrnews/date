import { options } from './parts';

/**
 * Date
 */
class HckrDate extends Date {
    addDay() {
        return this.addDays(1);
    }

    addDays(days) {
        let currentDate = this.getDate();
        currentDate += days;

        this.setDate(currentDate);

        return this;
    }

    addWeek() {
        return this.addWeeks(1);
    }

    addWeeks(weeks) {
        let currentDate = this.getDate();
        currentDate += weeks * 7;

        this.setDate(currentDate);

        return this;
    }

    addMonth() {
        return this.addMonths(1);
    }

    addMonths(months) {
        let currentMonth = this.getMonth();
        currentMonth += months;

        this.setMonth(currentMonth);

        return this;
    }

    addYear() {
        return this.addYears(1);
    }

    addYears(years) {
        let currentYear = this.getFullYear();
        currentYear += years;

        this.setFullYear(currentYear);

        return this;
    }

    static create(rawDate, format) {
        const regex = Object.entries(options).reduce(
            (tempValue, [key, value]) => tempValue.replace(key, value.regex),
            format
        );

        const formatParts = format
            .split('')
            .filter((char) => options.hasOwnProperty(char));

        const dateParts = rawDate.match(new RegExp(regex));

        const newDate = new HckrDate('1970-01-01 00:00:00');

        return formatParts.reduce((tempValue, part, index) => {
            const option = options[part];
            const { setter, correction } = option;
            const newValue = parseInt(dateParts[index + 1], 10) - correction;

            tempValue[setter](newValue);

            return tempValue;
        }, newDate);
    }
}

export default HckrDate;
export { HckrDate };
