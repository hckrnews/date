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
}

export default HckrDate;
export { HckrDate };
