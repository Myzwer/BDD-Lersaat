<template>
	<div>
		<!-- START HEADER -->
		<div class="bg-primary">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6 md:order-2">
					<div class="relative">
						<div class="title-content-text">
							<div class="content-middle text-white text-center">
								<h1 class="text-7xl mb-2 px-2">
									{{ groomName }} + {{ brideName }}
								</h1>
								<h2 class="text-xl font-bold uppercase body-font">
									{{ hashtag }}
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-image-header">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END HEADER -->

		<!-- START SECTION 1 - COUNTDOWN -->
		<div class="bg-secondary text-black">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-text">
							<div class="content-middle-medium text-center py-10">
									<h2 class="body-font text-xl font-bold pb-1">Save The Date</h2>
									<h1 class="body-font text-3xl uppercase">{{ weddingDate }}</h1>
									<CountdownToDate/>
								<div class="text-center mb-5">
									<a
										:href="rsvpLink"
										target="_blank"
										class="bg-accent text-white uppercase rounded-md font-bold shadow-lg px-20 py-3 transition duration-300 ease-in-out hover:bg-purple-hover mt-10"
									>
										RSVP!
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-image-1">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END SECTION 1 -->


		<!-- START SECTION 2 - GROOM -->
		<div class="bg-primary">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6 md:order-2">
					<div class="relative">
						<div class="headshot-content-text">
							<div class="content-middle-medium text-center py-10 md:px-10">
								<div class="mb-10">
									<h2 class="pt-7 text-5xl text-white">
										About {{ groomName }}
									</h2>
									<p class="text-white text-left">
										{{ groomBio.substring(0, 130) + '...' }}
									</p>
								</div>

								<div class="text-center mb-10">
									<NuxtLink
										to="/groom"
										class="text-white uppercase rounded-md font-bold border-white border-2 px-8 py-3 transition duration-300 ease-in-out hover:bg-accent mt-10"
									>
										Read More
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-image-2">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END SECTION 2 -->

		<!-- START SECTION 3 - BRIDE -->
		<div class="bg-secondary text-black">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="headshot-content-text">
							<div class="content-middle-medium text-center py-10 md:px-10">
								<div class="mb-10">
									<h2 class="pt-7 text-5xl">
										About {{ brideName }}
									</h2>
									<p class=" text-left">
										{{ brideBio.substring(0, 130) + '...' }}
									</p>
								</div>

								<div class="text-center mb-10">
									<NuxtLink
										to="/bride"
										class="text-black uppercase rounded-md font-bold border-black border-2 px-8 py-3 transition duration-300 ease-in-out hover:bg-accent mt-10"
									>
										Read More
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-image-3">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END SECTION 3 -->

		<!-- START SECTION 4 - COUPLE -->
		<div class="bg-primary text-white">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6 md:order-2">
					<div class="relative">
						<div class="headshot-content-text">
							<div class="content-middle-medium text-center py-10 md:px-10">
								<div class="mb-10">
									<h2 class="pt-7 text-5xl">
										Meet {{ groomName }} & {{ brideName }}
									</h2>
									<p class="text-left">
										{{ coupleBio.substring(0, 200) + '...' }}
									</p>
								</div>
								<div class="text-center mb-10">
									<NuxtLink
										to="/the-couple"
										class="text-white uppercase rounded-md font-bold border-white border-2 px-8 py-3 transition duration-300 ease-in-out hover:bg-accent mt-10"
									>
										Read More
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-image-4">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END SECTION 2 -->

	</div>
</template>

<script>
import CountdownToDate from '~/components/CountdownToDate'
import {index, RSVP, groom, bride, tagline, couple} from '~/data/data.json'

export default {
	name: 'IndexPage',
	components: {CountdownToDate},

	data() {
		return {
			weddingDate: index.date,
			hashtag: tagline.hashtag,
			rsvpLink: RSVP.link,
			groomImage: index.groomImage,
			groomBio: groom.bio1,
			groomName: groom.firstName,
			brideImage: index.brideImage,
			brideBio: bride.bio1,
			brideName: bride.firstName,
			coupleBio: couple.bio1,
		}
	},
	head() {
		return {
			title: groom.firstName + ' + ' + bride.firstName + "'s Wedding",
			meta: [
				{
					name:
						groom.firstName +
						' + ' +
						bride.firstName +
						"'s Wedding",
					content:
						"We can't wait for you to join us on" +
						index.date +
						"for our wedding! We are so excited and we'll see you there!",
					hid: 'descrption',
				},
			],
		}
	},
}
</script>

<style>
/* stylelint-disable color-function-notation */
.half-content-image-header {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
	url('~static/images/index/index-head.jpg');
	height: 45vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

.half-content-image-1 {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
	url('~static/images/index/countdown-side.jpg');
	height: 45vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

.half-content-image-2 {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
	url('~static/images/index/groom-headshot.jpg');
	height: 50vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

.half-content-image-3 {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
	url('~static/images/index/bride-headshot.jpg');
	height: 50vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

.half-content-image-4 {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
		url('~static/images/index/couple-side.jpg');
	height: 50vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}


/* stylelint-enable color-function-notation */
.title-content-text {
	height: 45vh;
}

.headshot-content-text {
	height: 50vh;
}

@media screen and (min-width: 40em) {
	.half-content-text {
		height: 45vh;
	}
}
</style>
