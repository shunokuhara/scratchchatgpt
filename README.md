# scratchchatgpt

環境
###nodejs:v14.21.3以下
#$##npm:v6.14.18以下

ダウンロードが必要なパッケージなど
ダウンロード：scratch-guiとscratch-vm
scratch-gui
https://github.com/scratchfoundation/scratch-gui

scratch-vm
https://github.com/scratchfoundation/scratch-vm

scratch-vm上にasync/await構文を使う方法
$ cd scratch-vm

scratch-vmのエンドポイントとなっているvirtual-machine.jsに

//👇とりあえずコードの冒頭に二行を追加
require('core-js');
require('regenerator-runtime/runtime');

//...以下略

新規ボタンを設定方法
https://p-school.tacoskingdom.com/blog/26

上記のを参考に新規ボタンを作成し、scratch-vm/src/extensions/新しいボタン（例：scratch3_newblocks）下に今回のindex.jsを作成する


