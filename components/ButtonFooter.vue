<template>
	<div>

		<!-- START SECTION 2 - GROOM -->
		<div class="bg-primary bg-gradient-to-b from-primary-alt to-primary-gradient text-white">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="button-footer-content">
							<div class="content-middle-medium text-center py-10 md:px-10">
								<div class="grid grid-cols-12 gap-4">
									<div class="col-span-12 text-center mx-auto">
										<h3 class="pb-5 text-5xl text-left text-white">
											View More
										</h3>
									</div>

									<div
										v-if="coupleCheck"
										class="col-span-12 pb-5"
									>
										<div class="text-center">
											<NuxtLink
												to="/the-couple"
												class="fixed-button inline-block bg-accent text-black uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
											>
												Meet The Couple
											</NuxtLink>
										</div>
									</div>

									<div
										v-if="groomCheck"
										class="col-span-12 pb-5"
									>
										<div class="text-center">
											<NuxtLink
												to="/groom"
												class="fixed-button inline-block bg-accent text-black uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
											>
												Meet The Groom
											</NuxtLink>
										</div>
									</div>

									<div v-if="menCheck" class="col-span-12 pb-5">
										<div class="text-center">
											<NuxtLink
												to="/groomsmen"
												class="fixed-button inline-block bg-accent text-black uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
											>
												Meet The Groomsmen
											</NuxtLink>
										</div>
									</div>

									<div
										v-if="brideCheck"
										class="col-span-12 pb-5"
									>
										<div class="text-center">
											<NuxtLink
												to="/bride"
												class="fixed-button inline-block bg-accent text-black uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
											>
												Meet The Bride
											</NuxtLink>
										</div>
									</div>

									<div
										v-if="maidCheck"
										class="col-span-12 pb-5"
									>
										<div class="text-center">
											<NuxtLink
												to="/bridesmaids"
												class="fixed-button inline-block bg-accent text-black uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
											>
												Meet The Bridesmaids
											</NuxtLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Check to show different images based on which URL the page is. In an effort to reuse code, this takes the logic from the
				 buttons and uses the opposite of that, since those are checking it ISN'T the current page, and this checks if it IS. -->
				<div class="col-span-12 md:col-span-6">

					<!-- Show if the couple page -->
					<div
						v-if="!coupleCheck"
						class="relative"
					>
						<div class="button-footer-couple">
						</div>
					</div>

					<!-- Show if the groom page -->
					<div
						v-if="!groomCheck"
						class="relative"
					>
						<div class="button-footer-groom">
						</div>
					</div>

					<!-- Show if the groomsmen page -->
					<div
						v-if="!menCheck"
						class="relative"
					>
						<div class="button-footer-groomsmen">
						</div>
					</div>

					<!-- Show if the bride page -->
					<div
						v-if="!brideCheck"
						class="relative"
					>
						<div class="button-footer-bride">
						</div>
					</div>

					<!-- Show if the bridesmaid page -->
					<div
						v-if="!maidCheck"
						class="relative"
					>
						<div class="button-footer-bridesmaids">
						</div>
					</div>

				</div>
			</div>
		</div>
		<!-- END SECTION 2 -->


	</div>
</template>

<script>
export default {
	name: 'ButtonFooter',

	computed: {
		currentPath() {
			return this.$nuxt.$route.name
		},

		coupleCheck() {
			return this.currentPath !== 'the-couple'
		},
		brideCheck() {
			return this.currentPath !== 'bride'
		},
		maidCheck() {
			return this.currentPath !== 'bridesmaids'
		},
		groomCheck() {
			return this.currentPath !== 'groom'
		},
		menCheck() {
			return this.currentPath !== 'groomsmen'
		},
	},
}
</script>

<style>

.fixed-button {
	width: 300px;
}

/* stylelint-disable color-function-notation */
.button-footer-couple {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
	url('~static/images/footer/couple.jpg');
	height: 60vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

.button-footer-bride {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
	url('~static/images/footer/bride.jpg');
	height: 60vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

.button-footer-groom {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
	url('~static/images/footer/groom.jpg');
	height: 60vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

.button-footer-bridesmaids {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
	url('~static/images/footer/bridesmaids.jpg');
	height: 60vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

.button-footer-groomsmen {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
	url('~static/images/footer/groomsmen.jpg');
	height: 60vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

@media screen and (min-width: 40em) {
	.button-footer-content {
		height: 60vh;
	}
}

/* stylelint-enable color-function-notation */
</style>
