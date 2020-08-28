export function Currency ({currency}) {

    let sign = null;
    switch (currency) {
        case 'USD':
            sign = '$'
            break;
        case 'ILS':
            sign = '₪'
            break;
        case 'EUR':
            sign = '€'
            break;
        default:
            sign = '$'
            break;
    }

    return <span>{sign}</span> ;
}

