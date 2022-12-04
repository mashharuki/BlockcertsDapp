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
