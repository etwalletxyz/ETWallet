import localStore from 'store';
import Configs from '../configs';
import { chainMap, ETH } from '@/utils/networks';

const INIT_STORE = function (state) {
  if (localStore.get(Configs.LOCAL_STORAGE_KEYS.global)) {
    const savedStore = localStore.get(Configs.LOCAL_STORAGE_KEYS.global);
    if (savedStore.stateVersion === Configs.VERSION.global) {
      if (!chainMap[savedStore.currentNetwork.chainId]) {
        savedStore['currentNetwork'] = ETH;
        savedStore.currentNetwork = {
          chainId: 1
        };
      }
      Object.assign(state, savedStore);
    }
  }
};
const SET_ONLINE_STATUS = async function (state, status) {
  state.online = status;
};

const SET_LOCALE = function (state, { locale }) {
  state.locale = locale;
};

const SET_PREFERRED_CURRENCY = function (state, currency) {
  state.preferredCurrency = currency;
};

const SET_GAS_PRICE = function (state, val) {
  state.baseGasPrice = val;
};
const SET_VALID_NETWORK = function (state, valid) {
  state.validNetwork = valid;
};
const SET_NETWORK = async function (state, networkObj) {
  const _netObj = Object.assign({}, networkObj);
  _netObj.type = {
    name: networkObj.name
  };
  state.currentNetwork = _netObj;
};
const SET_GAS_PRICE_TYPE = function (state, type) {
  state.gasPriceType = type;
};
const SET_IMPORTED_STATE = function (currentState, newState) {
  Object.keys(newState).forEach(item => {
    currentState[item] = newState[item];
  });
};

const ADD_LOCAL_CONTRACT = function (state, contract) {
  if (!state.localContracts[state.currentNetwork.chainId])
    state.localContracts[state.currentNetworkchainId] = [];
  state.localContracts[state.currentNetwork.chainId].push(contract);
};
const SET_BASE_FEE_PER_GAS = function (state, baseFeePerGasBN) {
  state.eip1559.baseFeePerGas = baseFeePerGasBN.toString();
};
const SET_MAX_PRIORITY_FEE_PER_GAS = function (state, maxPriorityFeePerGasBN) {
  state.eip1559.maxPriorityFeePerGas = maxPriorityFeePerGasBN.toString();
};

const SET_DARK_MODE = function (state, val) {
  state.darkMode = val;
};

export default {
  SET_ONLINE_STATUS,
  SET_LOCALE,
  SET_PREFERRED_CURRENCY,
  SET_GAS_PRICE,
  SET_VALID_NETWORK,
  SET_NETWORK,
  INIT_STORE,
  SET_GAS_PRICE_TYPE,
  SET_IMPORTED_STATE,
  ADD_LOCAL_CONTRACT,
  SET_BASE_FEE_PER_GAS,
  SET_MAX_PRIORITY_FEE_PER_GAS,
  SET_DARK_MODE
};
