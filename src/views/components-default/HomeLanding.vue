<template>
  <div class="mew-component--landing">
    <div class="desktop-content d-none d-lg-block expandHeader">
      <v-container
        class="banner-content-container d-flex align-center justify-space-between"
      >
        <v-card color="transparent" flat tile max-width="430px">
          <div class="white--text mew-title">
            <span>
              {{ $t('home.tagline1') | lokalise('home.tagline1') }}
            </span>
            <span>
              {{ $t('home.tagline2') | lokalise('home.tagline2') }}
            </span>
          </div>
          <p class="white--text mt-3">
            {{ $t('home.subheading') | lokalise('home.subheading') }}
          </p>
          <div class="mt-9 d-flex">
            <mew-button
              class="mr-3 HomeCreateWallet"
              :has-full-width="false"
              title="Create a new wallet"
              btn-size="xlarge"
              @click.native="navigateToCreateWallet"
            />
            <mew-button
              class="HomeAccessWallet"
              :has-full-width="false"
              btn-style="outline"
              title="Access my wallet"
              btn-size="xlarge"
              @click.native="navigateToAccessWallet"
            />
          </div>
        </v-card>
        <img
          src="@/assets/images/backgrounds/bg-home-spaceman-and-dog.svg"
          alt="Spaceman and his dog"
          height="500"
        />
      </v-container>
    </div>
    <div class="mobile-content d-block d-lg-none expandHeader pt-5">
      <v-container>
        <v-card color="transparent" flat tile max-width="400px" class="mx-auto">
          <div
            class="white--text font-weight-bold mb-4"
            style="font-size: 3rem; line-height: 3.3rem"
          >
            <span>
              {{ $t('home.tagline1') | lokalise('home.tagline2') }}
            </span>
            <span>
              {{ $t('home.tagline2') | lokalise('home.tagline2') }}
            </span>
          </div>
          <p class="white--text mt-3">
            {{ $t('home.subheading') | lokalise('home.subheading') }}
          </p>
          <div class="mt-12">
            <mew-button
              class="mb-3 width--full"
              :has-full-width="false"
              title="Create a new wallet"
              btn-size="xlarge"
              @click.native="navigateToCreateWallet"
            />
            <mew-button
              class="width--full"
              :has-full-width="false"
              btn-style="outline"
              title="Access my wallet"
              btn-size="xlarge"
              @click.native="navigateToAccessWallet"
            />
          </div>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
import { ROUTES_HOME } from '@/core/configs/configRoutes';
import handlerAnalytics from '@/modules/analytics-opt-in/handlers/handlerAnalytics.mixin';
import { LANDING_PAGE } from '@/modules/analytics-opt-in/handlers/configs/events.js';

export default {
  name: 'HomeLanding',
  mixins: [handlerAnalytics],
  mounted() {
    setTimeout(() => {
      this.trackLandingPage();
    }, 1000);
  },
  methods: {
    navigateToCreateWallet() {
      this.trackLandingPageAmplitude(LANDING_PAGE.CREATE_WALLET);
      this.$router.push({
        name: ROUTES_HOME.CREATE_WALLET.NAME,
        params: {}
      });
    },
    navigateToAccessWallet() {
      this.trackLandingPageAmplitude(LANDING_PAGE.ACCESS_WALLET);
      this.$router.push({
        name: ROUTES_HOME.ACCESS_WALLET.NAME,
        params: {}
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.desktop-content {
  background-image: url(~@/assets/images/backgrounds/bg-homepage.svg);
  background-size: cover;
  background-position: 100% bottom;
  .banner-content-container {
    height: 800px;
  }
}

.mobile-content {
  background-image: url('~@/assets/images/backgrounds/bg-homepage-spaceman-center.svg');
  background-position: bottom center;
  background-size: 88rem;
  padding: 0 0 30rem 0;
}

.extension-btns {
  color: white;
  background: rgba(0, 0, 0, 0.12);
}

.browser-icons {
  width: 25px;
  height: 25px;
}

.app-icons {
  width: 55px;
  max-height: 55px;
}
</style>
