<template>
    <div>
		<!-- START HEADER -->
		<div class="bg-primary bg-gradient-to-b from-primary to-primary-gradient text-white">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6 md:order-2">
					<div class="relative">
						<div class="title-content-text">
							<div class="content-middle text-center">
								<h1 class="text-7xl mb-2 px-2">Meet The Bride</h1>
								<h2 class="text-xl font-bold uppercase body-font">
									{{ hashtag }}
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-bride-header">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END HEADER -->

		<div class="bg-secondary bg-gradient-to-b from-secondary to-secondary-gradient">
			<div class="text-center mx-auto max-w-2xl md:max-w-3xl">
				<div class="grid grid-cols-12 gap-4 pt-10 pb-12">
					<div class="col-span-12 px-5">
						<h2 class="pt-7 text-5xl text-center pb-5">
							Hey! I'm {{ firstName }}.
						</h2>
						<p class="text-left pb-5">
							{{ bio1 }}
						</p>

						<p class="text-left pb-5">
							{{ bio2 }}
						</p>

						<div class="grid grid-cols-12 gap-4">
							<div class="col-span-12 md:col-span-4">
								<div v-if="facebook != null" class="pb-5">
									<a :href="facebook" target="_blank">
										<div
											class="text-black border-2 border-black uppercase rounded-md font-bold shadow-lg px-8 py-3 ease-in-out duration-300 hover:bg-accent"
										>
											<font-awesome-icon
												icon="fa-brands fa-facebook"
											/>
											Facebook
										</div>
									</a>
								</div>
							</div>
							<div class="col-span-12 md:col-span-4">
								<div v-if="instagram != null" class="pb-5">
									<a :href="instagram" target="_blank">
										<div
											class="text-black border-2 border-black uppercase rounded-md font-bold shadow-lg px-8 py-3 ease-in-out duration-300 hover:bg-accent"
										>
											<font-awesome-icon
												icon="fa-brands fa-instagram"
											/>
											Instagram
										</div>
									</a>
								</div>
							</div>

							<div class="col-span-12 md:col-span-4">
								<div v-if="twitter != null" class="pb-5">
									<a :href="twitter" target="_blank">
										<div
											class="text-black border-2 border-black uppercase rounded-md font-bold shadow-lg px-8 py-3 ease-in-out duration-300 hover:bg-accent"
										>
											<font-awesome-icon
												icon="fa-brands fa-twitter"
											/>
											Twitter
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<button-footer />
	</div>
</template>

<script>
import { bride, tagline } from '~/data/data.json'

export default {
    name: 'MeetTheBride',

    data() {
        return {
            hashtag: tagline.hashtag,
            name: bride.name,
            firstName: bride.firstName,
            headshot: bride.headshot,
            bio1: bride.bio1,
            bio2: bride.bio2,
            facebook: bride.facebook,
            instagram: bride.instagram,
            twitter: bride.twitter,
        }
    },
}
</script>

<style>
/* stylelint-disable color-function-notation */
.half-content-bride-header {
	background: linear-gradient(rgba(0, 0, 0, 0%), rgba(0, 0, 0, 0%)),
	url('~static/images/bride/bride-head.jpg');
	height: 25vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

@media screen and (min-width: 40em) {
	.half-content-bride-header {
		height: 75vh;
	}
}

/* stylelint-enable color-function-notation */
</style>
