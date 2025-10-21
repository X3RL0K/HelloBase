// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloBase {
    string public message;

    constructor() {
        message = "Hello World on Base";
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}