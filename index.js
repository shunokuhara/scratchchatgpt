const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);



class Scratch3NewBlocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'newblocks',
            name: 'Chat GPT',
            blocks: [
                {
                    opcode: 'testAsync',
                    text: 'chatGPT',
                    blockType: BlockType.COMMAND
			},
			{
			opcode:'human',
			blockType: BlockType.REPORTER,
			text: 'どの人物について知りたいですか？　[N]',
			arguments:{
				N:{
					type: ArgumentType.STRING,
					defaultValue:'Napoleon'
				}
				}
			}
			
			
			
			
			
			
			
            ],
            menus: {
            }
        };
	}
	
	async human(args){
		let n = args.N
		const completion = await openai.createChatCompletion({model: "gpt-3.5-turbo",messages: [{ role: "user", content: n }],});
		//console.log(completion.data.choices[0].message.content)
		return completion.data.choices[0].message.content
		
	}

    //👇await出来ようにPromiseの関数を定義
    myFirstPromise(message) {
        console.log('一秒遅延しています...');
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(message);
            }, 1000);
        })
    }

    //👇クラス内にasyncメンバ関数を定義
	async myFirstAsync() {

		const result = await this.myFirstPromise('はじめてのAsync/Awaitへようこそ！');

        return result;
    }

    testAsync () {
        //👇スクラッチブロックからでもasync関数が呼び出せるようになる
        this.myFirstAsync().then(result => {
            console.log(result);
        });
	}
}

module.exports = Scratch3NewBlocks;
