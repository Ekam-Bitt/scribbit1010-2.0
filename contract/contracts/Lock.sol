// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";//storage for metadata
import "@openzeppelin/contracts/utils/Counters.sol"; //for incrementation
import "@openzeppelin/contracts/access/Ownable.sol"; 

contract Scribble is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdCounter;
  mapping (address => uint) user;
  constructor() ERC721("Scribble","scrb"){}

  function mint(address _to, string memory _uri) public returns(uint256) {
    uint256 tokenId = _tokenIdCounter.current();
    _tokenIdCounter.increment();
    _mint(_to, tokenId);
    _setTokenURI(tokenId, _uri);
    user[msg.sender] = tokenId;  
    return tokenId; 
  }
 
}
