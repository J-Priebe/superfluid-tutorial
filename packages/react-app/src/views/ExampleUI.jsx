import { utils } from "ethers";
import { Button, Divider } from "antd";
import React, { useState } from "react";
import { Address, Balance } from "../components";

export default function ExampleUI({
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  return (
    <div>
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
        <h2>Example UI:</h2>
        <Divider />
        <div style={{ margin: 8 }}>
          <Button
            style={{ marginTop: 8 }}
            onClick={() => {
              console.log("boop");
              /* look how you call setPurpose on your contract: */
              /* notice how you pass a call back for tx updates too */
              // const result = tx(writeContracts.YourContract.setPurpose(newPurpose), update => {
              //   console.log("📡 Transaction Update:", update);
              //   if (update && (update.status === "confirmed" || update.status === 1)) {
              //     console.log(" 🍾 Transaction " + update.hash + " finished!");
              //     console.log(
              //       " ⛽️ " +
              //       update.gasUsed +
              //       "/" +
              //       (update.gasLimit || update.gas) +
              //       " @ " +
              //       parseFloat(update.gasPrice) / 1000000000 +
              //       " gwei",
              //     );
              //   }
              // });
              // console.log("awaiting metamask/web3 confirm result...", result);
              // console.log(await result);
            }}
          >
            Boop me
          </Button>
        </div>
        <Divider />
        Your Address:
        <Address address={address} ensProvider={mainnetProvider} fontSize={16} />
        <Divider />
        {/* use utils.formatEther to display a BigNumber: */}
        <h2>Your Balance: {yourLocalBalance ? utils.formatEther(yourLocalBalance) : "..."}</h2>
        <div>OR</div>
        <Balance address={address} provider={localProvider} price={price} />
        <Divider />
        Your Contract Address:
        <Address address={readContracts?.YourContract?.address} ensProvider={mainnetProvider} fontSize={16} />
      </div>

      {/*
        📑 Maybe display a list of events?
          (uncomment the event and emit line in YourContract.sol! )
      */}
      <div style={{ width: 600, margin: "auto", marginTop: 32, paddingBottom: 32 }}>
        <h2>Events: (TODO- some cool graph shit)</h2>
        {/* <List
          bordered
          dataSource={setPurposeEvents}
          renderItem={item => {
            return (
              <List.Item key={item.blockNumber + "_" + item.sender + "_" + item.purpose}>
                <Address address={item[0]} ensProvider={mainnetProvider} fontSize={16} />
                {item[1]}
              </List.Item>
            );
          }}
        /> */}
      </div>
    </div>
  );
}
