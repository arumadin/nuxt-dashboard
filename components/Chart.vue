<script setup lang="ts">

let props = defineProps(['currentCategory', 'data'])
let data = props.data || [1, 2, 3]
let currentCategory = props.currentCategory || "today"

// Create categories (x-axis)
type categoriesProp = Ref<{
    [key: string]: string[]
}>

let categories: categoriesProp = ref({
    'today': [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
    ],
    'week': [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ],
    'year': [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ]
})

// Define chart
const chartOptions = computed(() => (
    {
        chart: {
            type: 'line',
            animation: false
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        title: {
            text: 'Chart Title'
        },
        xAxis: {
            categories: categories.value[currentCategory.value]
        },
        yAxis: {
            gridLineColor: 'transparent',
            title: {
                text: ''
            }
        },
        plotOptions: {
            line: {
                marker: {
                    enabled: false
                },
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'line',
            lineWidth: '4px',
            color: {
                linearGradient: {},
                stops: [
                    [0, 'rgba(244, 139, 214, 1)'],
                    [0.25, 'rgba(244, 199, 86, 1)'],
                    [0.5, 'rgba(65, 189, 203, 1)'],
                    [1, 'rgba(200, 105, 219, 1)']
                ]
            },
            data: props.data
        }]
    }
))

// Generate month category
function generateMonth() {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1
    let currentYear = currentDate.getFullYear()

    function generateMonthDates() {
        let monthDates = []
        let daysInMonth = new Date(currentYear, currentMonth, 0).getDate()

        for (let i = 1; i <= daysInMonth; i++) {
            let dayString = ("0" + i).slice(-2)
            let monthString = ("0" + currentMonth).slice(-2)
            monthDates.push(monthString + "/" + dayString)
        }

        return monthDates
    }

    let month = generateMonthDates()
    categories = ({ ...categories, ...month })
    return month
}

onMounted(() => {
    generateMonth()
})
</script>

<template>
    <div class="border p-4 rounded">
        <highchart :options="chartOptions" />
    </div>
</template>

<style lang="scss" scoped></style>