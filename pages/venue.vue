<template>
	<div>
		<!-- START HEADER -->
		<div class="bg-primary bg-gradient-to-b from-primary to-primary-gradient text-white">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6 md:order-2">
					<div class="relative">
						<div class="title-content-text">
							<div class="content-middle text-center">
								<h1 class="text-7xl mb-2 px-2">The Venue</h1>
								<h2 class="text-xl font-bold uppercase body-font">
									{{ hashtag }}
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="half-content-venue-header">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END HEADER -->

		<div class="bg-secondary bg-gradient-to-b from-secondary to-secondary-gradient text-black">
			<div class="grid grid-cols-12">
				<div class="col-span-12 md:col-span-6">
					<div class="relative">
						<div class="map-content-text">
							<div class="content-middle-medium text-center py-10 md:px-10">
								<div class="col-span-12 px-5 mb-10 text-center">
									<h2 class="text-5xl">Ceremony Address</h2>
									<h3 class="text-xl font-bold uppercase body-font">
										{{ ceremonyLine1 }}
									</h3>
									<h3 class="text-xl font-bold uppercase body-font">
										{{ ceremonyLine2 }}
									</h3>
									<h3 class="text-xl font-bold uppercase body-font">
										{{ ceremonyLine3 }}
									</h3>
									<div class="py-5">
										<a
											:href="ceremonyMap"
											target="_blank"
											class="bg-accent text-black uppercase rounded-md font-bold shadow-lg text-black px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
										>
											Launch in Maps
											<font-awesome-icon
												icon="fa-solid fa-arrow-up-right-from-square"
											/>
										</a>
									</div>
								</div>

								<div class="col-span-12  px-5 text-center">
									<h2 class="text-5xl">Reception Address</h2>
									<h3 class="text-xl font-bold uppercase body-font">
										{{ receptionLine1 }}
									</h3>
									<h3 class="text-xl font-bold uppercase body-font">
										{{ receptionLine2 }}
									</h3>
									<h3 class="text-xl font-bold uppercase body-font">
										{{ receptionLine3 }}
									</h3>
									<div class="py-5">
										<a
											:href="receptionMap"
											target="_blank"
											class="bg-accent text-black uppercase rounded-md font-bold shadow-lg text-black px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
										>
											Launch in Maps
											<font-awesome-icon
												icon="fa-solid fa-arrow-up-right-from-square"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6 h-full">
					<div class="map-content map-height">
						<gmap-map
							ref="mmm"
							:center="center"
							:zoom="11"
							style="width: 100%; height: 100%;"
						>
							<gmap-marker
								v-for="(m, index) in markers"
								:key="index"
								:position="m.position"
								:clickable="true"
								:draggable="true"
								@click="center = m.position"
							></gmap-marker>
						</gmap-map>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-primary bg-gradient-to-b from-primary to-primary-gradient text-white">
			<div class="text-center mx-auto max-w-2xl md:max-w-5xl">
				<div class="grid grid-cols-12 gap-4 pt-5 md:pt-10 pb-12">
					<div class="col-span-12 px-5 text-left">
						<h2 class="text-5xl">Special Instructions</h2>
						<ul class="list-disc text-lg px-5">
							<li>We are in the crimson ballroom all night!</li>
							<li>
								Park in Lot D when you arrive and take the door
								that's right there.
							</li>
							<li>Follow signs to the ballroom.</li>
							<li>
								You can validate your parking at the front desk
								before you leave.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-secondary bg-gradient-to-b from-secondary to-secondary-gradient text-black">
			<div class="text-center mx-auto max-w-2xl md:max-w-5xl">
				<div
					class="grid grid-cols-12 gap-4 pt-10 pb-12 px-5"
				>
					<div class="col-span-12 text-center">
						<h2 class="text-5xl">Lodging Options</h2>
					</div>

					<HotelLocations
						v-for="hotel in hotels"
						:key="hotel.name"
						:name="hotel.name"
						:address-line1="hotel.addressLine1"
						:address-line2="hotel.addressLine2"
						:distance="hotel.distance"
						:link="hotel.link"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HotelLocations from '~/components/HotelLocations'
import {
	hotels,
	tagline,
	ceremonyAddress,
	receptionAddress,
} from '~/data/data.json'

export default {
	name: 'EventVenue',
	components: {HotelLocations},
	data() {
		return {
			hotels,
			hashtag: tagline.hashtag,
			ceremonyMap: ceremonyAddress.gmaps,
			ceremonyLine1: ceremonyAddress.address1,
			ceremonyLine2: ceremonyAddress.address2,
			ceremonyLine3: ceremonyAddress.address3,
			receptionMap: receptionAddress.gmaps,
			receptionLine1: receptionAddress.address1,
			receptionLine2: receptionAddress.address2,
			receptionLine3: receptionAddress.address3,

			// latlong.net/convert-address-to-lat-long.html
			center: {
				lat: 35.28883,
				lng: -80.75076,
			},
			markers: [
				{
					position: {
						lat: 35.30883,
						lng: -80.75076,
					},
				},
				{
					/* SECOND MARKER FOR ALT RECEPTION:
					 position: {
						lat: 40.8484,
						lng: -73.8857,
					}, */
				},
			],
		}
	},
}
</script>

<style>
.half-content-venue-header {
	background: url('~static/images/venue/venue-head.jpg');
	height: 25vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

@media screen and (min-width: 40em) {
	.half-content-venue-header {
		height: 75vh;
	}
}


@media screen and (min-width: 40em) {
	.map-content-text {
		height: 75vh;
	}
}

.map-content {
	height: 45vh;
}

@media screen and (min-width: 40em) {
	.map-content {
		height: 75vh;
	}
}

</style>
