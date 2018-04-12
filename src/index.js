import _ from 'lodash';
import moment from 'moment';

const VueDates = {
    install(Vue, options) {

        const globalOptions = _.assign({
            local: true,
            format: {
                datetime: {
                    written: {
                        small: "MMM Do, h:mm a", // Jan 4th, 10:33 am
                        medium: "ddd, MMM Do, h:mm a", // Thur, Jan 4th, 10:33 am
                        large: "dddd, MMMM Do YYYY, h:mm a", // Thursday, January 4th 1965, 10:33 am
                    },
                    small: "YY-M-D h:mm a", // 65-12-1 10:35 am
                    medium: "YYYY-M-D h:mm a", // 1965-12-1 10:35 am
                    large: "YYYY-MM-DD h:mm a" // 1965-12-01 10:35 am
                },
                date: {
                    written: {
                        small: "MMM Do", // Jan 4th
                        medium: "ddd, MMM Do", // Thur, Jan 4th
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
                    return this.$vueDates.formatDate(value, globalOptions.format.date.medium);
                },
                shortTime(value) {
                    if (!value) return '';
                    return this.$vueDates.formatDate(value, globalOptions.format.date.medium);
                },
                longTime(value) {
                    if (!value) return '';
                    return this.$vueDates.formatDate(value, globalOptions.format.time.large);
                },

                /**
                 * Date
                 */
                date(value) {
                    if (!value) return '';
                    return this.$vueDates.formatDate(value, globalOptions.format.date.large);
                },
                shortDate(value) {
                    if (!value) return '';
                    return this.$vueDates.formatDate(value, globalOptions.format.date.medium);
                },
                longDate(value) {
                    if (!value) return '';
                    return this.$vueDates.formatDate(value, globalOptions.format.date.large);
                },
                writtenDate(value) {
                    if (!value) return '';
                    return this.$vueDates.formatDate(value, globalOptions.format.date.written.small);
                },

                /**
                 * DateTime
                 */
                dateTime(value) {
                    if (!value) return '';
                    return this.$vueDates.formatDate(value, globalOptions.format.datetime.large);
                },
                shortDateTime(value) {
                    if (!value) return '';
                    return this.$vueDates.formatDate(value, globalOptions.format.datetime.small);
                },
                longDateTime(value) {
                    if (!value) return '';
                    return this.$vueDates.formatDate(value, globalOptions.format.datetime.large);
                },
                writtenDateTime(value) {
                    if (!value) return '';
                    return this.$vueDates.formatDate(value, globalOptions.format.datetime.written.small);
                },
            }
        });

        Vue.prototype.$vueDates = {
            cleanDate(date) {
                return _.get(date, "date", date).replace('.000000', '');
            },
            formatDate(date, format) {
                date = this.cleanDate(date);

                if (moment(date, 'YYYY-MM-DD HH:mm:SS').format('YYYY-MM-DD HH:mm:SS') === date) {
                    return this.toLocal(date, 'YYYY-MM-DD HH:mm:SS').format(format);
                }

                return this.toLocal(date).format(format);
            },
            toLocal(date, format) {
                return format ? moment.utc(date, format).local() : moment.utc(date).local();
            },
            toUtc(date, format) {
                return format ? moment.utc(date, format).local() : moment.utc(date).local();
            }
        };
    }
};

export default VueDates;