<template>
	<div>
		<!-- START HEADER -->
		<div class="bg-primary bg-gradient-to-b from-primary to-primary-gradient text-white">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6 md:order-2">
					<div class="relative">
						<div class="title-content-text">
							<div class="content-middle text-center">
								<h1 class="text-7xl mb-2 px-2">Meet The Ladies</h1>
								<h2 class="text-xl font-bold uppercase body-font">
									{{ hashtag }}
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-bridesmaid-header">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END HEADER -->

		<SingleBio
			v-for="(bio, index) in bridesmaids"
			:key="bio.name"
			:name="bio.name"
			:title="bio.title"
			:image="bio.image"
			:facebook="bio.facebook"
			:instagram="bio.instagram"
			:twitter="bio.twitter"
			:even="index % 2 === 0"
			:description="bio.description"
		/>

		<div class="bg-primary text-white">
			<div class="grid grid-cols-12">
				<div class="col-span-12 text-center py-10">
					<h1 class="body-font text-3xl uppercase pb-10">See You There?</h1>
					<div class="text-center mb-5">
						<a
							:href="rsvpLink"
							target="_blank"
							class="bg-accent text-black uppercase rounded-md font-bold shadow-lg px-20 py-3 transition duration-300 ease-in-out hover:bg-accent-alt mt-10"
						>
							RSVP!
						</a>
					</div>
				</div>
			</div>
		</div>

		<button-footer/>
	</div>
</template>

<script>
import SingleBio from '~/components/SingleBio'
import {bridesmaids, tagline, RSVP} from '~/data/data.json'

export default {
	name: 'MeetTheBridesmaids',
	components: {SingleBio},
	data() {
		return {
			bridesmaids,
			hashtag: tagline.hashtag,
			rsvpLink: RSVP.link,
		}
	},
}
</script>

<style>

@media screen and (min-width: 40em) {
	.half-content-bridesmaid-header {
		background: url('~static/images/bridesmaids/bridesmaid-head.jpg');
		height: 75vh;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}
}

</style>
