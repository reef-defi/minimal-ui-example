import {Provider} from "@reef-defi/evm-provider";
import {WsProvider} from "@polkadot/rpc-provider";

export async function initProvider() {
    const URL = 'ws://lcd13huvthe4h0g7l9no22oge8.ingress.bdl.computer:9944';
    // const URL = 'wss://rpc-testnet.reefscan.com/ws';
    console.log('connecting provider =',URL);
    const evmProvider = new Provider({
        provider: new WsProvider(URL)
    });
    await evmProvider.api.isReadyOrError;
    console.log('CONNECTED provider');
    return evmProvider;
}
