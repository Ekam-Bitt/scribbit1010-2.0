// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'

// The 'fs' builtin module on Node.js provides access to the file system
import fs from 'fs'

// The 'path' module provides helpers for manipulating filesystem paths
import path from 'path'

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY1MTIyMGYwM2U1MDg2OUNGNUY5ZDY1ZUU5OWU5ODdEODY3MUQ1MEMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NzM3MzA4MDM4MSwibmFtZSI6ImRpdmVyc2lvbiJ9.FxHfseKdisgKtvwjAaFICkw5nwJB2_b81XYsCMYQ-JE'

async function storeNFT() {
    // load the file from disk
    const image = await fileFromPath("file:///C:/Users/Public/Downloads/")

    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })
    const date = new Date();
    const name = "Doodle pad picture"
    const description = `This picture is drawn on" + ${date}`
    // call client.store, passing in the image & metadata
    return nftstorage.store({
        image,
        name,
        description,
    })
}

main()
  .catch(err => {
      console.error(err)
      process.exit(1)
  })