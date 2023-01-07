# BlockcertsDapp

Blockcerts を利用した Dapp 開発用のリポジトリです。

W3C の VC 規格にも対応している OSS で世界標準となりつつある。

<<<<<<< HEAD
## DIDドキュメントとは

DID ドキュメントは証明書を検証するのに使う公開鍵を実際に格納するドキュメント

### Profile ドキュメント とは

Profile ドキュメント は証明書発行者のプロフィールをまとめたドキュメントで DID ドキュメントの serviceEndpoint から参照されます

## Blockcertsを構成するコンポーネント
=======
## Blockcerts とは

Blockcerts は、参加者が記録を発行し、検証するために開発された標準のセットで、あらゆるブロックチェーンと連動しています。MIT メディアラボと Learning Machine での共同研究がベースになっています。このソフトウェアは、無料かつオープンソースで利用できるようになりました。

## Blockcerts を構成するコンポーネント
>>>>>>> 90e017d6522e658a9c39e7b916e9696b8d44ca84

- cert-tools  
  VC のテンプレートの生成に使うコンポーネント
- cert-schema  
  VC のテンプレート作成者が自身のテンプレートを検証するために利用するコンポーネント
- cert-issuer  
  証明書自体のハッシュを含む、発行機関から受信者へのトランザクションを Bitcoin/Ethereum ブロックチェーン上に作成し、ブロックチェーン証明書を発行する Python ライブラリです。
- cert-verifier
  cert-verifier は Python のライブラリで、cert-verifier-js は Javascript のライブラリです。どちらもブロックチェーンの証明書を検証するためのものです。

## blockcerts-verifier とは

Blockcerts では卒業証明書や学習履歴などの証明書を発行し、表示、検証する仕組みを提供しています。blockcerts-verifier は、証明書の表示・検証をするためのコンポーネントです。Blockcerts の一連の流れの図にある VERIFIER(employer) がユーザーになります。例えば、RECIPIENT(student)の学生を採用する企業の人事担当者がユーザーとして考えられます。

## blockcerts-verifier の動かし方

```bash
cd blockcerts-verifier
npm ci
npm run start
```

## Blockcerts を利用した署名・検証の一例

- 1- Prerequisites: Python 3.7.9 & pip, Visual Studio tools, GCC compiler.

- 2- Setup the virtual environment of Python:

  - a- Install the virtual environment: pip install virtualenv

  - b- Create a virtualenv folder: virtualenv env

  - c- Activate the virtualenv: source ./env/bin/activate

  - d- Deactivate the env (when you are done): deactivate

- 3- Clone the repository:
-

```zsh
git clone https://github.com/blockchain-certificates/cert-issuer.git && cd cert-issuer
```

- 4- Modify setup.py :

Go to the line 13, and make it look like this:

```py
with open(os.path.join(here, ‘README.md’), encoding='utf-8') as fp:
```

- 5- Install cert-issuer:

```zsh
python setup.py install
```

- 6 Solve Pysha3 dependencies conflict:

  - a- Go to ~\cert-issuer\venv\Lib\site-packages\merkletools-1.0.2-py3.7.egg\EGG-INFO

  - b- Open the file called: requires and change pysha3==1.0b1 to pysha3>=1.0b1

- 7- Jsonschema version conflict

  - a- Go to ~\Blockcerts-test\cert-issuer

  - b- Open requirements file and change the last line from jsonschema==3.0.0 to jsonschema<=3.0.0

- 8- Create a bitcoin testnet wallet:

Visit this website to generate your wallet credentials: [Link](https://www.bitaddress.org/bitaddress.org-v3.3.0-SHA256-dec17c07685e1870960903d8f58090475b25af946fe95a734f88408cef4aa194.html?testnet=true)

- 9- Store the private key:

Create in your cert-issuer directory a file named pk_issuer.txt, and paste your private key from your wallet in it.

- 10- Issuer information:

Create a file in your cert-issuer directory and name it: `conf.ini`

```ini
issuing_address = <insert your public key here>
chain=bitcoin_testnet
bitcoind
usb_name=./
key_file=./pk_issuer.txt
unsigned_certificates_dir=./data/unsigned_certificates
blockchain_certificates_dir=./data/blockchain_certificates
work_dir=./cert-issuer/work
no_safe_mode
```

- 11- Get some coins:

address]: [mkaKqKBrTat399DiSUD63rmZ6sLVtC6KX7](https://live.blockcypher.com/btc-testnet/address/mkaKqKBrTat399DiSUD63rmZ6sLVtC6KX7/)

Generate some free testnet bitcoin in your wallet. Visit one of these websites:

https://bitcoinfaucet.uo1.net/  
https://kuttler.eu/en/bitcoin/btc/faucet/  
https://tbtc.bitaps.com/  
https://coinfaucet.eu/en/btc-testnet/  
https://testnet.help/en/btcfaucet/testnet  
https://faucet.bitcoincloud.net/  
You can track your transactions here: https://www.blockchain.com/explorer

- 12- Unsigned certificates:

Copy the unsigned certificate examples from ~cert-issuer/examples/data-testnet/unsigned_certificates/

to this directory ~cert-issuer/data/unsigned_certificates/

**VerifiableCredential の例**

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1",
    "https://w3id.org/blockcerts/v3"
  ],
  "id": "urn:uuid:bbba8553-8ec1-445f-82c9-a57251dd731c",
  "type": ["VerifiableCredential", "BlockcertsCredential"],
  "issuer": "did:example:23adb1f712ebc6f1c276eba4dfa",
  "issuanceDate": "2022-01-01T19:33:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "alumniOf": {
      "id": "did:example:c276e12ec21ebfeb1f712ebc6f1"
    }
  }
}
```

- 13- Issue certificates:

Run the command:

python cert_issuer -c conf.ini

### 秘密鍵からDIDを作成する手順

```bash
cd blockcerts && node convert.js key_file.txt
```

result

```bash
{
  "kty": "EC",
  "crv": "K-256",
  "x": "OHmMFsX67nr0mWHdZLNQMwu4P59RigMgrIwQ5vftVug",
  "y": "IURb-5IMAAa2LW-KgjwULTP7SnsUBdmbrMY0s6FwpLA"
}
```

```bash
terraform init
terraform apply
```

- ブロックチェーン証明書の発行

```bash
cert-issuer -c conf.ini
```

result

```bash
WARNING - Your app is configured to skip the wifi check when the USB is plugged in. Read the documentation to ensure this is what you want, since this is less secure
INFO - This run will try to issue on the ethereum_goerli chain
INFO - Set cost constants to recommended_gas_price=20000000000.000000, recommended_gas_limit=25000.000000
INFO - Processing 1 certificates
INFO - Processing 1 certificates under work path=/Users/harukikondo/git/BlockcertsDapp/blockcerts/data/work
INFO - Getting balance with EthereumRPCProvider: 53164948578029855543
INFO - Total cost will be 500000000000000 wei
INFO - Starting finalizable signer
WARNING - app is configured to skip the wifi check when the USB is plugged in. Read the documentation to ensure this is what you want, since this is less secure
INFO - Stopping finalizable signer
WARNING - app is configured to skip the wifi check when the USB is plugged in. Read the documentation to ensure this is what you want, since this is less secure
INFO - here is the op_return_code data: 532bbb70882b4186eeaaf427db152546194ea5463f415d15db5e7d0320a82238
INFO - Fetching nonce with EthereumRPCProvider
INFO - Starting finalizable signer
WARNING - app is configured to skip the wifi check when the USB is plugged in. Read the documentation to ensure this is what you want, since this is less secure
INFO - Stopping finalizable signer
WARNING - app is configured to skip the wifi check when the USB is plugged in. Read the documentation to ensure this is what you want, since this is less secure
INFO - signed Ethereum trx = f88581c28504a817c8008261a894deaddeaddeaddeaddeaddeaddeaddeaddeaddead80a0532bbb70882b4186eeaaf427db152546194ea5463f415d15db5e7d0320a822382da09b29cb988b3a66c1fc0551dbf70aec159cf983d420e40e7d13c4da1e5abb0c92a010992c1f498ce7c2bd5597b9ab07fe3dbe36cea9b3bdf18e2ace35e34e20be2f
INFO - verifying ethDataField value for transaction
INFO - verified ethDataField
INFO - Broadcasting transaction with EthereumRPCProvider
INFO - Broadcasting succeeded with method_provider=<cert_issuer.blockchain_handlers.ethereum.connectors.EthereumRPCProvider object at 0x7f9985683e50>, txid=0xc329707a022d828af48f4f0823be0e6026551f95f5dad7e5f2a8cba58b757d51
INFO - merkle_json: {'path': [], 'merkleRoot': '532bbb70882b4186eeaaf427db152546194ea5463f415d15db5e7d0320a82238', 'targetHash': '532bbb70882b4186eeaaf427db152546194ea5463f415d15db5e7d0320a82238', 'anchors': ['blink:eth:goerli:0xc329707a022d828af48f4f0823be0e6026551f95f5dad7e5f2a8cba58b757d51']}
INFO - Broadcast transaction with txid 0xc329707a022d828af48f4f0823be0e6026551f95f5dad7e5f2a8cba58b757d51
INFO - Your Blockchain Certificates are in /Users/harukikondo/git/BlockcertsDapp/blockcerts/data/blockchain_certificates
```

### 参考文献

1. [Blockcerts](https://www.blockcerts.org/)
2. [IPFS にファイルを保存してそれをブラウザに表示＋ Blockcerts 検証](https://akutsu0521.medium.com/ipfs%E3%81%AB%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E4%BF%9D%E5%AD%98%E3%81%97%E3%81%A6%E3%81%9D%E3%82%8C%E3%82%92%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%AB%E8%A1%A8%E7%A4%BA-blockcerts%E6%A4%9C%E8%A8%BC-4c5cdc967a83)
3. [Blockcerts(GitHub)](https://github.com/blockchain-certificates)
4. [Introducing Blockcerts](https://www.youtube.com/watch?v=5wAyS1e_hOo)
5. [blockcerts-verifier](https://github.com/blockchain-certificates/blockcerts-verifier)
6. [Blockcerts と連動した NFT コントラクト](https://polygonscan.com/address/0xe51496841cd6050a6c17b81b721e60044017ee79#code)
7. [CIT Credentials v1.0](https://opensea.io/assets/matic/0xe51496841cd6050a6c17b81b721e60044017ee79/121)
8. [cert-tools](https://github.com/blockchain-certificates/cert-tools)
9. [cert-issuer](https://github.com/blockchain-certificates/cert-issuer)
10. [cert-schema](https://github.com/blockchain-certificates/cert-schema)
11. [Blockcerts Guide For Absolute Beginners (2021)](https://elamlaquighita.medium.com/blockcerts-guide-for-absolute-beginners-2021-1491a087dcc5)
12. [blockcerts-verifier-js](https://github.com/blockchain-certificates/cert-verifier-js)
13. [Block Explorer](https://www.blockchain.com/explorer)
14. [bitaddress](https://www.bitaddress.org/bitaddress.org-v3.3.0-SHA256-dec17c07685e1870960903d8f58090475b25af946fe95a734f88408cef4aa194.html?testnet=true)
15. [Bitcoin Address Generator](https://blockchain-academy.hs-mittweida.de/bitcoin-address-generator/)
16. [Blockcert Complete Project Step by Step](https://community.blockcerts.org/t/blockcert-complete-project-step-by-step/83)
17. [【Zenn】Blockcerts について調べる](https://zenn.dev/tatsuyasusukida/scraps/67bc1139e5410e#comment-6616e80c13f0b4)
<<<<<<< HEAD
18. [【Zenn】Blockcerts勉強会〜千葉工業大学のNFT学修証明書の裏側〜](https://zenn.dev/sakazuki_xyz/articles/eventreport-blockcerts)
19. [【Zenn】ブロックチェーンベースの証明書を検証するblockcerts-verifierの紹介](https://zenn.dev/sakazuki_xyz/articles/blockcerts-verifier)
20. [【Github】nft-vc](https://github.com/pitpa/nft-vc)
=======
18. [【Zenn】Blockcerts 勉強会〜千葉工業大学の NFT 学修証明書の裏側〜](https://zenn.dev/sakazuki_xyz/articles/eventreport-blockcerts)
19. [【Zenn】ブロックチェーンベースの証明書を検証する blockcerts-verifier の紹介](https://zenn.dev/sakazuki_xyz/articles/blockcerts-verifier)
20. [【Zenn】Blockcerts を使って Ethereum ブロックチェーン証明書を発行する方法](https://zenn.dev/tatsuyasusukida/articles/issuing-ethereum-certificates-using-blockcerts)
>>>>>>> 90e017d6522e658a9c39e7b916e9696b8d44ca84
