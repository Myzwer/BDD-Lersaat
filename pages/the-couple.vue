<template>
    <div>
		<!-- START HEADER -->
		<div class="bg-primary bg-gradient-to-b from-primary to-primary-gradient text-white">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6 md:order-2">
					<div class="relative">
						<div class="title-content-text">
							<div class="content-middle text-center">
								<h1 class="text-7xl mb-2 px-2">About Us</h1>
								<h2 class="text-xl font-bold uppercase body-font">
									{{ hashtag }}
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-couple-header">
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
                            Meet {{ groomName }} + {{ brideName }}
                        </h2>
                        <p class="text-left pb-5">
                            {{ bio1 }}
                        </p>

                        <p class="text-left pb-5">
                            {{ bio2 }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <button-footer />
    </div>
</template>

<script>
import { bride, groom, couple, tagline } from '~/data/data.json'

export default {
    name: 'MeetCouple',

    data() {
        return {
            hashtag: tagline.hashtag,
            brideName: bride.firstName,
            groomName: groom.firstName,
            couplePhoto: couple.couplePhoto,
            bio1: couple.bio1,
            bio2: couple.bio2,
            bio3: couple.bio3,
        }
    },
}
</script>

<style>
/* stylelint-disable color-function-notation */
.half-content-couple-header {
	background: linear-gradient(rgba(0, 0, 0, 00%), rgba(0, 0, 0, 0%)),
	url('~static/images/couple/couple-head.jpg');
	height: 25vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

@media screen and (min-width: 40em) {
	.half-content-couple-header {
		height: 75vh;
	}
}

/* stylelint-enable color-function-notation */
</style>
