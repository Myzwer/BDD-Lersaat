<template>
    <div>
		<!-- START HEADER -->
		<div class="bg-primary bg-gradient-to-b from-primary to-primary-gradient text-white">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6 md:order-2">
					<div class="relative">
						<div class="title-content-text">
							<div class="content-middle text-center">
								<h1 class="text-7xl mb-2 px-2">Schedule</h1>
								<h2 class="text-xl font-bold uppercase body-font">
									{{ hashtag }}
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-schedule-header">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END HEADER -->


		<!-- START SCHEDULE -->
		<div class="bg-secondary bg-gradient-to-b from-secondary to-secondary-gradient text-black">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="schedule-content-text">
							<div class="content-middle-medium text-center py-10">
								<div class="col-span-12 md:col-span-6 text-left px-5 md:pl-16">
									<h2 class="text-5xl pb-5">Schedule</h2>
									<ScheduleList
										v-for="schedule in schedules"
										:key="schedule.time"
										:time="schedule.time"
										:event="schedule.event"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-schedule-body">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END SCHEDULE -->
    </div>
</template>

<script>
import ScheduleList from '~/components/ScheduleList'
import { schedules, tagline } from '~/data/data.json'
export default {
    name: 'EventSchedule',
    components: { ScheduleList },
    data() {
        return {
            schedules,
            hashtag: tagline.hashtag,
        }
    },
}
</script>

<style>
.half-content-schedule-header {
    background: url('~static/images/schedule/schedule-head.jpg');
    height: 60vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
@media screen and (min-width: 40em) {
	.half-content-schedule-header {
		height: 75vh;
	}
}

.half-content-schedule-body{
	background: url('~static/images/schedule/schedule-side.jpg');
	height: 60vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}
@media screen and (min-width: 40em) {
	.half-content-schedule-body {
		height: 75vh;
	}
}

@media screen and (min-width: 40em) {
	.schedule-content-text {
		height: 75vh;
	}
}

</style>
