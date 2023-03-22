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
						<div class="pb-5">
							<a
								v-if="facebook != null"
								:href="facebook"
								target="_blank"
								class="text-4xl px-2"
							>
								<font-awesome-icon
									icon="fa-brands fa-facebook"
								/>
							</a>
							<a
								v-if="instagram != null"
								:href="instagram"
								target="_blank"
								class="text-4xl px-2"
							>
								<font-awesome-icon
									icon="fa-brands fa-instagram"
								/>
							</a>
							<a
								v-if="twitter != null"
								:href="twitter"
								target="_blank"
								class="text-4xl px-2"
							>
								<font-awesome-icon
									icon="fa-brands fa-twitter"
								/>
							</a>
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
