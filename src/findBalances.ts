export class findBalances {

    private List: string[] =
    //This list with columns ABCDE shows 'person B paid person C £E on date D for B'.

['Date',	'From',	'To',	'Narrative',	'Amount',
'41640',	'Jon A',	'Sarah T',	'Pokemon Training',	'7.8',
'41643',	'Stephen S',	'Tim L',	'Lunch',	'4.37',
'41647',	'Laura B',	'Stephen S',	'Lunch',	'5.09',
'41650',	'Rob S',	'Ben B',	'Misc Morale',	'7.8',
'41653',	'Stephen S',	'Ben B',	'Beers',	'7.36',
'41654',	'Sam N',	'Stephen S',	'Spline Reticulation',	'11.63',
'41658',	'Stephen S',	'Gergana I',	'Beers',	'5.88',
'41659',	'Sam N',	'Stephen S',	'Beers',	'8.2',
'41663',	'Laura B',	'Sam N',	'Coffee',	'11.68',
'41667',	'Todd',	'Ben B',	'Coffee',	'6.81',
'41670',	'Sam N',	'Gergana I',	'Services Rendered',	'6.29',
'41671',	'Todd',	'Ben B',	'Snooker Night',	'6.87',
'41674',	'Chris W',	'Ben B',	'Spline Reticulation',	'6.03',
'41675',	'Todd',	'Rob S',	'Sandbox Help',	'5.62',
'41677',	'Jon A',	'Sam N',	'Beers',	'1.65',
'41680',	'Dan W',	'Sam N',	'Lunch',	'0.93',
'41684',	'Laura B',	'Stephen S',	'Snooker Night',	'10.78',
'41685',	'Stephen S',	'Gergana I',	'Rails Consultancy',	'6.91',
'41688',	'Sarah T',	'Sam N',	'Spline Reticulation',	'1.6',
'41692',	'Tim L',	'Sam N',	'Pokemon Training',	'5.2',
'41695',	'Todd',	'Rob S',	'Automated Testing Services',	'7.1',
'41697',	'Ben B',	'Rob S',	'Snooker Night',	'8.41',
'41699',	'Stephen S',	'Jon A',	'Coffee',	'8.75',
'41701',	'Sam N',	'Gergana I',	'Lunch',	'8.76',
'41705',	'Todd',	'Laura B',	'Pokemon Training',	'9.39',
'41708',	'Todd',	'Gergana I',	'Sandbox Help',	'1.62',
'41712',	'Sarah T',	'Ben B',	'Spline Reticulation',	'2.1',
'41715',	'Sarah T',	'Stephen S',	'Beers',	'0.66',
'41718',	'Tim L',	'Sarah T',	'Lego Assistance',	'2.28',
'41720',	'Rob S',	'Tim L',	'Misc Morale',	'1.95',
'41721',	'Jon A',	'Sam N',	'Lunch',	'8.49',
'41725',	'Ben B',	'Sam N',	'Misc Morale',	'10.76',
'41727',	'Todd',	'Sarah T',	'Git-Fu Rendered',	'5.01',
'41728',	'Dan W',	'Laura B',	'Lunch',	'4.77',
'41730',	'Sam N',	'Laura B',	'Lunch',	'2.87',
'41733',	'Todd',	'Ben B',	'Rails Consultancy',	'10.85',
'41735',	'Jon A',	'Stephen S',	'Beers',	'8.91',
'41737',	'Stephen S',	'Sam N',	'Lego Assistance',	'2.96',
'41738',	'Ben B',	'Rob S',	'Coffee',	'1.31',
'41739',	'Todd',	'Sarah T',	'Snooker Night',	'3.55',
'41740',	'Todd',	'Laura B',	'Coffee',	'3.72',
'41744',	'Rob S',	'Sam N',	'Snooker Night',	'8.86',
'41748',	'Ben B',	'Gergana I',	'Lunch',	'7.61',
'41749',	'Dan W',	'Gergana I',	'Beers',	'11.92',
'41752',	'Stephen S',	'Rob S',	'Poker Winnings',	'3.41',
'41753',	'Tim L',	'Dan W',	'Misc Morale',	'6.38',
'41755',	'Todd',	'Tim L',	'Lunch',	'1.46',
'41759',	'Laura B',	'Ben B',	'Golf Bets',	'5.77',
'41762',	'Jon A',	'Gergana I',	'Rails Consultancy',	'10.51',
'41764',	'Dan W',	'Sarah T',	'Stationary Items',	'5.06',
'41765',	'Tim L',	'Chris W',	'Audit and Other Financial Services',	'7.45',
'41769',	'Laura B',	'Todd',	'Lego Assistance',	'10.63',
'41772',	'Tim L',	'Ben B',	'Coffee',	'5.89',
'41776',	'Rob S',	'Sarah T',	'Misc Morale',	'3.61',
'41778',	'Jon A',	'Todd',	'Beers',	'9.04',
'41781',	'Tim L',	'Todd',	'Coffee',	'3.81',
'41783',	'Sam N',	'Tim L',	'Sandcastle Help',	'8.8',
'41785',	'Ben B',	'Laura B',	'Lunch',	'7.36',
'41789',	'Laura B',	'Todd',	'Lunch',	'7.01',
'41790',	'Tim L',	'Ben B',	'Coffee',	'8.23',
'41791',	'Tim L',	'Stephen S',	'Rails Consultancy',	'5.2',
'41795',	'Dan W',	'Gergana I',	'Spline Reticulation',	'5.61',
'41799',	'Sarah T',	'Stephen S',	'Lego Assistance',	'11.5',
'41801',	'Stephen S',	'Sam N',	'Lego Assistance',	'5.14',
'41804',	'Todd',	'Sam N',	'Lego Assistance',	'6.3',
'41806',	'Stephen S',	'Dan W',	'Lunch',	'4.79',
'41810',	'Ben B',	'Chris W',	'Rails Consultancy',	'1.34',
'41812',	'Tim L',	'Stephen S',	'Coffee',	'6.44',
'41813',	'Stephen S',	'Ben B',	'Spline Reticulation',	'11.85',
'41816',	'Chris W',	'Todd',	'Beers',	'9.81',
'41818',	'Sarah T',	'Gergana I',	'Beers',	'4.03',
'41819',	'Chris W',	'Laura B',	'Jenkins Fees',	'8.7',
'41821',	'Rob S',	'Jon A',	'Lunch',	'2.67',
'41822',	'Stephen S',	'Dan W',	'Lego Assistance',	'2.9',
'41826',	'Sam N',	'Jon A',	'Beers',	'4.37',
'41829',	'Dan W',	'Tim L',	'Misc Morale',	'5.45',
'41831',	'Dan W',	'Sarah T',	'Misc Morale',	'5.05',
'41834',	'Gergana I',	'Sam N',	'Coffee',	'10.92',
'41836',	'Jon A',	'Dan W',	'Coffee',	'11.75',
'41838',	'Gergana I',	'Stephen S',	'Snooker Night',	'11.57',
'41842',	'Sarah T',	'Ben B',	'Coffee',	'11.56',
'41843',	'Rob S',	'Tim L',	'Lego Assistance',	'11.47',
'41845',	'Laura B',	'Stephen S',	'Poker Winnings',	'9.42',
'41848',	'Gergana I',	'Chris W',	'Pokemon Training',	'2.33',
'41849',	'Jon A',	'Sam N',	'Lunch',	'5.31',
'41852',	'Sam N',	'Gergana I',	'Coffee',	'2.72',
'41854',	'Laura B',	'Rob S',	'Rails Consultancy',	'6.26',
'41855',	'Gergana I',	'Ben B',	'Coffee',	'7.81',
'41859',	'Tim L',	'Laura B',	'Coffee',	'3.76',
'41862',	'Stephen S',	'Rob S',	'Lunch',	'8.91',
'41864',	'Sarah T',	'Todd',	'Beers',	'8.25',
'41865',	'Chris W',	'Tim L',	'Misc Morale',	'6.59',
'41869',	'Jon A',	'Tim L',	'Lego Assistance',	'7.22',
'41872',	'Ben B',	'Gergana I',	'Rails Consultancy',	'9.25',
'41873',	'Chris W',	'Sam N',	'Golf Bets',	'1.9',
'41874',	'Ben B',	'Stephen S',	'Lunch',	'5.02',
'41875',	'Laura B',	'Stephen S',	'Audit and Other Financial Services',	'7.45',
'41876',	'Gergana I',	'Stephen S',	'Beers',	'8.57',
'41879',	'Laura B',	'Tim L',	'Beers',	'0.57',
'41880',	'Ben B',	'Chris W',	'Lunch',	'1.66',
'41883',	'Sam N',	'Gergana I',	'Pokemon Training',	'9.41',
'41885',	'Jon A',	'Tim L',	'Lunch',	'8.13',
'41888',	'Dan W',	'Todd',	'Lunch',	'1.8',
'41891',	'Todd',	'Dan W',	'Audit and Other Financial Services',	'3.93',
'41894',	'Laura B',	'Jon A',	'Git-Fu Rendered',	'3.11',
'41898',	'Gergana I',	'Rob S',	'Golf Bets',	'1.28',
'41902',	'Jon A',	'Ben B',	'Beers',	'3.71',
'41906',	'Jon A',	'Laura B',	'Golf Bets',	'5.61',
'41909',	'Sarah T',	'Dan W',	'Beers',	'11.6',
'41911',	'Ben B',	'Tim L',	'Misc Morale',	'3.43',
'41912',	'Jon A',	'Dan W',	'Sandbox Help',	'9.26',
'41916',	'Ben B',	'Todd',	'Lunch',	'11.28',
'41918',	'Sarah T',	'Tim L',	'Spline Reticulation',	'7.44',
'41922',	'Ben B',	'Gergana I',	'Beers',	'3.98',
'41926',	'Ben B',	'Gergana I',	'Coffee',	'11.65',
'41930',	'Gergana I',	'Rob S',	'Jenkins Fees',	'5.47',
'41931',	'Dan W',	'Sam N',	'Automated Testing Services',	'8',
'41934',	'Dan W',	'Sam N',	'Beers',	'0.55',
'41935',	'Jon A',	'Dan W',	'Lunch',	'2.37',
'41937',	'Laura B',	'Todd',	'Beers',	'8.42',
'41940',	'Gergana I',	'Dan W',	'Misc Morale',	'5.04',
'41941',	'Dan W',	'Ben B',	'Rails Consultancy',	'5.87',
'41942',	'Chris W',	'Gergana I',	'Jenkins Fees',	'8.9',
'41945',	'Sarah T',	'Tim L',	'Lego Assistance',	'4.67',
'41947',	'Chris W',	'Rob S',	'Sandbox Help',	'6.15',
'41950',	'Rob S',	'Ben B',	'Rails Consultancy',	'3',
'41952',	'Sam N',	'Laura B',	'Beers',	'7.76',
'41954',	'Jon A',	'Ben B',	'Stationary Items',	'0.73',
'41957',	'Sam N',	'Dan W',	'Spline Reticulation',	'0.8',
'41961',	'Sam N',	'Chris W',	'Golf Bets',	'6.44',
'41962',	'Laura B',	'Jon A',	'Coffee',	'2.61',
'41964',	'Chris W',	'Todd',	'Lego Assistance',	'1.42',
'41966',	'Todd',	'Sarah T',	'Beers',	'2.24',
'41968',	'Chris W',	'Rob S',	'Pokemon Training',	'5.76',
'41971',	'Tim L',	'Dan W',	'Beers',	'8.76',
'41975',	'Jon A',	'Sam N',	'Pokemon Training',	'11.04',
'41979',	'Gergana I',	'Rob S',	'Lego Assistance',	'5.64',
'41982',	'Jon A',	'Chris W',	'Pokemon Training',	'2.26',
'41985',	'Dan W',	'Tim L',	'Coffee',	'4.5',
'41987',	'Gergana I',	'Laura B',	'Lunch',	'4.26',
'41989',	'Todd',	'Tim L',	'Poker Winnings',	'7.17',
'41991',	'Chris W',	'Ben B',	'Coffee',	'11.17',
'41993',	'Rob S',	'Gergana I',	'Lunch',	'1.07',
'41994',	'Gergana I',	'Laura B',	'Pokemon Training',	'6.86',
'41995',	'Dan W',	'Jon A',	'Lunch',	'3.66',
'41998',	'Todd',	'Rob S',	'Lego Assistance',	'1.86',
'42001',	'Ben B',	'Laura B',	'Coffee',	'1.44',
'42002',	'Ben B',	'Sam N',	'Coffee',	'5.26'];

    private names: string[] =
//This lists all the required names.

['Ben B','Chris W','Dan W','Gergana I','Jon A','Laura B','Rob S','Sam N','Sarah T','Stephen S','Tim L','Todd',];

    findBalances() {

        var x: number = 0;
        var y: number = 0;
        var z: number = 0;
        var zchange: number = 0;
        var Balance: string = "";

        while (x<this.names.length) {

            if (this.List[y+1] == this.names[x]) {
                zchange = +this.List[y+4];
                z = z + zchange;
            }
            if (this.List[y+2] == this.names[x]) {
                zchange = +this.List[y+4];
                z = z - zchange;
            }

            if (x<this.names.length && y == 745) {

                Balance = this.names[x] + " is owed £" + z.toFixed(2);
                console.log(Balance);
                x=x+1;

                y=0;
                z=0;
                zchange=0;
            }
            else {
                y=y+5;
            }
  
        }

    };

}
