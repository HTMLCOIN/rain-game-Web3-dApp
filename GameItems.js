export default [
	{
		"name": "",
		"type": "constructor",
		"payable": false,
		"inputs": [],
		"outputs": null,
		"constant": false,
		"anonymous": false
	},
	{
		"name": "ApprovalForAll",
		"type": "event",
		"payable": false,
		"inputs": [
			{
				"name": "account",
				"type": "address",
				"indexed": true
			},
			{
				"name": "operator",
				"type": "address",
				"indexed": true
			},
			{
				"name": "approved",
				"type": "bool",
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
		"name": "TransferBatch",
		"type": "event",
		"payable": false,
		"inputs": [
			{
				"name": "operator",
				"type": "address",
				"indexed": true
			},
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
				"name": "ids",
				"type": "uint256[]",
				"indexed": false
			},
			{
				"name": "values",
				"type": "uint256[]",
				"indexed": false
			}
		],
		"outputs": null,
		"constant": false,
		"anonymous": false
	},
	{
		"name": "TransferSingle",
		"type": "event",
		"payable": false,
		"inputs": [
			{
				"name": "operator",
				"type": "address",
				"indexed": true
			},
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
				"name": "id",
				"type": "uint256",
				"indexed": false
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
		"name": "URI",
		"type": "event",
		"payable": false,
		"inputs": [
			{
				"name": "value",
				"type": "string",
				"indexed": false
			},
			{
				"name": "id",
				"type": "uint256",
				"indexed": true
			}
		],
		"outputs": null,
		"constant": false,
		"anonymous": false
	},
	{
		"name": "PumpTalisman",
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
		"name": "SuperBoots",
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
		"name": "TimewarpCape",
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
		"name": "balanceOf",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "account",
				"type": "address",
				"indexed": false
			},
			{
				"name": "id",
				"type": "uint256",
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
		"name": "balanceOfBatch",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "accounts",
				"type": "address[]",
				"indexed": false
			},
			{
				"name": "ids",
				"type": "uint256[]",
				"indexed": false
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "uint256[]",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "isApprovedForAll",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "account",
				"type": "address",
				"indexed": false
			},
			{
				"name": "operator",
				"type": "address",
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
		"name": "marketplace",
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
		"name": "mint",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "_itemId",
				"type": "uint256",
				"indexed": false
			},
			{
				"name": "_amount",
				"type": "uint256",
				"indexed": false
			},
			{
				"name": "_to",
				"type": "address",
				"indexed": false
			}
		],
		"outputs": [],
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
		"name": "safeBatchTransferFrom",
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
				"name": "ids",
				"type": "uint256[]",
				"indexed": false
			},
			{
				"name": "amounts",
				"type": "uint256[]",
				"indexed": false
			},
			{
				"name": "data",
				"type": "bytes",
				"indexed": false
			}
		],
		"outputs": [],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "safeTransferFrom",
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
				"name": "id",
				"type": "uint256",
				"indexed": false
			},
			{
				"name": "amount",
				"type": "uint256",
				"indexed": false
			},
			{
				"name": "data",
				"type": "bytes",
				"indexed": false
			}
		],
		"outputs": [],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "setApprovalForAll",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "operator",
				"type": "address",
				"indexed": false
			},
			{
				"name": "approved",
				"type": "bool",
				"indexed": false
			}
		],
		"outputs": [],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "setMarketplace",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "_marketplace",
				"type": "address",
				"indexed": false
			}
		],
		"outputs": [],
		"constant": false,
		"anonymous": false
	},
	{
		"name": "supportsInterface",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "interfaceId",
				"type": "bytes4",
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
	},
	{
		"name": "uri",
		"type": "function",
		"payable": false,
		"inputs": [
			{
				"name": "",
				"type": "uint256",
				"indexed": false
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "string",
				"indexed": false
			}
		],
		"constant": false,
		"anonymous": false
	}
];
