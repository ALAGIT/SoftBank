import { Trans2013 } from './Transactions2013';

var List0 = new Trans2013();

export class findAccount {

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
'42002',	'Ben B',	'Sam N',	'Coffee',	'5.26',
'42005',	'Laura B',	'Sarah T',	'Misc Morale',	'10.54',
'42008',	'Stephen S',	'Gergana I',	'Lunch',	'3.22',
'42011',	'Ben B',	'Jon A',	'Fantasy Football',	'9.93',
'42015',	'Ben B',	'Todd',	'Lunch',	'7.33',
'42016',	'Laura B',	'Ben B',	'Beers',	'8.94',
'42019',	'Todd',	'Rob S',	'Beers',	'10.19',
'42020',	'Laura B',	'Jon A',	'Lego Assistance',	'0.69',
'42022',	'Jon A',	'Sarah T',	'Coffee',	'10.73',
'42026',	'Gergana I',	'Todd',	'Coffee',	'0.8',
'42028',	'Gergana I',	'Chris W',	'Coffee',	'8.49',
'42031',	'Laura B',	'Tim L',	'Jenkins Fees',	'0.52',
'42033',	'Sam N',	'Chris W',	'Lunch',	'9.01',
'42036',	'Stephen S',	'Laura B',	'Coffee',	'7.53',
'42037',	'Stephen S',	'Rob S',	'Fantasy Football',	'7.43',
'42039',	'Rob S',	'Stephen S',	'Fantasy Football',	'5.78',
'42041',	'Dan W',	'Gergana I',	'Automated Testing Services',	'10.29',
'42042',	'Jon A',	'Chris W',	'Rails Consultancy',	'7.37',
'42045',	'Sam N',	'Gergana I',	'Sandbox Help',	'9.84',
'42046',	'Chris W',	'Stephen S',	'Misc Morale',	'0.68',
'42048',	'Laura B',	'Gergana I',	'Beers',	'6.56',
'42051',	'Chris W',	'Dan W',	'Jenkins Fees',	'1.28',
'42052',	'Sarah T',	'Dan W',	'Sandbox Help',	'11.48',
'42053',	'Stephen S',	'Rob S',	'Lego Assistance',	'4.83',
'42056',	'Dan W',	'Ben B',	'Pokemon Training',	'0.5',
'42059',	'Todd',	'Gergana I',	'Coffee',	'9.08',
'42061',	'Stephen S',	'Jon A',	'Pokemon Training',	'4.23',
'42065',	'Todd',	'Chris W',	'Sandbox Help',	'1.92',
'42067',	'Laura B',	'Jon A',	'Sandcastle Help',	'9.09',
'42069',	'Stephen S',	'Gergana I',	'Lego Assistance',	'9.4',
'42071',	'Ben B',	'Sam N',	'Pokemon Training',	'11.32',
'42074',	'Stephen S',	'Jon A',	'Sandcastle Help',	'11.57',
'42078',	'Todd',	'Sam N',	'Pokemon Training',	'2.29',
'42082',	'Laura B',	'Chris W',	'Coffee',	'9.96',
'42084',	'Jon A',	'Gergana I',	'Beers',	'7.54',
'42088',	'Gergana I',	'Ben B',	'Automated Testing Services',	'2.39',
'42091',	'Stephen S',	'Tim L',	'Lunch',	'5.83',
'42092',	'Gergana I',	'Ben B',	'Audit and Other Financial Services',	'10.85',
'42093',	'Tim L',	'Todd',	'Pokemon Training',	'8.6',
'42096',	'Stephen S',	'Chris W',	'Pokemon Training',	'1.11',
'42099',	'Chris W',	'Ben B',	'Lunch',	'0.96',
'42103',	'Chris W',	'Rob S',	'Audit and Other Financial Services',	'11.79',
'42106',	'Gergana I',	'Laura B',	'Stationary Items',	'8.37',
'42107',	'Laura B',	'Tim L',	'Services Rendered',	'1.27',
'42109',	'Ben B',	'Sam N',	'Lego Assistance',	'8.5',
'42113',	'Stephen S',	'Chris W',	'White Water Rafting',	'8.91',
'42117',	'Tim L',	'Todd',	'Misc Morale',	'8.1',
'42118',	'Tim L',	'Sarah T',	'Arcade Social',	'6.38',
'42120',	'Jon A',	'Todd',	'Stationary Items',	'8.44',
'42121',	'Ben B',	'Jon A',	'Pokemon Training',	'10.91'];

    findAccount(name: string) {

        var x1: number = 0;
        var x2: number = 0;
        console.log('Debits:')
        var debit: string = "";

        while (x1<List0.List.length) {
            if (List0.List[x1+3] == name) {
                debit = ' - £' + List0.List[x1+9] + ' to ' + List0.List[x1+5] + ' on ' + List0.List[x1+1].substring(0,10) + ' for ' + List0.List[x1+7];
                console.log(debit);
                //Person A is 'name' is debitted.
            }
            x1=x1+10;
            //Moves to next transaction.
        }

        while (x2<this.List.length) {
            if (this.List[x2+1] == name) {
                debit = ' - £' + this.List[x2+4] + ' to ' + this.List[x2+2] + ' on ' + this.List[x2] + ' for ' + this.List[x2+3];
                console.log(debit);
                //Person A is 'name' is debitted.
            }
            x2=x2+5;
            //Moves to the next row.
        }

        var y1: number = 0;
        var y2: number = 0;
        console.log('Credits:')
        var credit: string = "";

        while (y1<List0.List.length) {   
            if (List0.List[y1+5] == name) {
                credit = ' - £' + List0.List[y1+9] + ' from ' + List0.List[y1+3] + ' on ' + List0.List[y1+1].substring(0,10) + ' for ' + List0.List[y1+7];
                console.log(credit);
                //Person A is 'name' is debitted.
            }
            y1=y1+10;
            //Moves to the next row.
        }

        while (y2<this.List.length) {   
            if (this.List[y2+2] == name) {
                credit = ' - £' + this.List[y2+4] + ' from ' + this.List[y2+1] + ' on ' + this.List[y2] + ' for ' + this.List[y2+3];
                console.log(credit);
                //Person A is 'name' is debitted.
            }
            y2=y2+5;
            //Moves to the next row.
        }

    };

}
