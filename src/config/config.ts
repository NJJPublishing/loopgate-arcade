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
    cid: "bafybeif42jlthaiy7m7frxp6rsyfeqvxlmr2cpio4oiqfsjthurc6cxloa", // ATS Video
    nftId: [
      "0xbdce4c9a5a90d253920dacb1630be43a4cc22939023f0d2476e4ead6996aef79",
    ], // ATS Video
  },
  {
    cid: "bafybeieool5v4sxier6slnowz6fikhvnnlhjlpkwbpevbodrjgpvtfffde", // Deleted Scene with u/Buttfarm69 Video
    nftId: [
      "0xbdce4c9a5a90d253920dacb1630be43a4cc22939023f0d2476e4ead6996aef79",
    ], // Deleted Scene with u/Buttfarm69 Video
  },
];

export { unlockables };
