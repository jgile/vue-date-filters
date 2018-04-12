import Vue from 'vue';
import VueDateFilters from '../src';
import moment from "moment";

Vue.use(VueDateFilters);

new Vue({
    el: '#app',
    data(){
        return {
            theDate: moment().format("YYYY-MM-DD h:mm:ss a")
        }
    }
});
