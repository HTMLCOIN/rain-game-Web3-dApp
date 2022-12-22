export default [
	{
		"name": "",
		"type": "constructor",
		"payable": false,
		"inputs": [
			{
				"name": "name_",
				"type": "string",
				"indexed": false
			},
			{
				"name": "symbol_",
				"type": "string",
				"indexed": false
			},
			{
				"name": "decimals_",
				"type": "uint8",
				"indexed": false
			}
		],
		"outputs": null,
		"constant": false,
		"anonymous": false
	},
	{
		"name": "Approval",
		"type": "event",
		"payable": false,
		"inputs": [
			{
				"name": "owner",
				"type": "address",
				"indexed": true
			},
			{
				"name": "spender",
				"type": "address",
				"indexed": true
			},
			{
				"name": "value",
				"type": "uint256",
				"indexed": false
			}
		],
		"outputs": null,
		"constant": false,
		"anonymous": false
	},
	{
		"name": "OwnershipTransferred",
		"type": "event",
		"payable": false,
		"inputs": [
			{
				"name": "previousOwner",
				"type": "address",
				"indexed": true
			},
			{
				"name": "newOwner",
				"type": "address",
				"indexed": true
			}
		],
		"outputs": null,
		"constant": false,
		"anonymous": false
	},
	{
		"name": "Transfer",
		"type": "event",
		"payable": false,
		"inputs": [
			{
				"name": "from",
				"type": "address",
				"indexed": true
			},
			{
				"name": "to",
				"type": "address",
				"indexed": true
			},
			{
				"name": "value",
				"type": "uint256",
				"indexed": false
			}
		],
		"outputs": null,
		"constant": false,
		"anonymous": false
	},
	{
		"name": "allowance",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "owner",
				"type": "address",
				"indexed": false
			},
			{
				"name": "spender",
				"type": "address",
				"indexed": false
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "uint256",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "approve",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address",
				"indexed": false
			},
			{
				"name": "amount",
				"type": "uint256",
				"indexed": false
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "balanceOf",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "account",
				"type": "address",
				"indexed": false
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "uint256",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "decimals",
		"type": "function",
		"payable": false,
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "uint8",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "decreaseAllowance",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address",
				"indexed": false
			},
			{
				"name": "subtractedValue",
				"type": "uint256",
				"indexed": false
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "increaseAllowance",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address",
				"indexed": false
			},
			{
				"name": "addedValue",
				"type": "uint256",
				"indexed": false
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "mint",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "account",
				"type": "address",
				"indexed": false
			},
			{
				"name": "amount",
				"type": "uint256",
				"indexed": false
			}
		],
		"outputs": [],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "name",
		"type": "function",
		"payable": false,
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "string",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "owner",
		"type": "function",
		"payable": false,
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "renounceOwnership",
		"type": "function",
		"payable": false,
		"inputs": [],
		"outputs": [],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "symbol",
		"type": "function",
		"payable": false,
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "string",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "totalSupply",
		"type": "function",
		"payable": false,
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "uint256",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "transfer",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "to",
				"type": "address",
				"indexed": false
			},
			{
				"name": "amount",
				"type": "uint256",
				"indexed": false
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "transferFrom",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "from",
				"type": "address",
				"indexed": false
			},
			{
				"name": "to",
				"type": "address",
				"indexed": false
			},
			{
				"name": "amount",
				"type": "uint256",
				"indexed": false
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "transferOwnership",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address",
				"indexed": false
			}
		],
		"outputs": [],
		"constant": false,
		"anonymous": false
	}
];
