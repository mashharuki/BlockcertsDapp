# BlockcertsDapp
Blockcertsを利用したDapp開発用のリポジトリです。  

W3CのVC規格にも対応しているOSSで世界標準となりつつある。

## Blockcertsとは
Blockcertsは、参加者が記録を発行し、検証するために開発された標準のセットで、あらゆるブロックチェーンと連動しています。MITメディアラボとLearning Machineでの共同研究がベースになっています。このソフトウェアは、無料かつオープンソースで利用できるようになりました。

## Blockcertsを構成するコンポーネント

- cert-tools  
VCのテンプレートの生成に使うコンポーネント
- cert-schema  
VCのテンプレート作成者が自身のテンプレートを検証するために利用するコンポーネント
- cert-issuer  
証明書自体のハッシュを含む、発行機関から受信者へのトランザクションをBitcoin/Ethereumブロックチェーン上に作成し、ブロックチェーン証明書を発行するPythonライブラリです。
- cert-verifier 
cert-verifierはPythonのライブラリで、cert-verifier-jsはJavascriptのライブラリです。どちらもブロックチェーンの証明書を検証するためのものです。

## Blockcertsを利用した署名・検証の一例

- 1- Prerequisites: Python 3.7.9 & pip, Visual Studio tools, GCC compiler.

- 2- Setup the virtual environment of Python:

  - a- Install the virtual environment: pip install virtualenv

  - b- Create a virtualenv folder: virtualenv env

  - c- Activate the virtualenv: source ./venv/Scripts/activate

  - d- Deactivate the env (when you are done): deactivate

- 3- Clone the repository:
- 
```zsh
git clone https://github.com/blockchain-certificates/cert-issuer.git && cd cert-issuer
```

- 4- Modify setup.py :

Go to the line 13, and make it look like this:

```py
with open(os.path.join(here, ‘README.md’), encode=’utf-8’) as fp:
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

Visit this website to generate your wallet credentials: Link

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

- 13- Issue certificates:

Run the command:

python cert_issuer -c conf.ini

### 参考文献
1. [Blockcerts](https://www.blockcerts.org/)
2. [IPFSにファイルを保存してそれをブラウザに表示＋Blockcerts検証](https://akutsu0521.medium.com/ipfs%E3%81%AB%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E4%BF%9D%E5%AD%98%E3%81%97%E3%81%A6%E3%81%9D%E3%82%8C%E3%82%92%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%AB%E8%A1%A8%E7%A4%BA-blockcerts%E6%A4%9C%E8%A8%BC-4c5cdc967a83)
3. [Blockcerts(GitHub)](https://github.com/blockchain-certificates)
4. [Introducing Blockcerts](https://www.youtube.com/watch?v=5wAyS1e_hOo)
5. [blockcerts-verifier](https://github.com/blockchain-certificates/blockcerts-verifier)
6. [Blockcertsと連動したNFTコントラクト](https://polygonscan.com/address/0xe51496841cd6050a6c17b81b721e60044017ee79#code)
7. [CIT Credentials v1.0](https://opensea.io/assets/matic/0xe51496841cd6050a6c17b81b721e60044017ee79/121)
8. [cert-tools](https://github.com/blockchain-certificates/cert-tools)
9. [cert-issuer](https://github.com/blockchain-certificates/cert-issuer)
10. [cert-schema](https://github.com/blockchain-certificates/cert-schema)
11. [Blockcerts Guide For Absolute Beginners ( 2021)](https://elamlaquighita.medium.com/blockcerts-guide-for-absolute-beginners-2021-1491a087dcc5)
12. [blockcerts-verifier-js](https://github.com/blockchain-certificates/cert-verifier-js)
13. [Block Explorer](https://www.blockchain.com/explorer)
