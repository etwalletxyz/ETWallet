<template>
  <div class="mew-component--paper-wallet-content" style="width: 800px">
    <div class="d-flex justify-space-between align-start">
      <v-col cols="7">
        <div class="d-flex align-center">
          <img height="35" src="@/assets/images/icons/logo-mew-dark.png" />
          <div class="greenPrimary--text">
            <span class="mx-3">|</span>Paper Wallet
          </div>
        </div>
      </v-col>
      <v-col cols="5">
        <div>
          <div class="d-flex align-center mr-3 mb-2">
            <img
              class="mr-2"
              height="20"
              src="@/assets/images/icons/icon-support.svg"
            />
            <div>support@etwallet.xyz</div>
          </div>
          <div class="d-flex align-center mr-3">
            <img
              class="mr-2"
              height="20"
              src="@/assets/images/icons/icon-support.svg"
            />
            <div>https://www.etwallet.xyz</div>
          </div>
        </div></v-col
      >
    </div>
    <div class="mt-12 d-flex align-center">
      <mew-blockie
        :address="address"
        width="110px"
        height="110px"
        class="mr-6"
        flat
      />

      <div style="max-width: 400px">
        <div
          class="mew-heading-1 font-weight-black text-uppercase textAlwaysDark--text mb-2"
        >
          My address icon
        </div>
        <div class="textAlwaysDark--text">
          Always look for the icon when sending to this wallet. And please keep
          your paper wallet at a
          <span class="text-uppercase redPrimary--text font-weight-medium">
            Safe Place!
          </span>
        </div>
      </div>
    </div>

    <v-divider class="my-6"></v-divider>

    <v-container>
      <v-row class="align-center">
        <v-col cols="9">
          <div
            class="mew-heading-1 font-weight-black textAlwaysDark--text text-uppercase"
          >
            My wallet address
          </div>
          <div
            class="mew-heading-3 textAlwaysDark--text mew-address font-weight-bold mt-4"
          >
            {{ getChecksumAddressString }}
          </div>
        </v-col>
        <v-col cols="3" class="ml-auto">
          <app-qr-code :data="address" :height="140" :width="140" />
        </v-col>
      </v-row>

      <v-row v-if="showPrivateKey">
        <v-col cols="8" md="6" class="mr-auto">
          <div
            class="mew-heading-1 font-weight-black text-uppercase redPrimary--text"
          >
            <v-icon color="redPrimary">mdi-alert</v-icon>
            My Private Key
          </div>
          <div class="font-weight-black redPrimary--text mt-2">
            You might LOSE your MONEY if you share this Private Key with anyone!
            KEEP YOUR PRIVATE KEY IN SAFE PLACE!
          </div>
          <div
            class="mew-heading-3 mew-address textAlwaysDark--text font-weight-bold word-break--break-all mt-4"
          >
            {{ key }}
          </div>
        </v-col>
        <v-col cols="3" class="ml-auto">
          <app-qr-code
            :data="key"
            :height="140"
            :width="140"
            :type-number="10"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="my-6"></v-divider>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { toChecksumAddress } from '@/core/helpers/addressUtils';

export default {
  name: 'BalanceAddressPaperWallet',
  computed: {
    ...mapState('wallet', ['address', 'instance', 'isHardware']),
    key() {
      if (this.showPrivateKey) {
        return this.instance.getPrivateKeyString();
      }
      return null;
    },
    getChecksumAddressString() {
      return this.address ? toChecksumAddress(this.address) : '';
    },
    showPrivateKey() {
      return !this.instance.isPubOnly;
    }
  }
};
</script>
