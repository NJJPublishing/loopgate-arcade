import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  {
    cid: "bafybeiehgpaip4f7jafzf7imgannx3nnv3ubaiwp6ph56mlyzijpqxi45m", // HTML blog example
    nftId: [
      "0xbdce4c9a5a90d253920dacb1630be43a4cc22939023f0d2476e4ead6996aef79",
    ], // You need to own 'GM #1' to unlock this.
  },
];

export { unlockables };
