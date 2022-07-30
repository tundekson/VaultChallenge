import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const reachLib = loadStdlib(process.env);

const getSU = reachLib.standardUnit;

const convertToAU = (amount) => reachLib.parseCurrency(amount);

const convertToSU = (amount) => reachLib.formatCurrency(amount);


// create the  Accounts

const aliceAccount = await reachLib.newTestAccount(convertToAU(6000));

const bobAccount = await reachLib.newTestAccount(convertToAU(100));


// Alice Deploys the contract

const aliceContract = aliceAccount.contract(backend);


// Bob Attaches to the Contract

const bobContract = bobAccount.contract(backend, aliceContract.getInfo());

const getBalance = async (user) => convertToSU(await reachLib.balanceOf(user));

// Account Starting Balance

console.log(
	`Alice Starting balance is ${await getBalance(aliceAccount)} ${getSU}`
);
console.log(`Bob Starting balance is ${await getBalance(bobAccount)} ${getSU}`);

const sharedInteraction = (acc) => ({
	showTimer: (timer) => {
		console.log(`Count down timer for ${acc} is ${parseInt(timer)}`);
	},
});

await Promise.all([
	aliceContract.p.Alice({
		...sharedInteraction("Alice"),
		accountInheritance: convertToAU(5000),
		switchInheritance: () => {
			// returns 1 or 0 which stands for ture or false
			const switchAction = Math.floor(Math.random() * 2);
			console.log(
				switchAction == 0
					? ` Alice says : I'm not here`
					: `Alice says : I’m not here`
			);
			return switchAction;
		},
	}),
	bobContract.p.Bob({
		...sharedInteraction("Bob"),
		acceptTerms: () => {
			return true;
		},
	}),
]);

console.log(
	`Alice  balance  at the end of program is ${await getBalance(
		aliceAccount
	)} ${getSU}`
);
console.log(
	`Bob balance  at the end of program is ${await getBalance(
		bobAccount
	)} ${getSU}`
);
