"reach 0.1";

const COUNTDOWN_TIMER = 10;

const sharedInteraction = {
	showTimer: Fun([UInt], Null),
};

export const main = Reach.App(() => {
	const Alice = Participant("Alice", {
		...sharedInteraction,
		accountInheritance: UInt,
		switchInheritance: Fun([], UInt),
	});

	const Bob = Participant("Bob", {
		...sharedInteraction,
		acceptTerms: Fun([], Bool),
	});

	//start progrom
	init();

	Alice.only(() => {
		const accountInheritance = declassify(interact.accountInheritance);
	});

	Alice.publish(accountInheritance).pay(accountInheritance);

	commit();

	Bob.only(() => {
		const acceptTerms = declassify(interact.acceptTerms());
	});

	Bob.publish(acceptTerms);

	commit();

	Alice.only(() => {
		const switchInheritance = declassify(interact.switchInheritance());
	});

	Alice.publish(switchInheritance);

	transfer(accountInheritance).to(switchInheritance == 1 ? Alice : Bob);

	commit();

	each([Alice, Bob], () => {
		interact.showTimer(COUNTDOWN_TIMER);
	});

	exit();
});
