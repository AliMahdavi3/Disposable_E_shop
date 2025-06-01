import React, { useEffect, useState } from 'react'
import EditProductCount from './productSection/EditProductCount';
import TableTitles from './productSection/TableTitles';
import ProductsSection from './productSection/ProductsSection';
import { deleteItemsFromCartService, getCartItemsService } from '../../services/cart';
import SpinnerLoad from '../../components/SpinnerLoad';
import AdditionalCommentBox from './order/AdditionalCommentBox';
import OrderBox from './OrderBox';
import ShippingAddressButton from './order/ShippingAddressButton';
import { Alert, Confirm } from '../../utils/sweetalert2';

const ProductsList = () => {

    const [cartItems, setCartItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [additionalComment, setAdditionalComment] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFetchedCartItems = async () => {
        setLoading(true);
        try {
            const res = await getCartItemsService();
            if (res.status === 200) {
                setCartItems(res.data);
                console.log(res.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleFetchedCartItems()
    }, []);

    const handleDeleteItemFromCart = async (productId) => {
        if (await Confirm('حذف محصول از سبد خرید!', 'آیا از حذف محصول مطمئن هستید ؟', 'question')) {
            try {
                const res = await deleteItemsFromCartService(productId);
                if (res.status === 200) {
                    Alert('عملیات موفقیت آمیز بود!', 'محصول از سبد حذف شد!', 'success');
                    handleFetchedCartItems();
                }
            } catch (error) {
                Alert('خطایی رخ داده است!', error.message, 'error');
                console.log(error);
            }
        }
    }

    return (
        <>
            {
                loading ? (
                    <div className='h-screen'>
                        <SpinnerLoad />
                    </div>
                ) : (
                    <>
                        <div dir='ltr' className="grid grid-cols-3 gap-4">
                            <EditProductCount
                                open={open}
                                setOpen={setOpen}
                                currentItem={currentItem}
                                cartItems={cartItems.cart}
                                setCartItems={setCartItems}
                                handleFetchedCartItems={handleFetchedCartItems}
                            />
                            <div className="col-span-3 md:col-span-2 w-full h-fit">
                                <TableTitles />
                                <ProductsSection
                                    handleDeleteItemFromCart={handleDeleteItemFromCart}
                                    cartItems={cartItems.cart}
                                    setCurrentItem={setCurrentItem}
                                    setOpen={setOpen}
                                />
                            </div>
                            <div className="col-span-3 md:col-span-1">
                                <OrderBox
                                    cartItems={cartItems}
                                    additionalComment={additionalComment}
                                    shippingAddress={shippingAddress}
                                    handleFetchedCartItems={handleFetchedCartItems}
                                />
                                <ShippingAddressButton
                                    shippingAddress={shippingAddress}
                                    setShippingAddress={setShippingAddress}
                                />
                            </div>
                        </div>
                        <AdditionalCommentBox
                            additionalComment={additionalComment}
                            setAdditionalComment={setAdditionalComment}
                        />
                    </>
                )
            }
        </>
    )
}

export default ProductsList
