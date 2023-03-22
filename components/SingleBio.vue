<template>
	<!-- State management of background color-->
	<div
		:class="`
		${even ? 'bg-secondary bg-gradient-to-b from-secondary to-secondary-gradient' : 'bg-primary bg-gradient-to-b from-primary to-primary-gradient'}`"
	>
		<div class="grid grid-cols-12">
			<div
				:class="`col-span-12 md:col-span-6
					${even ? 'md:order-2' : ''}`"
			>
				<div class="relative">
					<div :class="image">
					</div>
				</div>
			</div>

			<!-- State management of text color -->
			<div
				:class="`col-span-12 md:col-span-6 px-5 md:px-10
					${even ? 'text-black' : 'text-white'}`"
			>
				<div class="bio-text relative">
					<div class="content-middle-medium text-center">
						<h2 class="pt-7 text-5xl text-left">{{ name }}</h2>
						<h3 class="pb-5 uppercase text-left body-font font-bold">
							{{ title }}
						</h3>
						<p class="text-left pb-5">{{ description }}</p>

						<!-- Buttons -->
						<div class="grid grid-cols-12 gap-4 pb-12">
							<div
								v-if="facebook != null"
								class="col-span-12 lg:col-span-4"
							>
								<div class="pb-2 md:pb-5">
									<a :href="facebook" target="_blank">
										<div
											:class="`border-2 uppercase rounded-md font-bold shadow-lg px-8 py-3 ease-in-out duration-300 hover:bg-accent hover:text-black hover:border-black
										${even ? 'text-black border-black' : 'text-white border-white'}`"
										>
											<font-awesome-icon
												icon="fa-brands fa-facebook"
											/>
											Facebook
										</div>
									</a>
								</div>
							</div>

							<div
								v-if="instagram != null"
								class="col-span-12 lg:col-span-4"
							>
								<div class="pb-2 md:pb-5">
									<a :href="instagram" target="_blank">
										<div
											:class="`border-2 uppercase rounded-md font-bold shadow-lg px-8 py-3 ease-in-out duration-300 hover:bg-accent hover:text-black hover:border-black
										${even ? 'text-black border-black' : 'text-white border-white'}`"
										>
											<font-awesome-icon
												icon="fa-brands fa-instagram"
											/>
											Instagram
										</div>
									</a>
								</div>
							</div>

							<div
								v-if="twitter != null"
								class="col-span-12 lg:col-span-4"
							>
								<div class="pb-2 md:pb-5">
									<a :href="twitter" target="_blank">
										<div
											:class="`border-2 uppercase rounded-md font-bold shadow-lg px-8 py-3 ease-in-out duration-300 hover:bg-accent hover:text-black hover:border-black
										${even ? 'text-black border-black' : 'text-white border-white'}`"
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
						<!-- End Buttons -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SingleBio',
	props: {
		even: {
			type: Boolean,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		facebook: {
			type: String,
			default: null,
			required: false,
		},
		instagram: {
			type: String,
			default: null,
			required: false,
		},
		twitter: {
			type: String,
			default: null,
			required: false,
		},
	},
}
</script>
