import _ from 'lodash';
import moment from 'moment';

const VueDateFilters = {
    install(Vue, options) {

        const formatDate = (date, format) => {
            if (moment.isMoment(date)) {
                return date.format(format);
            } else {
                date = _.get(date, "date", date).replace('.000000', '');

                if (moment(date, 'YYYY-MM-DD HH:mm:SS').format('YYYY-MM-DD HH:mm:SS') === date) {
                    return moment.utc(date, 'YYYY-MM-DD HH:mm:SS').format(format);
                }

                return moment.utc(date).format(format);
            }
        };

        const globalOptions = _.assign({
            local: true,
            format: {
                datetime: {
                    written: {
                        small: "MMM Do, h:mm a", // Jan 4th, 10:33 am
                        medium: "MMM Do, YYYY, h:mm a", // Jan 4th, 1999, 10:33 am
                        large: "dddd, MMMM Do YYYY, h:mm a", // Thursday, January 4th 1965, 10:33 am
                    },
                    small: "YY-M-D h:mm a", // 65-12-1 10:35 am
                    medium: "YYYY-M-D h:mm a", // 1965-12-1 10:35 am
                    large: "YYYY-MM-DD h:mm a" // 1965-12-01 10:35 am
                },
                date: {
                    written: {
                        small: "MMM Do", // Jan 4th
                        medium: "MMM Do, YYYY", // Jan 4th, YYYY
                        large: "dddd, MMMM Do YYYY" // Thursday, January 4th 1965
                    },
                    small: "YY-M-D", // 65-12-1
                    medium: "YYYY-M-D", // 1965-12-1
                    large: "YYYY-MM-DD" // 1965-12-01
                },
                time: {
                    small: "h:mm", // 10:35
                    medium: "h:mm a", // 10:35 am
                    large: "h:mm:ss a" // 10:35:06 am
                }
            }
        }, _.defaultTo(options, {}));

        Vue.mixin({
            filters: {
                /**
                 * Time
                 */
                time(value) {
                    if (!value) return '';
                    return formatDate(value, globalOptions.format.time.medium);
                },
                shortTime(value) {
                    if (!value) return '';
                    return formatDate(value, globalOptions.format.time.small);
                },
                longTime(value) {
                    if (!value) return '';
                    return formatDate(value, globalOptions.format.time.large);
                },

                /**
                 * Date
                 */
                date(value) {
                    if (!value) return '';
                    return formatDate(value, globalOptions.format.date.large);
                },
                shortDate(value) {
                    if (!value) return '';
                    return formatDate(value, globalOptions.format.date.medium);
                },
                writtenDate(value) {
                    if (!value) return '';
                    return formatDate(value, globalOptions.format.date.written.medium);
                },

                /**
                 * DateTime
                 */
                dateTime(value) {
                    if (!value) return '';
                    return formatDate(value, globalOptions.format.datetime.large);
                },
                shortDateTime(value) {
                    if (!value) return '';
                    return formatDate(value, globalOptions.format.datetime.medium);
                },
                writtenDateTime(value) {
                    if (!value) return '';
                    return formatDate(value, globalOptions.format.datetime.written.medium);
                },

                /**
                 * Conversions
                 */
                utcToLocal(date, format) {
                    return format ? moment.utc(date, format).local() : moment.utc(date).local();
                },
                localToUtc(date, format) {
                    return format ? moment(date, format).utc() : moment(date).local();
                }
            }
        });
    }
};

export default VueDateFilters;