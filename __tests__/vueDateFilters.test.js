import VueDateFilters from '../src';
import Vue from 'vue/dist/vue.js';
import moment from "moment-timezone";
moment.tz.setDefault('CST');

describe('VueDateFilters', () => {
    Vue.use(VueDateFilters);

    beforeEach(() => {
        //language=HTML
        document.body.innerHTML = `
            <div id="app">
                <h3>Time</h3>
                <table>
                    <tr>
                        <td>time</td>
                        <td>{{ theDate | time }}</td>
                    </tr>
                    <tr>
                        <td>shortTime</td>
                        <td>{{ theDate | shortTime }}</td>
                    </tr>
                    <tr>
                        <td>longTime</td>
                        <td>{{ theDate | longTime }}</td>
                    </tr>
                </table>
                <br/>

                <h3>Date</h3>
                <table>
                    <tr>
                        <td>date</td>
                        <td>{{ theDate | date }}</td>
                    </tr>
                    <tr>
                        <td>shortDate</td>
                        <td>{{ theDate | shortDate }}</td>
                    </tr>
                    <tr>
                        <td>writtenDate</td>
                        <td>{{ theDate | writtenDate }}</td>
                    </tr>
                </table>
                <br/>

                <h3>DateTime</h3>
                <table>

                    <tr>
                        <td>dateTime</td>
                        <td>{{ theDate | dateTime }}</td>
                    </tr>
                    <tr>
                        <td>shortDateTime</td>
                        <td>{{ theDate | shortDateTime }}</td>
                    </tr>
                    <tr>
                        <td>writtenDateTime</td>
                        <td>{{ theDate | writtenDateTime }}</td>
                    </tr>
                </table>


                
                <h3>Other</h3>
                <table>
                    <tr>
                        <td>utcToLocal</td>
                        <td>{{ theDate | utcToLocal }}</td>
                    </tr>
                    <tr>
                        <td>localToUtc</td>
                        <td>{{ theDate | localToUtc }}</td>
                    </tr>
                </table>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',
        data() {
            return {
                theDate: "2018-04-05"
            };
        }
    });

    await Vue.nextTick(() => {
    });

    return {app: vm, component: vm.$children[0]};
}
