<template>
    <div>
		<!-- START HEADER -->
		<div class="bg-primary bg-gradient-to-b from-primary to-primary-gradient text-white">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6 md:order-2">
					<div class="relative">
						<div class="title-content-text">
							<div class="content-middle text-center">
								<h1 class="text-7xl mb-2 px-2">Registry</h1>
								<h2 class="text-xl font-bold uppercase body-font">
									{{ hashtag }}
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-registry-header">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END HEADER -->

        <div class="bg-secondary bg-gradient-to-b from-secondary to-secondary-gradient text-black">
            <div class="text-center mx-auto max-w-2xl md:max-w-5xl">
                <div
                    class="grid grid-cols-12 gap-4 pt-10 pb-12 text-white px-5"
                >
                    <div class="col-span-12 text-center">
                        <h2 class="text-5xl text-black">Our Registries</h2>
                    </div>

                    <RegistryLinks
                        v-for="reg in registries"
                        :key="reg.store"
                        :store="reg.store"
                        :item1="reg.item1"
                        :item2="reg.item2"
                        :item3="reg.item3"
                        :link="reg.link"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RegistryLinks from '~/components/RegistryLinks'
import { registries, tagline } from '~/data/data.json'

export default {
    name: 'WeddingRegistry',
    components: { RegistryLinks },
    data() {
        return {
            registries,
            hashtag: tagline.hashtag,
        }
    },
}
</script>

<style>
.half-content-registry-header {
    background: url('~static/images/registry/registry-head.jpg');
    height: 60vh;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
}

@media screen and (min-width: 40em) {
	.half-content-registry-header {
		height: 75vh;
	}
}
</style>
