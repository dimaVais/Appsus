export function OnSale({isOnSale}){

    return  (isOnSale === 'FOR_SALE') ? <div className='onSale'>ON SALE</div> : '';
}