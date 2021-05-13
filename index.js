const { ethers } = require("ethers");
const axios = require('axios')


async function hecoBlock() {
  const provider = new ethers.providers.JsonRpcProvider('https://http-mainnet-node.defibox.com');
  const blockNumber = await provider.getBlockNumber()
  const targetBlock = 4668897
  if(targetBlock - blockNumber < 600) {
    axios({
      method: 'post',
      url: 'https://sc.ftqq.com/SCU173355Tb5a9f7d51cf933c0201b260081f9931d609cf7bc5f505.send',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: `text=HECO 距离奖励区块${targetBlock} 剩余 ${targetBlock - blockNumber}`
    }).catch(err => {
      console.log(err)
    });
  }
}


async function bscBlock() {
  const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed2.binance.org');
  const blockNumber = await provider.getBlockNumber()
  const targetBlock = 4668897
  if(targetBlock - blockNumber < 600) {
    axios({
      method: 'post',
      url: 'https://sc.ftqq.com/SCU173355Tb5a9f7d51cf933c0201b260081f9931d609cf7bc5f505.send',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: `text=BSC 距离奖励区块${targetBlock} 剩余 ${targetBlock - blockNumber}`
    }).catch(err => {
      console.log(err)
    });
  }
}

hecoBlock()
// bscBlock()