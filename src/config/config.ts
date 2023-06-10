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
      "0xde2839b3dea14689613bb52ea320e660f1071b582a2481c6bc577fce7ad671b0",
    ], // ATS Video
  },
  {
    cid: "bafybeibbfa7zxtjxy56kw345n3r6wpdwrln3dn7po623lwcmzf7l576twa", // Deleted Scene with u/Buttfarm69 Video
    nftId: [
      "0xde2839b3dea14689613bb52ea320e660f1071b582a2481c6bc577fce7ad671b0",
    ], // Deleted Scene with u/Buttfarm69 Video
  },
  {
    cid: "bafybeifp4kct5qzgprjmt7jyi5jf5hdksp7vezpet6qkzpc5www56w2tnm", // ATS Video Game (iFrame NJJ Full Version)
    nftId: [
      "0xde2839b3dea14689613bb52ea320e660f1071b582a2481c6bc577fce7ad671b0",
    ], // ATS Video Game (iFrame NJJ Full Version)
  },
  {
    cid: "bafybeifxxpoeoxzv4dx5jdsjc6l6f3n2qd4ibpeiwlwj4tjcngcbat7heu", // VIP Placeholder 01
    nftId: [
      "0xde2839b3dea14689613bb52ea320e660f1071b582a2481c6bc577fce7ad671b0",
    ], // VIP Placeholder 01
  },
  {
    cid: "bafybeic2g73iaqlqjsgtmadlsiyqah23qnjsjlevs4byxyqo7zkhvj4duq", // VIP Placeholder 02
    nftId: [
      "0xde2839b3dea14689613bb52ea320e660f1071b582a2481c6bc577fce7ad671b0",
    ], // VIP Placeholder 02
  },
];

export { unlockables };
